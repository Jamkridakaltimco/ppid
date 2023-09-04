<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <Disclosure as="header" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="relative z-10 flex px-2 lg:px-0">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          </div>
        </div>
        <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
          <div class="w-full sm:max-w-xs">
            <h1 class="text-xl text-bold text-blue-800 font-large font-roboto">PPID PT. JAMKRIDA KALTIM</h1>
          </div>
        </div>
        <div class="relative z-10 flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
      <nav class="hidden lg:flex lg:space-x-8 lg:py-2 justify-between" aria-label="Global">
        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
      </nav>
    </div>

    <DisclosurePanel as="nav" class="relative flex h-16 items-center px-2 sm:absolute sm:inset-0 justify-between" aria-label="Global">
      <div class="relative z-10 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'block rounded-md py-2 px-3 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'


const navigation = [
  { name: 'Beranda', href: '#', current: true },
  { name: 'Laporan', href: '#', current: false },
  { name: 'Statistik', href: '#', current: false },
  { name: 'Pengaduan', href: '#', current: false },
  { name: 'Penjaminan', href: '#', current: false },
  { name: 'Tentang', href: '#', current: false },
]
</script>
