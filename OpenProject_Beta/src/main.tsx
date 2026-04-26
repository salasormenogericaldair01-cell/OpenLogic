import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Contador from './pages/Contador.tsx'
import Operaciones from './pages/Operaciones_basicas.tsx' // ← agregar

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/operaciones" element={<Operaciones />} /> {/* ← agregar */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)