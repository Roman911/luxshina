import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import { App } from './router'
import { setupStore } from './store/store'

const store = setupStore();

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>
  </React.StrictMode>,
)
