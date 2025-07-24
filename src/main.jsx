import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import General from './components/general'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General name="Hammad" email="muhammadhammadpak10@gmail.com" phone="0348-1135520" />
  </StrictMode>,
)
