import axios from '@/services/axios'
import useExecute from "@/services/execute"
import router from '@/router'
import { ref } from 'vue'

export default function useAgenda() {
  const agendas = ref([])
  const errors = ref({})
  const { questionResponse, successResponse, errorResponse } = useExecute()

  async function indexAgenda(page = 1) {
    const response = await axios.get(`/api/agenda?page=${page}`)
    agendas.value = await response.data
  }

  async function optionAgenda() {
    const response = await axios.get(`/api/agenda?type=option`)
    agendas.value = await response.data
  }

  async function updateAgenda(id, payload) {
    try {
      await axios.put(`/api/agenda/${id}`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function storeAgenda(payload) {
    try {
      await axios.post(`/api/agenda`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function showAgenda(id) {
    const response = await axios.get(`/api/agenda/${id}`)
    agendas.value = await response.data
  }

  async function destroyAgenda(id) {
    const response = await questionResponse('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      await axios.delete(`/api/agenda/${id}`)
      await successResponse('Data Telah Dihapus')
      await router.push({path: `/sitemanager/agenda`})
    }
  }

  return {
    agendas,
    indexAgenda,
    optionAgenda,
    storeAgenda,
    updateAgenda,
    destroyAgenda,
    showAgenda,
  }
}
