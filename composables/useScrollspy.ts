export function useScrollspy() {
  const observer = ref<IntersectionObserver>()
  const visibleHeadings = ref<string[]>([])
  const activeHeadings = ref<string[]>([])

  const observerCallback = (entries: IntersectionObserverEntry[]) =>
    entries.forEach((entry) => {
      const id = entry.target.id

      if (entry.isIntersecting) {
        visibleHeadings.value.push(id)
      }
      else {
        visibleHeadings.value = visibleHeadings.value.filter(t => t !== id)
      }
    })

  const updateHeadings = (headings: Element[]) => {
    headings.forEach((heading) => {
      observer.value?.observe(heading)
    })
  }

  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal
    }
    else {
      activeHeadings.value = val
    }
  }, { deep: true })

  onBeforeMount(() => (observer.value = new IntersectionObserver(observerCallback)))

  onBeforeUnmount(() => observer.value?.disconnect())

  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings,
  }
}
