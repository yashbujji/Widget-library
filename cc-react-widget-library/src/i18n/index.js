import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { Api } from 'services';

const apiConfig = new Api();

const loadPathLocal = 'locales/{{lng}}/{{ns}}.json';
const loadApiPath = apiConfig.baseURL + 'resources/locales/{{lng}}/{{ns}}.json';

/**
 * function for calling resource API using the Axios Instance
 *
 * @param {*} url
 * @param {*} options
 * @param {*} callback
 * @param {*} data
 */
const loadCurrent = (url, options, callback, data) => {
  apiConfig.api
    .get(url)
    .then(res => {
      callback(res.data, { status: res.status });
    })
    .catch(error => {
      callback(error, { status: 404 });
    });
};

const backendOptions = {
  loadPath: loadApiPath,
  addPath: 'locales/{{lng}}/{{ns}}.json',
  parse(data) {
    return data;
  },
  ajax: loadCurrent,
  crossDomain: true,
};

const detectorOptions = {
  // order and from where user language should be detected
  order: [
    'querystring',
    'localStorage',
    'cookie',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      interpolation: {
        // React already does escaping
        escapeValue: false,
      },
      debug: false,
      backend: backendOptions,
      ns: ['translation'],
      // defaultNS: 'translations',
      //lng: 'en', // 'en' | 'de',
      fallbackLng: 'en', // use en if detected lng is not available
      react: {
        wait: true,
      },
      detection: detectorOptions,
    },
    (error, callback) => {
      if (error) {
        callback(i18next.init({ backend: { loadPath: loadPathLocal } }));
      }
    }
  );

export default i18next;
