import axios from '@/services/axios'
import useExecute from "@/services/execute"
import router from '@/router'
import { ref } from 'vue'

export default function useMenu() {
  const menus = ref([])
  const errors = ref({})
  const { questionResponse, successResponse, errorResponse } = useExecute()

  async function indexMenu(parent_id, page = 1) {
    const response = await axios.get(`/api/menu?page=${page}&parent_id=${parent_id}`)
    menus.value = await response.data
  }

  async function optionMenu() {
    const response = await axios.get(`/api/menu?type=option`)
    menus.value = await response.data
  }

  async function updateMenu(id, payload) {
    try {
      await axios.put(`/api/menu/${id}`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function storeMenu(payload) {
    try {
      await axios.post(`/api/menu`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function showMenu(id) {
    const response = await axios.get(`/api/menu/${id}`)
    menus.value = await response.data
  }

  async function destroyMenu(id) {
    const response = await questionResponse('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      await axios.delete(`/api/menu/${id}`)
      await successResponse('Data Telah Dihapus')
      await router.push({path: `/sitemanager/menu`})
    }
  }

  return {
    menus,
    indexMenu,
    optionMenu,
    storeMenu,
    updateMenu,
    destroyMenu,
    showMenu,
  }
}
