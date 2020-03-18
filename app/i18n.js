const params = new URLSearchParams(window.location.search);

const defaultLanguage = 'en';
const availableLanguages = ['en', 'ar', 'de', 'es', 'fr', 'zh'];
const rtl = ['ar'];
const getPreferredLanguages = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages;
  } else {
    let lang = navigator.userLanguage || navigator.language || navigator.browserLanguage || defaultLanguage;
    return [lang, defaultLanguage];
  }
}

// Get specified language, if one is
// Get most preferred language that is supported
// Fallback to 'en' if lang is undefined
let lang = params.get('lang') || getPreferredLanguages().filter(l => availableLanguages.includes(l))[0] || defaultLanguage;
if (!availableLanguages.includes(lang)) {
  lang = defaultLanguage;
}

if (rtl.includes(lang)) {
  document.body.style.direction = 'rtl';
}

// Load phrases for language
let phrases = {};
function loadLanguage(cb) {
  fetch(`/static/lang/${lang}.json`)
    .then(response => response.json())
    .then(json => {
      phrases = json;
      cb();
    });
}

function t(key, data) {
  data = data || {};
  let tmpl = phrases[key] || key;
  return Object.keys(data).reduce((acc, k) => {
    return acc.replace(`{${k}}`, data[k]);
  }, tmpl);
}

export { loadLanguage };
export default t;
