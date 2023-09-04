<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base text-xl font-bold leading-6 text-blue-800">Foto</h1>
      </div>
      <a href="#/sitemanager/galeri" class="ml-3 text-white bg-gray-700 hover:bg-white hover:text-gray-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <ChevronLeftIcon class="h-5 w-5"/>
        Kembali
      </a>
      <a href="#/sitemanager/galeri/foto/create" class="ml-3 text-white bg-blue-800 hover:bg-white hover:text-blue-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <PlusIcon class="h-5 w-5"/>
        Tambah Foto
      </a>
    </div>
    <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg bg-white">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-blue-800">
          <tr>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">#</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">Nama</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, index in galleries.data" :key="item.id" class="hover:bg-blue-100">
            <td class="whitespace-normal py-3 pl-4 text-xs font-medium sm:pl-6">{{ index++ }}</td>
            <td class="whitespace-normal px-3 py-3 capitalize text-xs">{{ item.caption }}</td>
            <td class="whitespace-normal px-3 py-3 capitalize text-xs flex">
              <a :href="`#/sitemanager/galeri/foto/${item.uuid}/detail`">
                <InformationCircleIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
              </a>
              <a :href="`#/sitemanager/galeri/foto/${item.uuid}/edit`">
                <PencilSquareIcon class="h-5 w-5 text-blue-800" aria-hidden="true" />
              </a>
              <button type="button" @click="destroyGaleri(item.uuid)" >
                <TrashIcon class="h-5 w-5 text-red-500"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  import { ChevronLeftIcon, PlusIcon, InformationCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid'
  import { ref, defineProps } from 'vue'
  import useGaleri from '@/services/galeri'

  const props = defineProps(['uuid'])
  const { galleries, indexGaleri, destroyGaleri } = useGaleri()
  const keyword = ref("")

  async function search() {
    indexGaleri(keyword.value)
  }

  async function reset() {
    indexGaleri()
    keyword.value = ''
  }

  indexGaleri('Foto')
</script>
