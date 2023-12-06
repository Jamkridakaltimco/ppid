<template>
  <Navbar :navigation="navigation" :navs="navs"></Navbar>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl">
        <div class="md:grid-cols-4 gap-6 h-auto min-h-full">
          <div class="justify-center items-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 md:p-8">
            <div class="w-full text-xl items-center py-2.5 px-5 mb-3 text-base font-bold text-white rounded-lg bg-sky-300">
                JUDUL BERITA
            </div>
            <div mt-4 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700>
              <img class="float-left h-96 rounded-xl m-4" src="@public/exmp.jpg">
                <p class="text-gray-600 mt-8 mb-2 text-xs">1 Januari 2023</p>
                <p class="mb-3 font-normal text-gray-700 text-lg dark:text-gray-400 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque doloremque enim possimus. Deserunt voluptatibus facere nulla temporibus dolor architecto quasi natus sint magni enim aspernatur omnis, ex blanditiis cupiditate? A?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, natus? Nulla eaque, adipisci est iure, totam commodi qui sequi sed mollitia hic alias? Distinctio vitae enim aliquid. Illo, odit maiores.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sapiente voluptas corporis, explicabo iste tempora cum mollitia non tenetur, nulla debitis quibusdam harum consectetur. Consectetur quis eveniet aut perferendis commodi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum sunt ut soluta minima veniam dolorum reiciendis itaque odio quaerat possimus porro necessitatibus, laborum a quos, repellendus impedit debitis amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ratione quis quos vero maxime, sunt ipsum id laboriosam laudantium beatae earum dicta temporibus? Laboriosam, doloremque id aliquid nisi nam quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis debitis repudiandae dicta optio voluptatum, voluptate, nobis repellendus veniam magni corrupti laborum architecto officiis sapiente omnis sequi laudantium quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veniam vero velit alias repellat! Nam asperiores sapiente accusamus. Dolore odio corrupti dignissimos natus accusantium autem a! Esse itaque at asperiores?</p>

            </div>
          </div>
        </div>
        <div class="w-full text-xl text-center mt-8 items-center py-2.5 px-5 text-base font-medium text-white rounded-lg bg-emerald-400">
          BERITA LAINNYA
        </div>
        <div class="grid grid-cols-3 text-center justify-center mt-8">
          <div class="justify-center">
            <img class="h-48 rounded-xl justify-center" src="@public/exmp.jpg">
            <h3>Judul Berita</h3>
          </div>
          <div class="justify-center">
            <img class="h-48 rounded-xl" src="@public/exmp.jpg">
            <h3>Judul Berita</h3>
          </div>
          <div class="justify-center">
            <img class="h-48 rounded-xl" src="@public/exmp.jpg">
            <h3>Judul Berita</h3>
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
