<template>
  <UCard class="max-w-md mx-auto mt-20">
    <template #header>
      <h2 class="text-2xl font-bold text-center mb-4">
        {{ $t("login.title") }}
      </h2>
    </template>
    <LoginForm/>
  </UCard>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>