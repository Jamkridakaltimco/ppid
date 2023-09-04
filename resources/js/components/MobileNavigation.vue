<template>
  <TransitionRoot as="template" :show="props.sidebarOpen">
    <Dialog as="div" class="relative z-50 lg:hidden" @close="clickSidebarOpen">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-900/80" />
      </TransitionChild>

      <div class="fixed inset-0 flex">
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button type="button" class="-m-2.5 p-2.5" @click="clickSidebarOpen">
                  <span class="sr-only">Close sidebar</span>
                  <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-800">
              <div class="flex items-center flex-shrink-0 h-16 px-4 py-2 bg-white shadow-sm">
                <img src="@public/siapp.svg" class="h-14 w-auto" alt="Your Company" />
                <span class="ml-2 font-bold text-blue-800">SIAPP</span>
              </div>
              <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7 px-4 pb-4">
                  <li>
                    <ul role="list" class="-mx-2 space-y-1">
                      <li v-for="item in navigation" :key="item.name">
                        <a @click="clickSidebarOpen" :href="item.href" :class="[item.current ? 'bg-gray-50 text-blue-600' : 'text-white hover:text-blue-800 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                          <component :is="item.icon" :class="[item.current ? 'text-blue-600' : 'text-white group-hover:text-blue-800', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li v-if="navs.length > 0">
                    <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                    <ul role="list" class="-mx-2 mt-2 space-y-1">
                      <li v-for="nav in navs" :key="nav.name">
                        <a @click="clickSidebarOpen" :href="nav.href" :class="[nav.current ? 'bg-gray-50 text-blue-600' : 'text-white hover:text-blue-800 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                          <span :class="[nav.current ? 'text-blue-600 border-blue-600' : 'text-gray-400 border-gray-200 group-hover:border-blue-600 group-hover:text-blue-800', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{ nav.initial }}</span>
                          <span class="truncate">{{ nav.name }}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="mt-auto">
                    <a @click="clickSidebarOpen" href="#/pengaturan" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-gray-50 hover:text-blue-800">
                      <Cog6ToothIcon class="h-6 w-6 shrink-0 text-white group-hover:text-blue-800" aria-hidden="true" />
                      Pengaturan
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { defineProps, defineEmits } from "vue"
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Cog6ToothIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps(['sidebarOpen', 'navigation', 'navs'])
const emit = defineEmits(['sidebar'])

const clickSidebarOpen = () => {
  emit('sidebar')
}
</script>
