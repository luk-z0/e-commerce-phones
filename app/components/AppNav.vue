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

      <aside class="flex items-center">
        <!-- Seletor de Idioma -->
        <div class="relative">
          <UInputMenu v-model="selectedLocale" :items="localeItems" value-key="value" @update:model-value="changeLocale"
            size="sm" />
        </div>

        <!-- User Dropdown -->
        <ClientOnly v-if="loggedIn">
          <div class="ml-4">
            <LayoutUserDropdown />
          </div>
        </ClientOnly>
        <UAvatar v-else class="ml-4 cursor-pointer" size="md" src="https://avatar.iran.liara.run/public"
          @click="$router.push('/login')" :alt="$t('header.login')" />
      </aside>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, toRef } from "vue";
import { useI18n } from "vue-i18n";

const { locale, locales, setLocale } = useI18n();
const { loggedIn } = useUserSession();

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