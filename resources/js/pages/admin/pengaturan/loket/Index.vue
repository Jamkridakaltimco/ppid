<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Buku</h2>
    </div>
  </div>
  <div class="flex items-end">
    <div class="w-full">
      <div class="grid grid-cols-1 sm:grid-cols-8 gap-3">
        <div class="col-span-1 sm:col-span-full">
          <form @submit.prevent="search()" class="flex rounded-md shadow-sm">
            <!-- <span class="inline-flex items-center rounded-l-md bg-teal-800 border border-r-0 border-gray-300 px-4 py-2 text-white text-sm">
              Pencarian
            </span> -->
            <input type="text" v-model="keyword" placeholder="Pencarian" class="block w-full min-w-0 flex-1 rounded-md border-0 text-gray-900 leading-6">
            <button type="submit" class="ml-3 text-white bg-teal-800 hover:bg-white hover:text-teal-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
              <MagnifyingGlassIcon class="h-5 w-5"/>
              Cari
            </button>
            <button type="button" @click="reset()" class="ml-3 text-white bg-red-800 hover:bg-white hover:text-red-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
              <ArrowPathIcon class="h-5 w-5"/>
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="flex">
      <a href="#/pengaturan" class="ml-3 text-white bg-gray-700 hover:bg-white hover:text-gray-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <ChevronLeftIcon class="h-5 w-5"/>
        Kembali
      </a>
      <a href="#/pengaturan/buku/create" class="ml-3 text-white bg-teal-800 hover:bg-white hover:text-teal-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
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
            <thead class="bg-teal-800">
              <tr>
                <th scope="col" class="w-1 py-3 pl-2 pr-1.5 text-left text-sm font-semibold text-white sm:pl-6">No</th>
                <th scope="col" class="px-3 py-3 text-left text-sm font-semibold text-white">Kode</th>
                <th scope="col" class="px-3 py-3 text-left text-sm font-semibold text-white">Nama</th>
                <th scope="col" class="relative py-3 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="item, index in buku.data" :key="item.id" class="hover:bg-teal-300">
                <td class="whitespace-normal py-3 pl-4 pr-3 text-xs font-medium sm:pl-6">{{ index + 1 }}</td>
                <td class="whitespace-nowrap px-3 py-3 text-xs">{{ item.kode }}</td>
                <td class="whitespace-nowrap px-3 py-3 text-xs">{{ item.nama }}</td>
                <td class="relative whitespace-normal py-3 pl-3 pr-4 flex justify-end text-xs font-medium sm:pr-6">
                  <a :href="`#/pengaturan/buku/${item.uuid}`" class="text-teal-800 hover:text-teal-600 flex">
                    <ClipboardIcon class="h-4 w-4 mr-1"/>
                    Detail
                    <span class="sr-only">, {{ item.name }}</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination
            :totalPages="buku.last_page"
            :currentPage="buku.current_page"
            :searchPage="keyword"
            @pagechanged="getBuku"
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
import useBuku from '@/services/buku'

const { buku, getBuku } = useBuku()
const keyword = ref("")

async function search() {
  getBuku(keyword.value)
}
async function reset() {
  getBuku()
  keyword.value = ''
}

getBuku()
</script>