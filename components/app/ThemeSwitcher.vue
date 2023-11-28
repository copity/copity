<template>
  <span>
    <button type="button" class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 dark:text-zinc-400" @click="toggle">
      <ColorScheme>
        <Icon :name="icon" class="h-4 w-4" />
      </ColorScheme>
    </button>
  </span>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}

const icon = computed(() => {
  if (colorMode.preference === 'light') {
    return 'uil:sun'
  }
  else if (colorMode.preference === 'dark') {
    return 'uil:moon'
  }

  return 'uil:desktop'
})
</script>
