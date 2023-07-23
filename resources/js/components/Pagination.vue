<template>
  <nav
    class="bg-white px-2 py-1.5 flex items-center justify-between border-t border-gray-200 sm:px-6"
    aria-label="Pagination"
  >
    <p class="text-sm text-gray-700">
      <span class="font-medium">{{ currentPage ?? 0 }}</span>
      dari
      <span class="font-medium">{{ totalPages ?? 0 }}</span>
      Halaman
    </p>
    <div class="flex-1 flex justify-end">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        class="relative inline-flex gap-x-3 items-center px-4 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-white hover:bg-gray-400 hover:text-white"
        :class="{ 'cursor-not-allowed': isInFirstPage }"
      >
        <ChevronLeftIcon class="text-center h-5 w-5" aria-hidden="false" />
        <span class="hidden lg:block">Prev</span>
      </button>
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
        class="ml-3 relative inline-flex gap-x-3 items-center px-4 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-white hover:bg-gray-400 hover:text-white"
        :class="{ 'cursor-not-allowed': isInLastPage }"
      >
        <span class="hidden lg:block">Next</span>
        <ChevronRightIcon class="text-center h-5 w-5" aria-hidden="false" />
      </button>
    </div>
  </nav>
</template>
<script setup>
import { computed, defineProps, defineEmits } from "vue";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  maxVisibleButtons: Number,
  totalPages: Number,
  from: Number,
  to: Number,
  total: Number,
  perPage: Number,
  currentPage: Number,
  nextPage: String,
  prevPage: String,
  searchPage: String,
});

const emit = defineEmits(["pagechanged"]);

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
});

const onClickPreviousPage = () => {
  emit("pagechanged", (props.searchPage !== undefined ? props.searchPage : undefined), props.currentPage - 1);
};

const onClickNextPage = () => {
  emit("pagechanged", (props.searchPage !== undefined ? props.searchPage : undefined), props.currentPage + 1);
};
</script>
