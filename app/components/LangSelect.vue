<template>
    <USelect v-model="value" :items="items" trailing-icon size="sm" value-key="code"
        @update:model-value="setLocaleAndSave" :ui="{ content: 'w-auto' }">
        <template #item="{ item }">
            <div class="flex items-center whitespace-nowrap px-2">
                <Icon v-if="item.flag" :name="item.flag" :alt="item.name" :class="flagClass" />
                <span class="px-1 text-sm font-medium">{{ item.name }}</span>
            </div>
        </template>
        <Icon :name="currentLabel.flag" :class="flagClass" />
    </USelect>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const items = ref(locales)
const value = ref(locale);
const flagClass = 'w-5 h-5 rounded-sm'

const currentLabel = computed(() => {
    return locales.value.find(l => l.code === value.value)
})

const setLocaleAndSave = (newLocale) => {
    setLocale(newLocale)
}
</script>