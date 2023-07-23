<template>
    <div class="flex h-screen">
      <div class="relative w-0 flex-1 lg:block">
        <div class="mx-auto">
          <div class="h-screen flex flex-wrap content-center justify-center">
            <div>
              <img
                class="absolute inset-0 h-full w-full opacity-40"
                src="@public/siapp.svg"
                alt=""
              />
            </div>
            <div class="flex col items-center p-4 z-10 px-12 rounded-lg">
              <div class="grid grid-cols-2 gap-4">
                <div class="relative p-2 w-32 overflow-hidden rounded-lg focus-within:ring-2 bg-white hover:bg-blue-100 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <a href="#/dashboard" target="_blank">
                    <img src="@public/siapp.svg" alt="" class="h-24 mx-auto pointer-events-none object-cover">
                    <button type="button" class="absolute inset-0 focus:outline-none">
                      <span class="sr-only">View details for Dashboard</span>
                    </button>
                    <p class="mt-2 text-center text-xs font-bold">DASHBOARD</p>
                  </a>
                </div>
                <!-- <div class="relative p-2 w-32 overflow-hidden rounded-lg focus-within:ring-2 bg-white hover:bg-blue-100 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <a href="#/antrian" target="_blank">
                    <img src="@public/siapp.svg" alt="" class="h-24 mx-auto pointer-events-none object-cover">
                    <button type="button" class="absolute inset-0 focus:outline-none">
                      <span class="sr-only">View details for SIJAMIN</span>
                    </button>
                    <p class="mt-2 text-center text-xs font-bold">DASHBOARD</p>
                  </a>
                </div> -->
                <div class="relative p-2 w-32 overflow-hidden rounded-lg focus-within:ring-2 bg-white hover:bg-blue-100 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <a href="#/registrasi" target="_blank">
                    <img src="@public/siapp.svg" alt="" class="h-24 mx-auto pointer-events-none object-cover">
                    <button type="button" class="absolute inset-0 focus:outline-none">
                      <span class="sr-only">View details for SIJAMIN</span>
                    </button>
                    <p class="mt-2 text-center text-xs font-bold">REGISTRASI</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-x-0 bottom-10 text-center text-sm font-bold">
              <span class="font-bold">SIAPP © 2023</span>
              <a href="#"  class="text-blue-800 hover:text-blue-400"> Sistem Informasi Antrian Pelayanan Publik</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- <div>
    <img class="absolute inset-0 h-full mx-auto object-contain opacity-50" src="@public/siapp.svg" alt="">
  </div>
  <div>
    <div class="flex col items-center p-4 z-10 px-12 rounded-lg">
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <div>
          <img src="@public/siapp.svg" class="h-32 ring-2 ring-blue-500 shadow-lg bg-white p-4 rounded-lg" />
        </div>
        <div>
          <a href="#/e-budget">
            <img src="@public/siapp.svg" class="h-32 hover:opacity-80 ring-2 ring-blue-500 shadow-lg rounded-lg" />
          </a>
        </div>
        <div>
          <a href="#/e-proposal">
            <img src="@public/siapp.svg" class="h-32 hover:opacity-80 ring-2 ring-blue-500 shadow-lg rounded-lg" />
          </a>
        </div>
        <div>
          <a href="#/e-monev">
            <img src="@public/siapp.svg" class="h-32 hover:opacity-80 ring-2 ring-blue-500 shadow-lg rounded-lg" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <div class="absolute text-center text-sm px-2">
        <span class="font-bold">SIAPP © 2023</span>
        <a href="#"  class="text-blue-800 hover:text-blue-400"> Sistem Informasi Antrian Pelayanan Publik</a>.
      </div>
    </div>
  </div> -->
</template>
