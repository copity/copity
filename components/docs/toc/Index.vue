<template>
  <nav v-if="toc?.links?.length" class="text-base lg:text-sm w-56">
    <div class="font-display text-sm font-medium text-slate-900 dark:text-white">
      On this page
    </div>

    <DocsTocLinks :links="toc.links" class="mt-3" @move="emit('move')" />
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits(['move'])
const { toc } = useContent()
</script>
