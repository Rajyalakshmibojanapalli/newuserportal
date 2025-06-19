import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppWrapper from './App.jsx'
import { store } from './components/Dashboard/storeJs/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <AppWrapper />
    </Provider>
  </StrictMode>,
)
