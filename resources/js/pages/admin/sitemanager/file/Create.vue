<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-blue-800 sm:truncate sm:tracking-tight">Tambah File</h2>
    </div>
  </div>
  <div class="max-w-xl">
    <form @submit.prevent="save()" class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="px-4 py-6 sm:p-8">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div class="sm:col-span-6">
            <label for="nik" class="block text-sm font-medium leading-6 text-gray-900">Nama File</label>
            <div>
              <input v-model="form.name" type="text" name="nama_menu" id="nama_menu" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="file" class="block text-sm font-medium leading-6 text-gray-900">File</label>
            <input type="file"  @change="getFile($event)" name="file" id="file" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-900 focus:outline-none focus:ring-cyan-900 text-xs" />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end gap-x-3 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <a href="#/sitemanager/file" class="rounded-md text-sm bg-gray-600 hover:bg-gray-700 px-3 py-2 font-semibold text-white">Batal</a>
        <button type="submit" class="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Simpan</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import useDokumen from '@/services/dokumen'
import useFile from '@/services/file'

const { storeDokumen } = useDokumen()
const { storeFile } = useFile()
const form = reactive({
  path: null,
  name: '',
})


const getFile = (event) =>{
  const target = event.target
  form.path = target.files[0].name
  form.file = target.files[0]
}

async function save() {
  const formData = new FormData()
  formData.append('name', form.name)
  formData.append('type', 'File')
  formData.append('path', form.file)
  formData.append('deskripsi', '-')
  formData.append('is_public', 1)
  await storeDokumen(formData)
  await storeFile({...form})
  console.log({...form})
}

</script>

