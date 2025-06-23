import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import myStore from './redux/store.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/next.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <I18nextProvider i18n={i18n}>
    <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>,
)
