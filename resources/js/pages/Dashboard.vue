<template>
  <div class="min-h-full">
    <header class="bg-blue-800 pb-24">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative flex items-center justify-center py-5 lg:justify-between">
          <!-- Logo -->
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <a href="#" class="text-white text-4xl font-bold">
              <span class="sr-only">Your Company</span>
              SIAPP <br>
              Sistem Informasi Antrian Pelayanan Publik
            </a>
          </div>

          <!-- Right section on desktop -->
          <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
            <div type="button" class="flex-shrink-0 rounded-full p-1 text-white text-right font-bold">
              <span class="sr-only">View notifications</span>
              <!-- <div>{{ dateTime.date }}/{{ dateTime.month }}/{{ dateTime.year }}</div>
              <div>{{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</div> -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="-mt-24 pb-8">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Page title</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <p class="text-center text-sm font-bold">NO ANTRIAN</p>
                  <p class="text-center text-3xl font-bold">A {{ room.room_a !== null ? room.room_a.number : 0 }}</p>
                </div>
              </div>
            </section>
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <p class="text-center text-sm font-bold">NO ANTRIAN</p>
                  <p class="text-center text-3xl font-bold">B {{ room.room_b !== null ? room.room_b.number : 0 }}</p>
                </div>
              </div>
            </section>
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <p class="text-center text-sm font-bold">NO ANTRIAN</p>
                  <p class="text-center text-3xl font-bold">C {{ room.room_c !== null ? room.room_c.number : 0 }}</p>
                </div>
              </div>
            </section>
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <p class="text-center text-sm font-bold">NO ANTRIAN</p>
                  <p class="text-center text-3xl font-bold">D {{ room.room_d !== null ? room.room_d.number : 0 }}</p>
                </div>
              </div>
            </section>

          </div>


          <!-- Right column -->
          <div class="grid grid-cols-1 gap-10 lg:col-span-2">
            <section aria-labelledby="section-1-title">
              <h2 class="sr-only" id="section-1-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <iframe class="h-80 w-full" src="http://www.youtube.com/embed/WG-k_vuS8Wc?rel=0&autoplay=1&mute=1&controls=0" frameborder="0" allowfullscreen></iframe>
              </div>
            </section>
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <p class="text-center text-sm font-bold">CEK FISIK</p>
                  <p class="text-center text-3xl font-bold">D 000</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <footer class="absolute inset-x-0 bottom-0 text-center text-sm font-bold bg-blue-800">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="py-8 text-center text-sm text-white sm:text-left"><span class="block sm:inline">SIAPP &copy; 2023 Sistem Informasi Pelayanan Publik.</span></div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const room = ref()

async function load() {
  const result = await axios.get(`/api/dashboard`)
  room.value = await result.data
  console.log(room.value)
}

setInterval(function(){
  load()
}, 3000);

load()
// const date = new Date();
// const dateTime = reactive( {
//   date: date.getDate(),
//   month: date.getMonth(),
//   year: date.getFullYear(),
//   hours: date.getHours(),
//   minutes: date.getMinutes(),
//   seconds: date.getSeconds(),
// })
// const timer = undefined
// const setDateTime = () => {
//   const date = new Date();
//   dateTime = {
//     date: date.getDate(),
//     month: date.getMonth(),
//     year: date.getFullYear(),
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//   }
// }
// setDateTime()

// beforeMount()  {
//   timer = setInterval(this.setDateTime, 1000)
// }
// beforeUnmount() {
//   clearInterval(this.timer)
// }
</script>
