<template>
  <div class="flex items-center gap-x-4 lg:gap-x-6">
    <!-- <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
      <span class="sr-only">View notifications</span>
      <BellIcon class="h-6 w-6" aria-hidden="true" />
    </button> -->

    <!-- Separator -->
    <!-- <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" /> -->

    <!-- Profile dropdown -->
    <div class="relative">
      <button @click="open = true" class="-m-1.5 flex items-center p-1.5">
        <span class="sr-only">Open user menu</span>
        <span class="inline-block h-8 w-8 overflow-hidden rounded-md bg-gray-100">
          <div v-if="auth.picture">
            <img class="h-full w-full rounded-md" :src="url+'/'+auth.picture" alt=""/>
          </div>
          <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24" v-else>
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        <span class="lg:flex lg:items-center">
          <span class="ml-4 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600" aria-hidden="true">{{ auth.name }}</span>
        </span>
      </button>
    </div>
    <button type="button" @click="doLogout" class="-m-2.5 p-2.5 text-gray-900 hover:text-gray-600">
      <span class="sr-only">Sign Out</span>
      <ArrowRightOnRectangleIcon class="h-6 w-6" aria-hidden="true" />
    </button>
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-50" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex items-end justify-center p-4 sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full max-w-sm sm:p-6">
              <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Profile</DialogTitle>
              <form @submit.prevent="updateProfile" method="POST">
                <div class="mt-3">
                  <div class="grid grid-cols-6 gap-3">
                    <div class="col-span-6 sm:col-span-6">
                      <div class="mt-1">
                        <div class="flex items-center justify-center">
                          <div v-if="form.preview">
                            <img class="h-36 w-36 rounded-md" :src="form.preview" alt="" v-if="form.preview"/>
                          </div>
                          <div v-else>
                            <img class="h-36 w-36 rounded-md" :src="url+'/'+form.picture" alt="" v-if="form.picture"/>
                            <div class="rounded-md overflow-hidden bg-gray-100" v-else>
                              <svg class="h-36 w-36 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <label for="picture" class="mx-auto w-36 flex justify-center mt-3 px-3 py-2 bg-blue-700 text-white hover:bg-white hover:text-blue-700 text-sm rounded-md">
                          <ArrowUpTrayIcon class="mr-2 text-center h-4 w-4" aria-hidden="false" />
                          <span>Pilih Photo</span>
                          <input id="picture" name="picture" type="file" class="sr-only" @change="handleImage($event)"/>
                        </label>
                      </div>
                    </div>
                    <div class="col-span-6 sm:col-span-6">
                      <label for="name" class="block text-sm font-medium text-gray-900">Nama</label>
                      <input type="text" id="name" name="name" v-model="form.name" autofocus class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-6 sm:col-span-6">
                      <label for="name" class="block text-sm font-medium text-gray-900">Username</label>
                      <input type="text" id="username" v-model="form.username" autofocus class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-6 sm:col-span-6">
                      <label for="name" class="block text-sm font-medium text-gray-900">Email</label>
                      <input type="text" id="email" v-model="form.email" autofocus class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="name" class="block text-sm font-medium text-gray-900">Password</label>
                      <input type="password" id="password" v-model="form.password" autofocus class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="name" class="block text-sm font-medium text-gray-900">Konfirmasi Password</label>
                      <input type="password" id="password_confirmation" v-model="form.password_confirmation" autofocus class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <div class="mt-5 gap-3 flex justify-end">
                  <button type="button" class="mt-3 rounded-md bg-gray-500 text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-600" @click="open = false" ref="cancelButtonRef">Tutup</button>
                  <button type="submit" class="mt-3 rounded-md bg-blue-700 text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-white hover:text-blue-700" @click="open=false">Simpan</button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import {
  Dialog,
  DialogTitle,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import {
  ArrowUpTrayIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/vue/24/outline'
import { ref, reactive, watch } from 'vue'
import useAuth from '@/services/auth';

const open = ref(false)
const url = import.meta.env.VITE_API_URL
const { auth, getAuth, doUpdate, doLogout } = useAuth()
const handleImage = (event) =>{
  const target = event.target
  form.picture = target.files[0];
  form.preview = URL.createObjectURL(event.target.files[0]);
}
const form = reactive({
  name: '',
  username: '',
  phone: '',
  email: '',
  tahun: '',
  password: '',
  password_confirmation: '',
  picture: '',
})

const updateProfile = () => {
  const formData = new FormData();
  formData.append('name',                  form.name)
  formData.append('username',              form.username)
  formData.append('email',                 form.email)
  formData.append('tahun',                 form.tahun)
  formData.append('password',              form.password)
  formData.append('password_confirmation', form.password_confirmation)
  formData.append('picture',               form.picture)
  doUpdate(formData)

  form.password = null
  form.password_confirmation = null
}

getAuth()

watch(auth, item => {
  form.name     = item.name,
  form.username = item.username,
  form.email    = item.email,
  form.tahun    = item.tahun,
  form.picture  = item.picture
})
</script>
