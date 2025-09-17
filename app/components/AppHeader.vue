<template>
  <header class="bg-white shadow">
    <div class="container mx-auto py-4 px-5 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-xl font-bold text-gray-800">
        {{ $t("header.title") }}
      </div>

      <!-- Menu (escondido em telas pequenas) -->
      <nav class="hidden md:flex space-x-6">
        <a href="#" class="text-gray-600 hover:text-gray-800">{{
          $t("header.home")
        }}</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">{{
          $t("header.products")
        }}</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">{{
          $t("header.about")
        }}</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">{{
          $t("header.contact")
        }}</a>
      </nav>

      <div class="relative md:flex">
        <select class="rounded-md p-2 text-black" v-model="locale">
          <option
            v-for="value in locales"
            :key="value.code"
            :value="value.code"
            @click="setLocale(value.code)"
            class="text-sm text-black"
          >
            {{ value.name }}
          </option>
        </select>
      </div>

      <!-- Botão de Menu (visível em telas pequenas) -->
      <button
        class="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();
</script>