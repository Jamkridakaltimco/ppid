<template>
  <Navbar :navigation="navigation" :navs="navs"></Navbar>
  <main>
    <div class="bg-sky-300">
          <!-- Your content -->
      <!-- <router-view></router-view> -->
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">

      <figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <a href="#">
          <img class="rounded-lg h-auto max-w-full" src="@public/exmp.jpg" alt="image description">
        </a>
        <figcaption class="absolute px-4 text-xl text-bold text-white bottom-6">
            <p>Do you want to get notified when a new component is added to Flowbite?</p>
        </figcaption>
      </figure>

      </div>
    </div>

  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <button class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-400">
                Tentang Kami
            </button>
            <!-- <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg class="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                </svg>
                Tentang Kami
            </a> -->
            <!-- <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">How to quickly deploy a static website</h1> -->
            <p class="pt-4 text-lg font-normal text-gray-500 dark:text-gray-400 mb-6 text-justify">PPID (Pejabat Pengelola Informasi dan Dokumentasi) PT. Jamkrida Kaltim adalah lembaga yang
dikelola oleh PT. Jamkrida Kaltim dan bertanggung jawab dalam menyediakan dan memberikan
akses kepada masyarakat terhadap informasi publik yang dimiliki oleh perusahaan.
PPID PT.Jamkrida Kaltim dijalankan berdasarkan UU No. 14 Tahun 2018 tentang Keterbukaan
Informasi Publik dan PerGub Kaltim No.1 Tahun 2013 tentang Pedoman Layanan Informasi Publik
di Lingkungan Pemprov Kaltim.</p>

        </div>

    </div>
  </section>
  <div class="bg-emerald-400">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-6">
      <div>
        <img class="rounded-lg h-16" src="@public/ojk.png" alt="image description">
      </div>
      <div>
        <img class="rounded-lg h-16" src="@public/asippindo.png" alt="image description">
      </div>
      <div>
        <img class="rounded-lg h-16" src="@public/kaltim.png" alt="image description">
      </div>
      <div>
        <img class="rounded-lg h-16" src="@public/66thn.png" alt="image description">
      </div>
    </div>
  </div>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div class="grid grid-cols-3 md:grid-cols-3 gap-8">
            <div class="col-span-2 justify-center items-center bg-sky-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <button class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-sky-300 rounded-lg bg-white">
                Berita Terbaru
            </button>

            <a href="#" class="mt-4 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="@public/exmp.jpg" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>

                <!-- <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a> -->
            </div>
            <div class="bg-emerald-400 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <button class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-emerald-400 rounded-lg bg-white">
                Agenda
            </button>
                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                <!-- <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> -->
            </div>
        </div>
      </div>
    </section>

    <section class="bg-white dark:bg-gray-900">
    <div class="px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 class="justify-center items-center py-2.5 px-5 text-base font-large text-xl text-center text-sky-300 rounded-lg">
                Galeri
            </h1>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
        </div>
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
</script>
