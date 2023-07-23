<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Buat Antrian</h2>
    </div>
  </div>
  <div class="max-w-xl">
    <form @submit.prevent="save()" class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="px-4 py-6 sm:p-8">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div class="sm:col-span-6">
            <label for="room" class="block text-sm font-medium leading-6 text-gray-900">Antrian</label>
            <div>
              <select v-model="form.room_id" name="room" id="room" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                <option v-for="item in rooms" :value="item.id">{{ item.nama }}</option>
              </select>
              <p v-if="errors.room_id"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.buku_id[0] }}</p>
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="nik" class="block text-sm font-medium leading-6 text-gray-900">Nomor NIK</label>
            <div>
              <input v-model="form.nik" type="text" name="nik" id="nik" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              <p v-if="errors.nik"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.nik[0] }}</p>
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="fullname" class="block text-sm font-medium leading-6 text-gray-900">Nama Sesuai Identitas</label>
            <div>
              <input v-model="form.fullname" type="text" name="fullname" id="fullname" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              <p v-if="errors.fullname"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.fullname[0] }}</p>
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="number_police" class="block text-sm font-medium leading-6 text-gray-900">Nomor Polisi</label>
            <div>
              <input v-model="form.number_police" type="text" name="number_police" id="number_police" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              <p v-if="errors.number_police"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.number_police[0] }}</p>
            </div>
          </div>
          <div class="sm:col-span-6">
            <label for="number_part" class="block text-sm font-medium leading-6 text-gray-900">Nomor Rangka</label>
            <div>
              <input v-model="form.number_part" type="text" name="number_part" id="number_part" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              <p v-if="errors.number_part"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.number_part[0] }}</p>
            </div>
          </div>
          <div class="sm:col-span-6">
            <label for="number_machine" class="block text-sm font-medium leading-6 text-gray-900">Nomor Mesin</label>
            <div>
              <input v-model="form.number_machine" type="text" name="number_machine" id="number_machine" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              <p v-if="errors.number_machine"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.number_machine[0] }}</p>
            </div>
          </div>

          <!-- <div class="sm:col-span-6">
            <label for="surat_tanggal" class="block text-sm font-medium leading-6 text-gray-900">Tanggal Surat</label>
            <div>
              <input v-model="form.surat_tanggal" type="date" name="surat_tanggal" id="surat_tanggal" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              <p v-if="errors.surat_tanggal"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.surat_tanggal[0] }}</p>
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="perihal" class="block text-sm font-medium leading-6 text-gray-900">Perihal</label>
            <div>
              <textarea v-model="form.perihal" id="perihal" name="perihal" rows="4" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              <p v-if="errors.perihal"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.perihal[0] }}</p>
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="pengirim" class="block text-sm font-medium leading-6 text-gray-900">Pengirim</label>
            <div class="mt-2">
              <input v-model="form.pengirim" id="pengirim" name="pengirim" type="text" autocomplete="pengirim" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
              <p v-if="errors.pengirim"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.pengirim[0] }}</p>
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="file" class="block text-sm font-medium leading-6 text-gray-900">File</label>
            <div class="mt-2">
              <input id="file" @change="handleFile($event)" name="file" type="file" autocomplete="file" class="block w-full ring-1 p-1 ring-gray-300 rounded-md text-gray-900 shadow-sm text-sm" />
              <p v-if="errors.file"  class="mt-1 text-xs text-red-600" id="email-error">{{ errors.file[0] }}</p>
            </div>
          </div> -->
        </div>
      </div>
      <div class="flex items-center justify-end gap-x-3 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <a href="#/surat-masuk" class="rounded-md text-sm bg-gray-600 hover:bg-gray-700 px-3 py-2 font-semibold text-white">Batal</a>
        <button type="submit" class="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Simpan</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
import useResponse from '@/services/response'
// import useBuku from '@/services/buku'
// import useSuratMasuk from '@/services/surat-masuk'

const router = useRouter()
// const { buku, optionBuku } = useBuku()
// const { saveSuratMasuk } = useSuratMasuk()
const { successResponse } = useResponse()
const errors = ref([])
const rooms = ref([])
const form = reactive({
  room_id: null,
  nik: '',
  fullname: '',
  number_police: '',
  number_part: '',
  number_machine: '',
})

function loadRoom() {
  rooms.value = [
    { 'id': 1, 'nama': 'A - Mutasi Kendaraan'  },
    { 'id': 2, 'nama': 'B - Balik Nama, Rubah Bentuk, Rubah Warna'  },
    { 'id': 3, 'nama': 'C - Ganti Plat (5 Tahunan)'  },
    { 'id': 4, 'nama': 'D - Pajak Tahunan'  },
  ]
}
// optionBuku()
// function handleFile(event) {
//   form.file = event.target.files[0]
// }
async function save() {
  try {
    const result = await axios.post(`/api/guest`, {...form})
    const guest_id = await result.data.id
    await axios.post(`/api/queue`, {
      'room_id': form.room_id,
      'guest_id': guest_id,
      'number_police': form.number_police,
      'number_part': form.number_part,
      'number_machine': form.number_machine,
    })
    await successResponse('Data Telah disimpan')
    form.room_id = null
    form.nik = null
    form.fullname = null
    form.number_police = null
    form.number_machine = null
    form.number_part = null
    // router.push(`/surat-masuk/${result.uuid}/detail`)
  } catch (error) {
    errors.value = error.response.data.errors
    console.log(errors.value)
  }
}

loadRoom()
</script>
