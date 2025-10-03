<template>
  <UContainer>
    <UButton color="neutral" href="/auth/google" rel="noopener noreferrer" block
      class="justify-center text-xl font-semibold">
      <span class="flex items-center">
        <Icon name="logos:google-icon" class="w-8 " />
        <p class="text-lg font-medium text-black">{{ $t("login.google") }}</p>
      </span>
    </UButton>
  </UContainer>
</template>