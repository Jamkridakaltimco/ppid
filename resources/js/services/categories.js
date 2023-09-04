import axios from '@/services/axios'
import useExecute from "@/services/execute"
import router from '@/router'
import { ref } from 'vue'

export default function useCategories() {
  const categories = ref([])
  const errors = ref({})
  const { questionResponse, successResponse, errorResponse } = useExecute()

  async function indexCategories(page = 1) {
    const response = await axios.get(`/api/categories?page=${page}`)
    categories.value = await response.data
  }

  async function optionCategories() {
    const response = await axios.get(`/api/categories?type=option`)
    categories.value = await response.data
  }

  async function updateCategories(id, payload) {
    try {
      await axios.put(`/api/categories/${id}`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function storeCategories(payload) {
    try {
      await axios.post(`/api/categories`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function showCategories(id) {
    const response = await axios.get(`/api/categories/${id}`)
    categories.value = await response.data
  }

  async function destroyCategories(id) {
    const response = await questionResponse('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      await axios.delete(`/api/categories/${id}`)
      await successResponse('Data Telah Dihapus')
      await router.push({path: `/sitemanager/halaman/categories`})
    }
  }

  return {
    categories,
    indexCategories,
    optionCategories,
    storeCategories,
    updateCategories,
    destroyCategories,
    showCategories,
  }
}
