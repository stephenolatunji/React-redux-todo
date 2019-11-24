import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';
import App from './components/App';

const store = createStore(rootReducers);

ReactDOM.render(
<Provider store={store}>
        <App />
</Provider>,
document.getElementById('root'));

