<template>
  <UDropdownMenu :items="items">
    <UAvatar :src="user?.urlPicture" />
  </UDropdownMenu>
</template>


<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import type { User } from "~~/server/types/user";

const router = useRouter();

const { user, clear } = useUserSession() as {
    user: Ref<User | null>;
    clear: () => void;  
    loggedIn: Ref<boolean>;
};

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: user.value?.name,
      avatar: {
        src: user.value?.urlPicture || 'https://avatar.iran.liara.run/public',
      },
      type: "label",
    },
  ],
  [
    {
      label: "Profile",
      icon: "i-lucide-user",
    },
    {
      label: "Billing",
      icon: "i-lucide-credit-card",
    },
    {
      label: "Settings",
      icon: "i-lucide-cog",
      kbds: [","],
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      to: "https://github.com/nuxt/ui",
      target: "_blank",
    },
    {
      label: "Support",
      icon: "i-lucide-life-buoy",
      to: "/docs/components/dropdown-menu",
    },
    {
      label: "API",
      icon: "i-lucide-cloud",
      disabled: true,
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      onClick: () => {
        clear();
        router.push("/");
      },
    },
  ],
]);
</script>

