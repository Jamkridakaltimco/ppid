<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-blue-800 sm:truncate sm:tracking-tight">Edit Agenda</h2>
    </div>
  </div>
  <div class="max-w-xl">
    <form @submit.prevent="save()" class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="px-4 py-6 sm:p-8">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Tanggal</label>
            <div>
              <input v-model="form.date" type="date" name="date" id="date" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Waktu</label>
            <div>
              <input v-model="form.time" type="time" name="time" id="time" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="caption" class="block text-sm font-medium leading-6 text-gray-900">Caption</label>
            <div>
              <input v-model="form.caption" type="text" name="caption" id="caption" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Deskripsi</label>
            <div>
              <textarea v-model="form.description" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Lokasi</label>
            <div>
              <input v-model="form.location" type="text" name="location" id="location" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end gap-x-3 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <a href="#/sitemanager/agenda" class="rounded-md text-sm bg-gray-600 hover:bg-gray-700 px-3 py-2 font-semibold text-white">Batal</a>
        <button type="submit" class="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Simpan</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref, watch, defineProps, onMounted } from 'vue'
import useAgenda from '@/services/agenda'

const props = defineProps(['uuid'])
const { agendas, showAgenda, updateAgenda } = useAgenda()
const form = reactive({
  date: '',
  time: '',
  caption: '',
  description: '',
  location: '',
})

async function save() {
  updateAgenda(props.uuid, {...form})
  console.log({...form})
}

watch(agendas, item => {
  form.date         = item.date
  form.time         = item.time
  form.caption      = item.caption
  form.description  = item.description
  form.location     = item.location
})

onMounted(() => {
  showAgenda(props.uuid)
})
</script>
