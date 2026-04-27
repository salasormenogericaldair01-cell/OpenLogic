import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Contador from './pages/Contador.tsx'
import Operaciones from './pages/Operaciones_basicas.tsx'
import ListaTareas from './pages/ListaTareas.tsx'
import VerificadorEdad from './pages/VerificadorEdad.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/operaciones" element={<Operaciones />} />
        <Route path="/tareas" element={<ListaTareas />} />
        <Route path="/edad" element={<VerificadorEdad />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)