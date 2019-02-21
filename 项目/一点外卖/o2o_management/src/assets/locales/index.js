import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

var DEFAULT_LANG = 'zh'
const LOCALE_KEY = 'localeLanguage'

// zh: '中文',
// tr: 'Türk dili', 土耳其语
// en: 'English',
// ar: 'العربية', 阿拉伯语
// fr: 'Le français', 法语
// it: 'lingua italiana', 意大利语
// ja: '日本語',
// vi: 'Người việt nam', 越南语
// de: 'Deutsch', 德语
// ko: '한국어' 韩语

const locales = {
  zh: require('./zh.json'),
  tr: require('./tr.json'),
  en: require('./en.json'),
  ar: require('./ar.json'),
  fr: require('./fr.json'),
  it: require('./it.json'),
  ja: require('./ja.json'),
  vi: require('./vi.json'),
  de: require('./de.json'),
  ko: require('./ko.json')
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
})

export const setup = lang => {
  if (lang === undefined) {
    lang = window.localStorage.getItem(LOCALE_KEY)
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG
    }
  }
  window.localStorage.setItem(LOCALE_KEY, lang)

  Object.keys(locales).forEach(lang => {
    document.body.classList.remove(`lang-${lang}`)
  })
  document.body.classList.add(`lang-${lang}`)
  document.body.setAttribute('lang', lang)

  Vue.config.lang = lang
  i18n.locale = lang
}

setup()
export default i18n
