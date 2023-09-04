import axios from '@/services/axios'
import useExecute from '@/services/execute'
import router from '@/router'
import { ref } from 'vue'

export default function useFile() {
  const files = ref([])
  const errors = ref({})
  const { questionResponse, successResponse, errorResponse } = useExecute()

  async function indexFile() {
    const response = await axios.get(`/api/file`)
    files.value = await response.data
  }

  async function optionFile() {
    const response = await axios.get(`/api/file?type=option`)
    files.value = await response.data
  }

  async function updateFile(id, payload) {
    try {
      await axios.put(`/api/file/${id}`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function storeFile(payload) {
    try {
      await axios.post(`/api/file`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function showFile(id) {
    const response = await axios.get(`/api/file/${id}`)
    files.value = await response.data
  }

  async function destroyFile(id) {
    const response = await questionResponse('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      await axios.delete(`/api/file/${id}`)
      await successResponse('Data Telah Dihapus')
      await router.back()
    }
  }

  return {
    files,
    indexFile,
    optionFile,
    storeFile,
    updateFile,
    destroyFile,
    showFile,
  }
}
