import axios from '@/services/axios'
import useExecute from "@/services/execute"
import router from '@/router'
import { ref } from 'vue'

export default function useGaleri() {
  const galleries = ref([])
  const errors = ref({})
  const { questionResponse, successResponse, errorResponse } = useExecute()

  async function indexGaleri(type, page = 1) {
    const response = await axios.get(`/api/galeri?page=${page}&type=${type}`)
    galleries.value = await response.data
  }

  async function optionGaleri() {
    const response = await axios.get(`/api/galeri?type=option`)
    galleries.value = await response.data
  }

  async function updateGaleri(id, payload) {
    try {
      await axios.put(`/api/galeri/${id}`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function storeGaleri(payload) {
    try {
      await axios.post(`/api/galeri`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function showGaleri(id) {
    const response = await axios.get(`/api/galeri/${id}`)
    galleries.value = await response.data
  }

  async function destroyGaleri(id) {
    const response = await questionResponse('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      await axios.delete(`/api/galeri/${id}`)
      await successResponse('Data Telah Dihapus')
      await router.push({path: `/sitemanager/galeri`})
    }
  }

  return {
    galleries,
    indexGaleri,
    optionGaleri,
    storeGaleri,
    updateGaleri,
    destroyGaleri,
    showGaleri,
  }
}
