import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App/App'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools);

const application = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
