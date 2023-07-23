<template>
  <div>
    <MobileNavigation :navigation="navigation" :navs="navs" :sidebarOpen="sidebarOpen" @sidebar="sidebar"/>
    <!-- Static sidebar for desktop -->
    <Navigation :navigation="navigation" :navs="navs"></Navigation>

    <div class="lg:pl-56">
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white px-4 py-2 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <!-- <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" aria-hidden="true" />
            <input id="search-field" class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
          </form> -->
        </div>
        <Profile />
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Bars3Icon,
  DocumentArrowUpIcon,
  CalendarDaysIcon,
  RectangleGroupIcon,
  PencilSquareIcon,
  ArrowDownOnSquareIcon,
  SpeakerWaveIcon
} from '@heroicons/vue/24/outline'
import MobileNavigation from '@/components/MobileNavigation.vue'
import Navigation from '@/components/Navigation.vue'
import Profile from '@/components/Profile.vue'

const navigation = [
  // { name: 'Dashboard',        href: '#/dashboard',    icon: RectangleGroupIcon, newtab: false },
  { name: 'Buat Antrian',     href: '#/buat-antrian',    icon: PencilSquareIcon, newtab: false },
  { name: 'Panggil Antrian',  href: '#/panggil-antrian', icon: SpeakerWaveIcon, newtab: false },
  { name: 'Resume',           href: '#/resume',          icon: ArrowDownOnSquareIcon, newtab: false },
  // { name: 'Surat PPD',    href: '#/surat-ppd',    icon: DocumentArrowUpIcon, current: false },
  // { name: 'Agenda',       href: '#/agenda',    icon: CalendarDaysIcon, current: false },
  // { name: 'Arsip',        href: '#/arsip',    icon: ArchiveBoxIcon, current: false },
]
const navs = [
  // { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  // { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  // { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const sidebarOpen = ref(false)
const sidebar = () => {
  sidebarOpen.value = !sidebarOpen
}
</script>
