import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import storee from './ReduxToolkit.jsx/storee.jsx'
createRoot(document.getElementById('root')).render(
 <Provider store = {storee}>
          <App />
 </Provider>
     
 
)
