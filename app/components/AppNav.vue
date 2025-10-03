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
        <LangSelect />

        <!-- User Dropdown -->
        <ClientOnly v-if="loggedIn">
          <div class="ml-4">
            <LayoutUserDropdown />
          </div>
        </ClientOnly>
        <UDropdownMenu v-else :items="items" :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8,

        }" :ui="{
            content: 'w-48',

          }">
          <UButton icon="i-lucide-menu" color="neutral" class="cursor-pointer" />
        </UDropdownMenu>
      </aside>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';

const { loggedIn } = useUserSession();
const router = useRouter();


const items = [
  {
    label: 'Login',
    icon: 'i-lucide-user',
    onClick: () => {
      router.push('/login')
    },
  },
  {
    label: 'Settings',
    icon: 'i-lucide-cog',
  }
] satisfies DropdownMenuItem[]
</script>