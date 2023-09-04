<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-blue-800 sm:truncate sm:tracking-tight">Tambah Link Vidio</h2>
    </div>
  </div>
  <div class="max-w-xl">
    <form @submit.prevent="save()" class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="px-4 py-6 sm:p-8">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div class="sm:col-span-6">
            <label for="nik" class="block text-sm font-medium leading-6 text-gray-900">Caption</label>
            <div>
              <input v-model="form.caption" type="text" name="caption" id="caption" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-6">
            <label for="nik" class="block text-sm font-medium leading-6 text-gray-900">Link</label>
            <div>
              <input v-model="form.link" type="text" name="link" id="link" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
            <p class="mt-2 text-xs leading-6 text-gray-600">Masukkan Link Video Youtube, Contoh:"<i>https://wwww.youtube.com/watch?v=wiqSUtzgfKs</i>"</p>
          </div>
          <div class="sm:col-span-6">
            <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Deskripsi</label>
            <div>
              <textarea v-model="form.description" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="number_machine" class="block text-sm font-medium leading-6 text-gray-900">Status</label>
            <div>
              <SwitchGroup as="div" class="flex items-center">
                <Switch v-model="form.status" :class="[form.status ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2']">
                  <span class="sr-only">Use setting</span>
                  <span aria-hidden="true" :class="[form.status ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                </Switch>
                <SwitchLabel as="span" class="ml-3 text-sm">
                  <span class="font-medium text-gray-900">Aktif</span>
                </SwitchLabel>
              </SwitchGroup>
            </div>
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
import { reactive, ref, watch, defineProps, onMounted } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import useGaleri from '@/services/galeri'

const props = defineProps(['uuid'])
const { galleries, updateGaleri, showGaleri } = useGaleri()
const form = reactive({
  link: '',
  caption: '',
  description: '',
  status: false
})

async function save() {
  updateGaleri(props.uuid, {...form})
  console.log({...form})
}

watch(galleries, item => {
  form.link         = item.link
  form.caption      = item.caption
  form.description  = item.description
  form.status       = item.status
})

onMounted(() => {
  showGaleri(props.uuid)
})

</script>


