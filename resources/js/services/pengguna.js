import { ref } from 'vue'
import axios from './axios'
import { useRouter } from 'vue-router'
import useResponse from './response'

export default function useUsers() {
  const pengguna = ref([])
  const notifications = ref([])
  const errors = ref('')
  const router = useRouter()
  const { confirm, accepted, rejected } = useResponse()

  const getPengguna = async (page = 1, keyword) => {
    try {
      const result = (keyword === undefined ? `page=${page}` : `keyword=${keyword}`)
      const response = await axios.get(`/api/pengguna?${result}`)
      pengguna.value = await response.data
    } catch (error) {
      console.log(error.response);
    }
  }

  const getNotifications = async () => {
    try {
      const response = await axios.get(`/api/notifikasi`)
      notifications.value = await response.data
    } catch (error) {
      console.log(error.response);
    }
  }

  const listUser = async () => {
    try {
      const response = await axios.get(`/api/pengguna?type=list`)
      pengguna.value = await response.data
    } catch (error) {
      console.log(error);
    }
  }

  // const getPengguna = async (uuid) => {
  //   try {
  //     const response = await axios.get(`/api/pengguna/${uuid}`)
  //     pengguna.value = await response.data
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  const storeUser = async (payload) => {
    errors.value = ''
    try {
      const response = await axios.post(`/api/pengguna`, payload)
      pengguna.value = await response.data
      accepted('Data Telah disimpan')
      router.back()
    } catch (error) {
      console.log(error.response)
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  }

  const updateUser = async (uuid, payload) => {
    try {
      const response = await axios.put(`/api/pengguna/${uuid}`, payload)
      pengguna.value = await response.data
      accepted('Data Telah disimpan')
      router.back()
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  }

  const destroyUser = async (uuid) => {
    const response = await confirm('Apa anda yakin ingin menghapus data ini?')
    if (response.isConfirmed) {
      try {
        const response = await axios.delete(`/api/pengguna/${uuid}`)
        pengguna.value = await response.data
        accepted('Data Telah dihapus')
        router.back()
      } catch (error) {
        rejected('Data tidak dihapus')
        console.log(error.response);
      }
    }else{
      accepted('Proses telah dibatalkan')
    }
  }

  const level = [
    'administrator',
    'approval',
    'review',
    'operator',
  ]

  return {
    errors,
    pengguna,
    notifications,
    level,
    getPengguna,
    getNotifications,
    listUser,
    storeUser,
    updateUser,
    destroyUser
  }
}
