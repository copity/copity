export default defineNuxtSchema({
  appConfig: {
    /**
     * Copity theme configuration.
     *
     * @studioIcon material-symbols:docs
     */
    copity: {
      /**
       * Website title, used as header default title and meta title.
       *
       * @studioIcon material-symbols:title
       */
      title: 'Copity',
      /**
       * The website title template, to overwrite the default one.
       *
       * @studioIcon material-symbols:title
       */
      titleTemplate: '%s - Copity',
      /**
       * Social links
       *
       * @studioIcon material-symbols:share-outline
       */
      socials: {
        /**
         * GitHub org or repository
         *
         * @example 'copity/copity'
         * @studioIcon simple-icons:github
         */
        github: '',
        /**
         * Medium page url
         *
         * @example 'https://medium.com/copity'
         * @studioIcon simple-icons:medium
         */
        medium: '',
        /**
         * Twitter page url
         *
         * @example 'https://twitter.com/copity'
         * @studioIcon simple-icons:twitter
         */
        twitter: '',
        /**
         * Facebook page url
         *
         * @example 'https://www.facebook.com/groups/copity'
         * @studioIcon simple-icons:facebook
         */
        facebook: '',
        /**
         * Instagram page url
         *
         * @example 'https://www.instagram.com/copity'
         * @studioIcon simple-icons:instagram
         */
        instagram: '',
        /**
         * Youtube page url
         *
         * @example 'https://www.youtube.com/@copity'
         * @studioIcon simple-icons:youtube
         */
        youtube: '',
        /**
         * Discord channel url
         *
         * @example 'https://discord.gg/copity'
         * @studioIcon simple-icons:discord
         */
        discord: '',
      },
      /**
       * Header configuration.
       *
       * @studioIcon fluent:document-header-24-regular
       */
      header: {
        /**
         * Website title
         * Title to be displayed in header or as aria-label if logo is defined.
         * Default to copity.title
         *
         * @studioIcon material-symbols:title
         */
        title: '',
        /**
         * Logo configuration
         * Boolean to disable or use the `AppLogo.vue` component.
         * String to be used as a name of a component.
         * Object that sets the light and dark logos.
         *
         * @type {boolean|string|{dark: string, light: string}}
         * @example 'AppLogo'
         * @studioInput boolean
         */
        logo: false,
      },
      /**
       * Footer configuration
       *
       * @studioIcon fluent:document-footer-24-regular
       */
      footer: {
        /**
         * Website credits configuration.
         *
         * @type {false|{icon: string, text: string, href: string}}
         * @studioIcon material-symbols:copyright
         */
        credits: {
          /**
           * Icon to show on credits
           *
           * @formtype Icon
           */
          icon: 'IconCopity',
          text: 'Powered by Copity',
          href: 'https://github.com/copity/copity',
        },
      },
    },
  },
})
