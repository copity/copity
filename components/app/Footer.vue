<template>
  <div class="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
    <p class="text-xs">
      <a
        v-if="config?.footer?.credits"
        :href="config?.footer?.credits?.href || '#'"
        rel="noopener"
        class="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-500 transition"
        target="_blank"
      >
        <Icon
          v-if="config?.footer?.credits?.icon"
          :name="config?.footer?.credits?.icon"
        />
        <span v-if="config?.footer?.credits?.text">{{ config.footer.credits.text }}</span>
      </a>
    </p>

    <AppSocials />
  </div>
</template>

<script setup lang="ts">
const { config } = useCopity()
</script>
