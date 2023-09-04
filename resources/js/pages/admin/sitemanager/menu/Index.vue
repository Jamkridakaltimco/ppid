<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base text-xl font-bold leading-6 text-blue-800">Menu</h1>
      </div>
      <a href="#/sitemanager/menu/create" class="ml-3 text-white bg-blue-800 hover:bg-white hover:text-blue-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <PlusIcon class="h-5 w-5"/>
        Tambah Menu
      </a>
    </div>
    <div class="-mx-4 mt-6 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg bg-white">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-blue-800">
          <tr>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">Nama Menu</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">Posisi</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100 lg:table-cell">Status</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="item, index in menus.data" :key="item.id" class="hover:bg-blue-100">
            <td class="whitespace-normal py-3 pl-4 pr-3 text-xs font-medium sm:pl-6">{{ item.name }}</td>
            <td class="whitespace-nowrap px-3 py-3 capitalize text-xs">{{ item.position }}</td>
            <td class="whitespace-nowrap px-3 py-3 capitalize text-xs">{{ item.status == 1 ? 'Aktif' : 'Tidak Aktif' }}</td>
            <td class="whitespace-nowrap px-3 py-3 capitalize text-xs flex">
              <a :href="`#/sitemanager/menu/${item.uuid}/submenu`">
                <Bars4Icon class="h-5 w-5 text-gray-800" aria-hidden="true" />
              </a>
              <a :href="`#/sitemanager/menu/${item.uuid}/edit`">
                <PencilSquareIcon class="h-5 w-5 text-blue-800" aria-hidden="true" />
              </a>
              <button type="button" @click="destroyMenu(item.uuid)" >
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
  import { PlusIcon, Bars4Icon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid';
  import { ref, defineProps } from 'vue';
  import useMenu from '@/services/menu';

  const props = defineProps(['uuid'])

  const { menus, indexMenu, destroyMenu } = useMenu()
  const keyword = ref("")

  async function search() {
    indexMenu(keyword.value)
  }
  async function reset() {
    indexMenu()
    keyword.value = ''
  }

  indexMenu('')
</script>
