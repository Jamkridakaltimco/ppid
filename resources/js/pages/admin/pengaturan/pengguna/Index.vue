<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Pengguna</h2>
    </div>
  </div>
  <div class="flex items-end">
    <div class="w-full">
      <div class="grid grid-cols-1 sm:grid-cols-8 gap-3">
        <div class="col-span-1 sm:col-span-full">
        </div>
      </div>
    </div>
    <div class="flex">
      <a href="#/sitemanager/pengaturan" class="ml-3 text-white bg-gray-700 hover:bg-white hover:text-gray-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <ChevronLeftIcon class="h-5 w-5"/>
        Kembali
      </a>
      <a href="#/sitemanager/pengaturan/pengguna/create" class="ml-3 text-white bg-blue-800 hover:bg-white hover:text-blue-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <PlusIcon class="h-5 w-5"/>
        Tambah
      </a>
    </div>
  </div>
  <div class="mt-6 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-blue-800">
              <tr>
                <th scope="col" class="w-1 py-3 pl-2 pr-1.5 text-left text-sm font-semibold text-white sm:pl-6">No</th>
                <th scope="col" class="px-3 py-3 text-left text-sm font-semibold text-white">Nama</th>
                <th scope="col" class="px-3 py-3 text-left text-sm font-semibold text-white">Level</th>
                <th scope="col" class="px-3 py-3 text-left text-sm font-semibold text-white">Loket</th>
                <th scope="col" class="relative py-3 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="item, index in pengguna.data" :key="item.id" class="hover:bg-blue-300">
                <td class="whitespace-normal py-3 pl-4 pr-3 text-xs font-medium sm:pl-6">{{ index + 1 }}</td>
                <td class="whitespace-nowrap px-3 py-3 capitalize text-xs">{{ item.name }}</td>
                <td class="whitespace-nowrap px-3 py-3 capitalize text-xs">{{ item.level }}</td>
                <td class="whitespace-nowrap px-3 py-3 text-xs">
                  <span v-if="item.room_id === null">Semua</span>
                  <span v-if="item.room_id === '1'">A - Mutasi Kendaraan</span>
                  <span v-if="item.room_id === '2'">B - Balik Nama, Rubah Bentuk, Rubah Warna</span>
                  <span v-if="item.room_id === '3'">C - Ganti Plat (5 Tahunan)</span>
                  <span v-if="item.room_id === '4'">D - Pajak Tahunan</span>
                </td>
                <td class="relative whitespace-normal py-3 pl-3 pr-4 flex justify-end text-xs font-medium sm:pr-6">
                  <a :href="`#/pengaturan/pengguna/${item.uuid}`" class="text-blue-800 hover:text-blue-600 flex">
                    <ClipboardIcon class="h-4 w-4 mr-1"/>
                    Detail
                    <span class="sr-only">, {{ item.name }}</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination
            :totalPages="pengguna.last_page"
            :currentPage="pengguna.current_page"
            :searchPage="keyword"
            @pagechanged="getPengguna"
          >
          </Pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PlusIcon, MagnifyingGlassIcon, ClipboardIcon, ChevronLeftIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import usePengguna from '@/services/pengguna'

const { pengguna, getPengguna } = usePengguna()
const keyword = ref("")

async function search() {
  getPengguna(keyword.value)
}
async function reset() {
  getPengguna()
  keyword.value = ''
}

getPengguna()
</script>
