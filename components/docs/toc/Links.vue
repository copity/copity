<template>
  <ul class="relative">
    <li
      v-for="(link, key) in links"
      :key="key"
    >
      <a
        :href="`#${link.id}`"
        class="flex justify-between gap-2 py-1 text-sm transition text-zinc-600 hover:text-zinc-900 dark:hover:text-white"
        :class="[activeHeadings.includes(link.id) ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-600 dark:text-zinc-400']"
        @click.prevent="scrollToHeading(link.id)"
      >
        {{ link.text }}
      </a>
      <DocsTocLinks
        v-if="link.children"
        class="pl-4"
        :links="link.children"
        @move="childMove($event)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TocLink } from '@nuxt/content/dist/runtime/types'

export interface Props {
  links: TocLink[]
}

withDefaults(defineProps<Props>(), {
  links: () => [],
})

const emit = defineEmits(['move'])

const router = useRouter()

function childMove(id: string) {
  emit('move', id)
}

function scrollToHeading(id: string) {
  router.push(`#${id}`)
  emit('move', id)
}

const { activeHeadings, updateHeadings } = useScrollspy()

if (process.client) {
  onMounted(() => {
    updateHeadings([
      ...document.querySelectorAll('.document-driven-page h1, .docus-content h1'),
      ...document.querySelectorAll('.document-driven-page h2, .docus-content h2'),
      ...document.querySelectorAll('.document-driven-page h3, .docus-content h3'),
      ...document.querySelectorAll('.document-driven-page h4, .docus-content h4'),
    ])
  })
}
</script>
