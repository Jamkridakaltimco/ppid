<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-blue-800 sm:truncate sm:tracking-tight">Detail Post</h2>
    </div>
  </div>
  <div class="flex justify-end md:ml-3 md:mt-0">
    <a href="#/sitemanager/halaman/static" class="ml-3 text-white bg-gray-700 hover:bg-white hover:text-gray-700 shadow-md group flex gap-x-3 rounded-md px-3 py-1 text-xs leading-5 font-semibold">
      <ChevronLeftIcon class="h-4 w-4"/>
      Kembali
    </a>
  </div>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg mt-4">
    <div class="border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Kategori</dt>
          <!-- <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ posts.tiket_kategori_id !== null ? post.kategori.nama : '-' }}</dd> -->
        </div>
        <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Judul</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ posts.title }}</dd>
        </div>
        <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">File</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ posts.tags }}</dd>
        </div>
        <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Konten</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ posts.content }}</dd>
        </div>
        <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Status</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ posts.status == 1 ? 'Aktif' : 'Tidak Aktif' }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import {
  PencilIcon,
  ChevronLeftIcon,
  TrashIcon
} from '@heroicons/vue/24/outline'
import { defineProps, onMounted } from 'vue'
import usePost from '@/services/post'
// import useBuku from '@/services/buku'
// import useResponse from '@/services/response'

const props = defineProps(['uuid'])
const { posts, showPost } = usePost()
onMounted(() => {
  showPost(props.uuid)
})
</script>
