import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import MyGlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyGlobalStyles />
    <Home />
  </StrictMode>,
)
