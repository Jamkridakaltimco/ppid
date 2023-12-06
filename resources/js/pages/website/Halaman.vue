<template>
  <Navbar :navigation="navigation" :navs="navs"></Navbar>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="grid grid-cols-4 md:grid-cols-4 gap-6 h-auto min-h-full">
          <div class="col-span-3 justify-center items-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 md:p-8">
            <button class="inline-flex justify-center items-center py-2.5 px-5 mb-3 text-base font-medium text-center text-white rounded-lg bg-sky-300">
                JUDUL HALAMAN
            </button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ratione quis quos vero maxime, sunt ipsum id laboriosam laudantium beatae earum dicta temporibus? Laboriosam, doloremque id aliquid nisi nam quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis debitis repudiandae dicta optio voluptatum, voluptate, nobis repellendus veniam magni corrupti laborum architecto officiis sapiente omnis sequi laudantium quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veniam vero velit alias repellat! Nam asperiores sapiente accusamus. Dolore odio corrupti dignissimos natus accusantium autem a! Esse itaque at asperiores?</p>
          </div>
          <div class="dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div class="bg-sky-300 mb-8 rounded-lg py-4 px-4">
              <center><button class="inline-flex mb-4 justify-center items-center py-2.5 px-5 text-base font-medium text-center text-sky-300 rounded-lg bg-white">
                BERITA
              </button></center>
              <div class="border-b mb-4">
                <img class="h-24 rounded-xl" src="@public/exmp.jpg">
                <h2 class="text-white font-bold ">Judul Berita</h2>
                <CalendarDaysIcon class="h-4 w-4 text-white inline-flex "/>
                <p class="mx-2 inline-flex text-white font-light text-xs">Tanggal Berita</p>
              </div>
              <div class="border-b mb-4">
                <img class="h-24 rounded-xl" src="@public/exmp.jpg">
                <h2 class="text-white font-bold">Judul Berita</h2>
                <CalendarDaysIcon class="h-4 w-4 text-white inline-flex "/>
                <p class="mx-2 inline-flex text-white font-light text-xs">Tanggal Berita</p>
              </div>
            </div>
            <div class="bg-emerald-400 mt-6 rounded-lg py-4">
              <center><button class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-emerald-400 rounded-lg bg-white">
                AGENDA
              </button></center>
              <ul class="w-84 text-sm mx-4 font-medium text-gray-900order text-white border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li class="w-full px-4 py-2 border-b text-center border-gray-200 rounded-t-lg dark:border-gray-600">Januari</li>
                  <p>1  : Tahun Baru</p>
                  <p>7  : Ulang Tahun Jamkrida Kaltim</p>
                  <li class="w-full mt-4 px-4 py-2 border-b text-center border-gray-200 dark:border-gray-600">Februari</li>
                  <li class="w-full mt-4 px-4 py-2 border-b text-center border-gray-200 dark:border-gray-600">Maret</li>
                  <li class="w-full mt-4 px-4 py-2 border-b text-center border-gray-200 dark:border-gray-600">April</li>
              </ul>
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
