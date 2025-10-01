<template>
  <main class="min-h-screen flex flex-col flex-wrap place-items-center">
    <nav class="container flex flex-col w-full items-center mt-16">
      <h1 class="text-3xl font-bold mb-4">{{ $t("smartphones.title") }}</h1>
      <p class="text-lg text-gray-600">{{ $t("smartphones.subtitle") }}</p>
    </nav>
    <div class="container w-full flex flex-col items-center justify-center">
      <main>
        <section class="flex flex-row flex-wrap w-full gap-4 mt-8">
          <UCard
            v-for="phone in phones"
            :key="phone.id"
            variant="solid"
            class="w-64"
          >
            <template #header>
              <h2 class="text-xl font-semibold mb-2">
                {{ phone.name }}
              </h2>
            </template>

            <section class="flex flex-col items-center justify-center-safe">
              <NuxtImg
                :src="phone.image"
                alt="phone.name"
                class="w-64 max-h-32 object-contain"
              />
            </section>

            <template #footer>
              <section class="mt-4">
                <p class="text-gray-700">
                  <strong>Brand:</strong> {{ phone.brand }}
                </p>
                <p class="text-gray-700">
                  <strong>Storage:</strong> {{ phone.storage }}
                </p>
                <p class="text-gray-700">
                  <strong>Price:</strong> ${{ phone.price }}
                </p>
                <p
                  class="text-gray-700 mt-2 text-justify whitespace-normal text-md"
                >
                  {{ phone.description }}
                </p>
              </section>
            </template>
          </UCard>
        </section>
      </main>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
const phones = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    image: "/images/iphone-14-pro.png",
    brand: "Apple",
    storage: "256GB",
    price: 999,
    description: "O melhor iPhone de todos os tempos.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    image: "/images/galaxy-s23.png",
    brand: "Samsung",
    storage: "128GB",
    price: 799,
    description: "Um smartphone Android poderoso e versátil.",
  },
  {
    id: 3,
    name: "Google Pixel 7",
    image: "/images/pixel-7.png",
    brand: "Google",
    storage: "128GB",
    price: 699,
    description: "A melhor experiência Android pura.",
  },
];
</script>