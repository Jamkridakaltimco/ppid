<template>
  <div class="md:flex md:items-center md:justify-between pb-4">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-blue-800 sm:truncate sm:tracking-tight">Halaman</h2>
    </div>
  </div>
  <div class="grid grid-cols-3 sm:grid-cols-6 gap-4 flex justify-between">
    <div class="relative py-4 w-full overflow-hidden rounded-lg hover:bg-white bg-blue-800 hover:text-blue-800 text-white">
      <a href="#/sitemanager/halaman/categories">
        <TagIcon alt="" class="h-10 mx-auto pointer-events-none" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for Loket</span>
        </button>
        <p class="mt-2 text-center text-sm font-bold">Categories</p>
      </a>
    </div>
    <div class="relative py-4 w-full overflow-hidden rounded-lg hover:bg-white bg-blue-800 hover:text-blue-800 text-white">
      <a href="#/sitemanager/halaman/post">
        <NewspaperIcon alt="" class="h-10 mx-auto pointer-events-none" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for Loket</span>
        </button>
        <p class="mt-2 text-center text-sm font-bold">Post</p>
      </a>
    </div>
    <div class="relative py-4 w-full overflow-hidden rounded-lg hover:bg-white bg-blue-800 hover:text-blue-800 text-white">
      <a href="#/sitemanager/halaman/static">
        <ClipboardIcon alt="" class="h-10 mx-auto pointer-events-none" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for Loket</span>
        </button>
        <p class="mt-2 text-center text-sm font-bold">Static</p>
      </a>
    </div>
  </div>
</template>
<script setup>
import { TagIcon, NewspaperIcon, ClipboardIcon } from '@heroicons/vue/24/outline'
</script>
