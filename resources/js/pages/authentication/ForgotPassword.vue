<template>
  <div class="flex h-screen">
    <div class="hidden lg:block relative w-0 flex-1">
      <div class="mx-auto">
        <div class="h-screen flex flex-wrap content-center justify-center">
          <div class="opacity-40">
            <img class="absolute inset-0 z-0 h-full object-contain mx-auto " src="/siapp.svg">
          </div>
          <div class="absolute inset-x-0 bottom-10 text-center text-sm text-gray-800">
            <span class="font-bold">SIAPP © 2023</span>
            <a href="https://jamkridakaltim.co.id"  class="text-blue-800 hover:text-blue-400"> Sistem Informasi Antrian Pelayanan Publik</a>.
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <TransitionRoot
        appear
        :show="isShowing"
        as="template"
        enter="transform transition duration-[400ms]"
        enter-from="opacity-0 scale-50"
        enter-to="opacity-100 rotate-0 scale-100"
        leave="transform duration-300 transition ease-in-out"
        leave-from="opacity-100 rotate-0 scale-100 "
        leave-to="opacity-0 scale-95 "
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <!-- <div class="flex justify-center items-center z-10 py-2">
            <img src="/logo.png" class="h-12 rounded-lg">
          </div> -->
          <div class="mt-4">
            <div class="bg-white px-8 pt-4 pb-10 shadow-lg rounded-lg">
              <div>
                <h2 class="text-xl text-center font-bold tracking-tight text-gray-900">Lupa Kata Sandi</h2>
                <h2 class="text-sm text-center font-bold tracking-tight text-gray-600">Masukkan Email yang terdaftar pada aplikasi</h2>
              </div>
              <div class="relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-start">
                  <span class="bg-white py-6 text-gray-500">
                    <!-- <HelpdeskIcon class="h-12 w-12 text-gray-500" aria-hidden="true" /> -->
                  </span>
                </div>
              </div>
              <form @submit.prevent="resetPassword" class="space-y-6" method="POST">
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-500">No. Whatsapp</label>
                  <div class="mt-2">
                    <input id="phone" v-model="form.phone" name="phone" type="text" required class="block w-full rounded-md border-0 py-1.5 px-3 leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm" />
                  </div>
                </div>

                <div class="flex">
                  <a href="#/login" class="mr-2 flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Batal</a>
                  <button type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Kirim</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </TransitionRoot>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import axios from '@/services/axios';
import useResponse from '@/services/response'
import router from '@/router';

const { successResponse, errorResponse, infoResponse } = useResponse()
const isShowing = ref(true)
const form = reactive({
  email: '',
})

async function resetPassword() {
  try{
    await axios.post(`/api/password-reset/email`, {...form})
    await successResponse('Email Reset Password Telah dikirim')
    await router.push('/login')
    await infoResponse('Gunakan Password yang telah dikirim ke email anda')
  }catch(error){
    errorResponse(error.response.data)
  }
}
</script>
