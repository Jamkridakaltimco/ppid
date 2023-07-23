<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Panggil Antrian</h2>
    </div>
  </div>
  <div class="flex items-end">
    <!-- <form @submit.prevent="search()" class="w-full">
      <div class="grid grid-cols-1 sm:grid-cols-8 gap-3">
        <div class="col-span-1 sm:col-span-2">
          <div class="flex rounded-md shadow-sm">
            <span class="inline-flex items-center rounded-l-md bg-blue-800 border border-r-0 border-gray-300 px-4 py-2 text-white text-sm">
              Buku
            </span>
            <select name="buku" v-model="form.buku" class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 text-gray-900 leading-6">
              <option value="0">Semua</option>
              <option v-for="item in buku" :key="item.id" :value="item.id">{{ item.kode }}</option>
            </select>
          </div>
        </div>
        <div class="col-span-1 sm:col-span-6">
          <div class="flex rounded-md shadow-sm">
            <input type="text" name="keyword" v-model="form.keyword" placeholder="Pencarian" class="block w-full min-w-0 flex-1 rounded-md border-0 text-gray-900 leading-6">
            <button type="submit" class="ml-3 text-white bg-blue-800 hover:bg-white hover:text-blue-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
              <MagnifyingGlassIcon class="h-6 w-6"/>
              Cari
            </button>
            <button type="button" @click="reset()" class="ml-3 text-white bg-red-800 hover:bg-white hover:text-red-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
              <ArrowPathIcon class="h-6 w-6"/>
              Reset
            </button>
          </div>
        </div>
      </div>
    </form>
    <div>
      <a href="#/surat-masuk/create" class="ml-3 text-white bg-blue-800 hover:bg-white hover:text-blue-700 shadow-md group flex gap-x-3 rounded-md px-4 py-2 text-sm leading-6 font-semibold">
        <PlusIcon class="h-6 w-6"/>
        Tambah
      </a>
    </div> -->
  </div>
  <div class="mt-2 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-blue-800">
              <tr>
                <th scope="col" class="py-1.5 pl-2 w-2 pr-1.5 text-center text-sm font-semibold text-white sm:pl-6">No. Antrian</th>
                <th scope="col" class="px-3 py-1.5 text-left text-sm font-semibold text-white">Loket</th>
                <th scope="col" class="px-3 py-1.5 text-left text-sm font-semibold text-white">Nama</th>
                <th scope="col" class="px-3 py-1.5 text-left text-sm font-semibold text-white">Nomor Polisi</th>
                <!-- <th scope="col" class="px-3 py-1.5 w-1 text-center text-sm font-semibold text-white">Aksi</th> -->
                <!-- <th scope="col" class="px-3 py-1.5 w-1 text-center text-sm font-semibold text-white">Selesai</th> -->
                <th scope="col" class="relative py-1.5 w-1 pl-3 pr-4 sm:pr-6 text-sm font-semibold text-white">
                  <span class="sr-only">Edit</span> Aksi
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="item, index in queues" :key="item.id" class="hover:bg-gray-300">
                <td class="whitespace-normal py-3 pl-4 pr-3 text-center text-xs font-medium sm:pl-6">{{ index + 1 }}</td>
                <td class="whitespace-nowrap px-3 py-3 text-xs">
                  <span v-if="item.room_id === 1">A - Mutasi Kendaraan</span>
                  <span v-if="item.room_id === 2">B - Balik Nama, Rubah Bentuk, Rubah Warna</span>
                  <span v-if="item.room_id === 3">C - Ganti Plat (5 Tahunan)</span>
                  <span v-if="item.room_id === 4">D - Pajak Tahunan</span>
                </td>
                <td class="whitespace-nowrap px-3 py-3 text-xs">{{ item.guest !== null ? item.guest.fullname : '' }}</td>
                <td class="whitespace-normal px-3 py-3 text-xs">{{ item.number_police }}</td>
                <td class="whitespace-nowrap px-3 py-3 text-xs flex gap-2">
                  <button @click="panggil(item.uuid)" class="bg-gray-600 text-white rounded-md px-2 py-1">Panggil</button>
                  <!-- <span class="bg-yellow-600 text-white rounded-md px-2 py-1">Proses</span> -->
                  <span @click="selesai(item.uuid)" class="bg-blue-600 text-white rounded-md px-2 py-1">Selesai</span>
                </td>
                <!-- <td class="whitespace-normal px-3 py-3 text-xs text-center">
                  <span v-if="item.status === 0" class="bg-gray-600 text-white rounded-md px-2 py-1">Antri</span>
                  <span v-if="item.status === 1" class="bg-blue-600 text-white rounded-md px-2 py-1">Selesai</span>
                  <span v-if="item.status === 2" class="bg-yellow-600 text-white rounded-md px-2 py-1">Proses</span>
                </td> -->
                <!-- <td class="relative whitespace-normal py-3 pl-3 pr-4 text-left text-xs font-medium sm:pr-6">
                  <a :href="`#/surat-masuk/${item.uuid}/detail`" class="text-blue-800 hover:text-blue-600 flex">
                    <ClipboardIcon class="h-4 w-4 mr-1"/>
                    Detail
                    <span class="sr-only">, {{ item.name }}</span>
                  </a>
                </td> -->
              </tr>
            </tbody>
          </table>
          <!-- <Pagination
            :totalPages="suratMasuk.last_page"
            :currentPage="suratMasuk.current_page"
            :searchPage="form.keyword"
            @pagechanged="getSuratMasuk"
          >
          </Pagination> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import useResponse from '@/services/response'

const queues = ref([])
const { successResponse } = useResponse()

async function listQueue() {
  const result = await axios.get(`/api/queue`)
  queues.value = await result.data
}
listQueue()

async function panggil(uuid){
  await axios.put(`/api/queue/${uuid}`, {'status': 1})
  successResponse('Berhasil')
}

async function selesai(uuid){
  await axios.put(`/api/queue/${uuid}`, {'status': 2})
  successResponse('Selesai')
}
// import axios from
// import useResponse from '@/services/response'
// import { PlusIcon, MagnifyingGlassIcon, ArrowPathIcon, ClipboardIcon } from '@heroicons/vue/24/outline'
// import useBuku from '@/services/buku'
// import useSuratMasuk from '@/services/surat-masuk'

// const { buku, optionBuku } = useBuku()
// optionBuku()

// const { suratMasuk, getSuratMasuk } = useSuratMasuk()
// const form = reactive({
//   buku: 0,
//   keyword: ''
// })

// getSuratMasuk()

// async function search() {
//   await getSuratMasuk(form.keyword, form.buku)
// }

// async function reset() {
//   await getSuratMasuk()
//   form.keyword = ''
// }
</script>
