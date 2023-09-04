import axios from '@/services/axios'
import useExecute from "@/services/execute"
import router from '@/router'
import { ref } from 'vue'

export default function usePost() {
  const posts = ref([])
  const errors = ref({})
  const { questionResponse, successResponse, errorResponse } = useExecute()

  async function indexPost(type, page = 1) {
    const response = await axios.get(`/api/post?page=${page}&type=${type}`)
    posts.value = await response.data
  }

  async function optionPost() {
    const response = await axios.get(`/api/post?type=option`)
    posts.value = await response.data
  }

  async function updatePost(id, payload) {
    try {
      await axios.put(`/api/post/${id}`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function storePost(payload) {
    try {
      await axios.post(`/api/post`, payload)
      await successResponse('Data Telah Disimpan')
      await router.back()
    } catch (error) {
      errors.value = error
      await errorResponse(errors.response.data.message)
    }
  }

  async function showPost(id) {
    const response = await axios.get(`/api/post/${id}`)
    posts.value = await response.data
  }

  async function destroyPost(id) {
    const response = await questionResponse('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      await axios.delete(`/api/post/${id}`)
      await successResponse('Data Telah Dihapus')
      await router.push({path: `/sitemanager/halaman/post`})
    }
  }

  return {
    posts,
    indexPost,
    optionPost,
    storePost,
    updatePost,
    destroyPost,
    showPost,
  }
}
