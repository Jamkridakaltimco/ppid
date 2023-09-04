<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base text-xl font-bold leading-6 text-blue-800">Kategori</h1>
      </div>
      <a href="#/sitemanager/halaman" class="ml-3 text-white bg-gray-700 hover:bg-white hover:text-gray-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <ChevronLeftIcon class="h-5 w-5"/>
        Kembali
      </a>
      <a href="#/sitemanager/halaman/categories/create" class="ml-3 text-white bg-blue-800 hover:bg-white hover:text-blue-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <PlusIcon class="h-5 w-5"/>
        Tambah Kategori
      </a>
    </div>
    <div class="-mx-4 mt-6 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg bg-white">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-blue-800">
          <tr>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">#</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">Nama</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">Status</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="item, index in categories.data" :key="item.id" class="hover:bg-blue-100">
            <td class="whitespace-nowrap px-3 py-3 capitalize text-xs">{{ index + 1 }}</td>
            <td class="whitespace-nowrap px-3 py-3 capitalize text-xs">{{ item.name }}</td>
            <td class="whitespace-nowrap px-3 py-3 capitalize text-xs">{{ item.status == 1 ? 'Aktif' : 'Tidak Aktif' }}</td>
            <td class="whitespace-nowrap px-3 py-3 capitalize text-xs flex">
              <a :href="`#/sitemanager/halaman/categories/${item.uuid}/detail`">
                <InformationCircleIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
              <a :href="`#/sitemanager/halaman/categories/${item.uuid}/edit`">
                <PencilSquareIcon class="h-5 w-5 text-blue-800" aria-hidden="true" />
              </a>
              <button type="button" @click="destroyCategories(item.uuid)" >
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
  import { ref, defineProps } from 'vue';
  import useCategories from '@/services/categories';

  const props = defineProps(['uuid'])

  const { categories, indexCategories, destroyCategories } = useCategories()
  const keyword = ref("")

  async function search() {
    indexCategories(keyword.value)
  }

  async function reset() {
    indexCategories()
    keyword.value = ''
  }

  indexCategories()
</script>
