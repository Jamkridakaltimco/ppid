<template>
  <div class="flex h-screen">
    <div class="hidden lg:block relative w-0 flex-1">
      <div class="mx-auto">
        <div class="h-screen flex flex-wrap content-center justify-center">
          <div class="opacity-40">
            <img class="absolute inset-0 z-0 h-full object-contain mx-auto " src="@public/siapp.svg">
          </div>
          <div class="absolute inset-x-0 bottom-10 text-center text-sm text-gray-800">
            <span class="font-bold">SIAPP © 2023 </span>
            <a href="#"  class="text-blue-800 hover:text-blue-400"> Sistem Informasi Antrian Pelayanan Publik</a>.
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
            <img src="/logo.svg" class="h-12 rounded-lg">
          </div> -->
          <div class="mt-4">
            <div class="bg-white px-8 pt-4 pb-10 shadow-lg rounded-lg">
              <div class="mx-auto">
                <h2 class="text-xl font-bold text-center tracking-tight text-gray-900">SIAPP</h2>
                <h2 class="text-sm font-bold text-center tracking-tight text-gray-600">Sistem Informasi <br> Antrian Pelayanan Publik</h2>
              </div>
              <div class="relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-start">
                  <span class="bg-white py-6 text-gray-500"></span>
                </div>
              </div>
              <form @submit.prevent="login" class="space-y-4" method="POST">
                <div>
                  <label for="otp" class="block text-xs font-medium text-gray-500">Masukan Nomor OTP di terima pada Nomor Whatsapp yang anda daftarkan</label>
                  <div class="mt-2">
                    <input id="otp" v-model="form.otp" name="otp" type="otp" placeholder="Masukkan Nomor OTP" required class="block w-full rounded-md border-0 py-1.5 px-3 leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm" />
                  </div>
                </div>
<!--
                <div>
                  <div class="flex justify-between">
                    <label for="password" class="block text-sm font-medium text-gray-500">Kata Sandi</label>
                  </div>
                  <div class="mt-2">
                    <input id="password" v-model="form.password" name="password" type="password" placeholder="Masukkan Kata Sandi" required class="block w-full rounded-md border-0 py-1.5 px-3 leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm" />
                  </div>
                </div> -->
                <div>
                  <button type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Masuk</button>
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
// import AppIcon from '@/components/Icons/AppIcon.vue'

import { ref, reactive } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import useAuth from '@/services/auth'

const { doLogin } = useAuth()
const isShowing = ref(true)
const form = reactive({
  username: '',
  password: ''
})

async function login() {
  doLogin({...form})
}
</script>
