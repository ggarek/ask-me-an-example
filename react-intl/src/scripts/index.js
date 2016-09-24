import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider, addLocaleData } from 'react-intl';

/**
 * Intl uses locale data to format numbers, dates etc.
 * They are split into bundles by locale.
 * Read more here https://github.com/yahoo/react-intl/wiki#locale-data-in-browsers
 */
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import pt from 'react-intl/locale-data/pt';
addLocaleData([...en, ...ru, ...pt]);

// Read locale set by server
const LOCALE = window.appConfig.locale || 'en';

/**
 * Create webpack require context for all locale.
 * NOTE: This will bundle all locales in the context
 */
const messagesContext = require.context('../locales/', false, /\.json$/);
const getMessagesForLocale = locale => messagesContext(`./${locale}.json`);

ReactDOM.render((
  <IntlProvider locale={LOCALE} messages={getMessagesForLocale(LOCALE)}>
    <App />
  </IntlProvider>
), document.getElementById('host'));
