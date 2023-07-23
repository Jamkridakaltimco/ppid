<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Resume</h2>
    </div>
  </div>
  <div class="grid grid-cols-3 sm:grid-cols-6 gap-4 flex justify-between">
    <div class="relative py-4 w-full overflow-hidden rounded-lg hover:bg-white bg-blue-800 hover:text-blue-800 text-white">
      <a href="#/resume/tamu">
        <UserCircleIcon alt="" class="h-10 mx-auto pointer-events-none" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for DASHBOARD</span>
        </button>
        <p class="mt-2 text-center text-sm font-bold">Data Tamu</p>
      </a>
    </div>
    <div class="relative py-4 w-full overflow-hidden rounded-lg hover:bg-white bg-blue-800 hover:text-blue-800 text-white">
      <a href="#/resume/antrian">
        <QueueListIcon alt="" class="h-10 mx-auto pointer-events-none" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for DASHBOARD</span>
        </button>
        <p class="mt-2 text-center text-sm font-bold">Data Antrian</p>
      </a>
    </div>

  </div>
</template>
<script setup>
import { QueueListIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
</script>
