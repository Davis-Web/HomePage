import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import config from 'src/i18n'

const { dateTimeFormats, messages } = config

const i18n = createI18n({
  locale: 'en-US',
  messages,
  dateTimeFormats
})

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n)
})

export { i18n }
