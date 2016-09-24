import IntlMessageFormat from 'intl-messageformat';

/**
 * Current locale may be configured by invoking side and accessed via window variable
 * Or one can use navigator.language https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language
 */
const LOCALE = 'pt';
export const messages = require(`../locales/${LOCALE}.json`);

// TODO: this trick is necessary, because locale expects IntlMessageFormat at global. But it is thing to be changed in future Intl releases
global.IntlMessageFormat = require('intl-messageformat');
require(`intl-messageformat/dist/locale-data/${LOCALE.toLowerCase()}`);
delete global.IntlMessageFormat;

const cache = Object.create(null); // Create object with no prototype for fastest access
export default function i18n(key, params) {
  const rawMsg = messages[key];

  if (!rawMsg) {
    console.warn(`No locale message found for key ${key}`);
    return '';
  }

  /**
   * It is important to cache created message, because the construction is pretty heavy.
   *
   * Could use https://github.com/yahoo/intl-format-cache
   * But for this example it is redundant.
   * It may be of use if it will become necessary to switch locale dynamically.
   * So do not hesitate to check it!
   */
  const msg = cache[key] || new IntlMessageFormat(rawMsg, LOCALE);
  cache[key] = msg;
  return msg.format(params);
};