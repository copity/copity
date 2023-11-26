export function useCopity() {
  const copity = computed(() => useAppConfig()?.copity || {})
  const { navKeyFromPath } = useContentHelpers()
  const { navigation, page } = useContent()
  const route = useRoute()

  const header = copity?.value?.header || {}
  const footer = copity?.value?.footer || {}

  const config = computed(() => {
    const titleTemplate = copity?.value?.titleTemplate || navKeyFromPath(page?.value?._path, 'titleTemplate', navigation.value || []) || `%s - ${copity?.value?.title || 'Copity'}`

    return {
      ...copity.value,
      titleTemplate,
      header: {
        ...header,
        ...navKeyFromPath(route.path, 'header', navigation.value || []),
        ...page.value?.header,
      },
      footer: {
        ...footer,
        ...navKeyFromPath(route.path, 'footer', navigation.value || []),
        ...page.value?.footer,
      },
    }
  })

  return {
    config,
  }
}
