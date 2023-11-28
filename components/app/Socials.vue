<template>
  <div class="flex items-center gap-4">
    <NuxtLink
      v-for="(social, key) in socials"
      :key="key"
      :title="social.label"
      :aria-label="social.label"
      :href="social.href"
      target="_blank"
      class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 dark:text-zinc-400"
      rel="noopener noreferrer"
    >
      <Icon :name="social.icon" class="h-4 w-4" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { config } = useCopity()

const socials = computed(() => {
  return Object.entries(config.value.socials || {})
    .map(([key, value]) => {
      return {
        href: value,
        icon: `simple-icons:${key}`,
        label: value,
      }
    })
})
</script>
