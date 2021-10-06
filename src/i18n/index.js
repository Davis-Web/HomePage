import enUS from './en-US'
import zhCN from './zh-CN'

export default {
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN
  },
  dateTimeFormats: {
    'en-US': {
      short: {
        year: 'numeric', month: 'short', day: 'numeric'
      },
      long: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric'
      }
    },
    'zh-CN': {
      short: {
        year: 'numeric', month: 'short', day: 'numeric'
      },
      long: {
        year: 'numeric', month: 'long', day: '2-digit',
        weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true
      }
    }
  }
}
