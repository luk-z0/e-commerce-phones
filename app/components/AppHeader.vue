<template>
  <header class="bg-white shadow">
    <div class="container mx-auto py-4 px-5 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-xl font-bold text-gray-800">
        {{ $t("header.title") }}
      </div>

      <!-- Menu (escondido em telas pequenas) -->
      <nav class="hidden md:flex space-x-6">
        <a href="/" class="text-gray-600 hover:text-gray-800">{{
          $t("header.home")
        }}</a>
        <a href="/smartphones" class="text-gray-600 hover:text-gray-800">{{
          $t("header.products")
        }}</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">{{
          $t("header.about")
        }}</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">{{
          $t("header.contact")
        }}</a>
      </nav>

      <!-- Seletor de Idioma -->
      <div class="relative md:flex">
        <UInputMenu
          v-model="selectedLocale"
          :items="localeItems"
          value-key="value"
          @update:model-value="changeLocale"
        />
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
import { ref, computed, toRef } from "vue";
import { useI18n } from "vue-i18n";

const { locale, locales, setLocale } = useI18n();

const selectedLocale = ref(toRef(locale, "value"));

const localeItems = computed(() => {
  return locales.value.map((l) => ({
    label: l.name,
    value: l.code,
  }));
});

const changeLocale = (newLocale) => {
  setLocale(newLocale);
};
</script>