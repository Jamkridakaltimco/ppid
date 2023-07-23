import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useResponse from './response'
import axios from './axios'

export default function useAuth () {
  const auth = ref({})
  const router = useRouter()
  const errors = ref('')
  const { successResponse, errorResponse, questionResponse } = useResponse()

  async function doLogin (payload) {
    try {
      await axios.get('/sanctum/csrf-cookie')
      const response = await axios.post('/api/login', payload)
      const token = await response.data.content.access_token
      setHeaderToken(token)
      successResponse('Anda telah masuk')
      await getAuth()
      router.push('/admin')
    } catch (error) {
      if (error.response.status === 401) {
        errors.value = error.response.data.message
        errorResponse(errors.value)
      }
      if (error.response.status === 422) errors.value = error.response.data.errors
      if (error.response.status === 500) errorResponse('Server In Trouble call your administrator')
    }
  }

  async function doRegister (payload) {
    try {
      const response = await axios.post('/api/register', payload)
      const token = await response.data.access_token
      setHeaderToken(token)
      router.push('/')
    } catch (error) {
      errorResponse(error.response.data.message)
    }
  }

  async function getAuth () {
    try {
      const response = await axios.get('/api/profile')
      auth.value = await response.data
    } catch (error) {
      auth.value = null
      removeHeaderToken()
      errorResponse(error.response.data.message)
    }
  }

  async function doLogout () {
    const response = await questionResponse('Anda yakin ingin keluar?')
    if (response.isConfirmed) {
      try {
        auth.value = ''
        await axios.get('/api/logout')
        removeHeaderToken()
        await successResponse('Anda telah keluar')
        await router.push('/login')
      } catch (error) {
        errorResponse(error.response.data.message)
      }
    }
  }

  async function doUpdate (payload) {
    try {
      await axios.post('api/profile', payload)
      await successResponse('Data Telah Disimpan')
      await getAuth()
    } catch (error) {
      errorResponse(error.response.data.message)
    }
  }

  function setHeaderToken (token) {
    const storage = localStorage
    storage.setItem('access_token', token)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  function removeHeaderToken () {
    delete axios.defaults.headers.common.Authorization
    localStorage.removeItem('access_token')
  }

  return {
    auth,
    errors,
    doLogin,
    doLogout,
    doRegister,
    doUpdate,
    getAuth
  }
}
