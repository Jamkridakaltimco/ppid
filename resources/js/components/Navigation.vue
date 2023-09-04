<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-800">
      <div class="flex items-center flex-shrink-0 h-16 px-4 py-2 bg-white shadow-sm">
        <img src="@public/icon.svg" class="h-14 w-auto" alt="Your Company" />
        <span class="ml-2 font-bold text-blue-800">PPID <br>JamKaTi</span>
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7 px-4 pb-4">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in navigation" :key="item.name">
                <a :href="item.href" :class="[item.current ? 'bg-gray-50 text-blue-600' : 'text-white hover:text-blue-800 hover:bg-gray-50', 'group flex gap-x-3 rounded-md px-2 py-2 text-sm leading-6 font-semibold']">
                  <component :is="item.icon" :class="[item.current ? 'text-blue-600' : 'text-white group-hover:text-blue-800', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </li>
          <li v-if="navs.length > 0">
            <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li v-for="team in teams" :key="team.name">
                <a :href="team.href" :class="[team.current ? 'bg-gray-50 text-blue-600' : 'text-white hover:text-blue-800 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                  <span :class="[team.current ? 'text-blue-600 border-blue-600' : 'text-white border-gray-200 group-hover:border-blue-600 group-hover:text-blue-800', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{ team.initial }}</span>
                  <span class="truncate">{{ team.name }}</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="mt-auto">
            <a href="#/sitemanager/pengaturan" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-gray-50 hover:text-blue-800">
              <Cog6ToothIcon class="h-6 w-6 shrink-0 text-white group-hover:text-blue-800" aria-hidden="true" />
              Pengaturan
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue"
import { HomeModernIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'

const props = defineProps(['sidebarOpen', 'navigation', 'navs'])
const emit = defineEmits(['sidebar'])
</script>
