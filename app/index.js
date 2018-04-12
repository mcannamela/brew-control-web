import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {i18nReducer, loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import reducers from './reducers'; // Or wherever you keep your reducers
import Pricing from './pages/pricing';
import Confirmation from './pages/confirmation';
import translations from './i18n/translations';
import './assets/sass/main.scss';
import Favicon from './favicon.ico'; // To ensure webpack loads the favicon

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    i18n: i18nReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware, thunk)
);

// Setting up the i18n settings
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale('en'));

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Helmet>
          <title>Brew Control Web</title>
          <meta name="description" content="Brew Control Web"/>
          <link rel="icon"
                type="image/png"
                href={Favicon}/>
        </Helmet>
        <Route exact path='/' component={Pricing}/>
        <Route path='/confirmation/:plan/:priceModel' component={Confirmation}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
