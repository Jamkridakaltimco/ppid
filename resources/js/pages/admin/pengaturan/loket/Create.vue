<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Tambah Buku</h2>
    </div>
  </div>
  <div class="max-w-xl">
    <form @submit.prevent="save()" class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="px-4 py-6 sm:p-8">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

          <div class="sm:col-span-6">
            <label for="kode" class="block text-sm font-medium leading-6 text-gray-900">Kode</label>
            <div class="mt-2">
              <input id="kode" v-model="form.kode" name="kode" type="text" autocomplete="kode" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="nama" class="block text-sm font-medium leading-6 text-gray-900">Nama</label>
            <div class="mt-2">
              <input id="nama" v-model="form.nama" name="nama" type="text" autocomplete="nama" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

        </div>
      </div>
      <div class="flex items-center justify-end gap-x-3 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <a href="#/pengaturan/buku" class="flex items-center gap-x-3 rounded-md text-sm bg-gray-600 hover:bg-gray-700 px-3 py-2 font-semibold text-white">
          <XMarkIcon class="h-5 w-5"/>
          Batal
        </a>
        <button type="submit" class="flex items-center gap-x-3 rounded-md bg-teal-800 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
          <CheckIcon class="h-5 w-5"/>
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { XMarkIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import useBuku from '@/services/buku'
import useResponse from '@/services/response'

const { saveBuku } = useBuku()
const { successResponse, errorResponse } = useResponse()
const router = useRouter()
const form = reactive({
  kode: '',
  nama: ''
})

async function save() {
  try {
    const result = await saveBuku({...form})
    await successResponse('Data Telah disimpan')
    await router.push(`/pengaturan/buku/${result.uuid}`)
  } catch (error) {
    errorResponse('Data tidak tersimpan')
  }
}

</script>