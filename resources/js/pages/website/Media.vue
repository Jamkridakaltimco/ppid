<template>
  <Navbar :navigation="navigation" :navs="navs"></Navbar>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl">
        <div class="md:grid-cols-4 gap-6 h-auto min-h-full">
          <div class="justify-center items-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 md:p-8">
            <!-- <div class="w-full text-xl items-center py-2.5 px-5 mb-3 text-base font-bold text-white rounded-lg bg-sky-300">
                JUDUL BERITA
            </div> -->
            <div mt-4 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700>
              <img class="h-auto rounded-xl m-4" src="@public/exmp.jpg">

            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <Footer :footer="footer"></Footer>
  </footer>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  import { CalendarDaysIcon } from '@heroicons/vue/24/solid'
</script>
