import axios from '@/services/axios'
import useExecute from '@/services/execute'
import router from '@/router'
import { ref } from 'vue'

export default function useDokumen() {
  const dokumen = ref([])
  const errors = ref({})
  const { questionResponse, successResponse, errorResponse } = useExecute()

  async function indexDokumen() {
    const response = await axios.get(`/api/dokumen`)
    dokumen.value = await response.data
  }

  async function optionDokumen() {
    const response = await axios.get(`/api/dokumen?type=option`)
    dokumen.value = await response.data
  }

  async function updateDokumen(id, payload) {
    try {
      await axios.put(`/api/dokumen/${id}`, payload)
      await successResponse('Data Telah Disimpan')
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function storeDokumen(payload) {
    try {
      await axios.post(`/api/dokumen`, payload)
      await successResponse('Data Telah Disimpan')
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function showDokumen(id) {
    const response = await axios.get(`/api/dokumen/${id}`)
    dokumen.value = await response.data
  }

  async function destroyDokumen(id) {
    const response = await questionResponse('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      await axios.delete(`/api/dokumen/${id}`)
      await successResponse('Data Telah Dihapus')
      await router.back()
    }
  }

  return {
    dokumen,
    indexDokumen,
    optionDokumen,
    storeDokumen,
    updateDokumen,
    destroyDokumen,
    showDokumen,
  }
}
