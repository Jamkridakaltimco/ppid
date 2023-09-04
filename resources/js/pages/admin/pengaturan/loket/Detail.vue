<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Detail Buku</h2>
    </div>
  </div>
  <div class="flex justify-end md:ml-4 md:mt-0">
    <a href="#/pengaturan/buku" class="ml-3 text-white bg-gray-700 hover:bg-white hover:text-gray-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
      <ChevronLeftIcon class="h-6 w-6"/>
      Kembali
    </a>
    <button @click="destroy()" class="ml-3 text-white bg-red-700 hover:bg-white hover:text-red-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
      <TrashIcon class="h-6 w-6"/>
      Hapus
    </button>
    <a :href="`#/pengaturan/buku/${props.buku}/edit`" class="ml-3 text-white bg-teal-700 hover:bg-white hover:text-teal-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
      <PencilIcon class="h-6 w-6"/>
      Edit
    </a>
  </div>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg mt-4">
    <div class="border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Kode</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ buku.kode }}</dd>
        </div>
        <div class="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900">Nama</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ buku.nama }}</dd>
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
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import useBuku from '@/services/buku'
import useResponse from '@/services/response'

const props = defineProps(['buku'])
const router = useRouter()
const { buku, showBuku, destroyBuku } = useBuku()
const { successResponse, questionResponse } = useResponse()

async function destroy(){
  const result = await questionResponse('Yakin Hapus Data ini?')
  if (result.isConfirmed) {
    await destroyBuku(props.buku)
    await successResponse('Data Telah dihapus')
    await router.push('/pengaturan/buku')
  }
}
showBuku(props.buku)
</script>