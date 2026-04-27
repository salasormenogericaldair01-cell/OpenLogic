import { useState } from 'react'

export default function VerificadorEdad() {
  const [edad, setEdad] = useState('')
  const [resultado, setResultado] = useState<string | null>(null)

  const verificar = () => {
    const num = parseInt(edad)
    if (isNaN(num) || num < 0 || num > 120) {
      setResultado('⚠️ Ingresa una edad válida')
      return
    }
    if (num >= 18) {
      setResultado('✅ Es mayor de edad')
    } else {
      setResultado('❌ Es menor de edad')
    }
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>👤 Verificador de Edad</h1>
        <p>Validación interactiva para verificar la mayoría de edad</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '3rem' }}>

        <input
          type="number"
          placeholder="Ingresa tu edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && verificar()}
          style={{
            padding: '0.8rem 1rem', fontSize: '1.5rem',
            borderRadius: '12px', border: '2px solid var(--accent)',
            width: '200px', textAlign: 'center'
          }}
        />

        <button onClick={verificar} style={{
          padding: '0.8rem 2rem', fontSize: '1.1rem',
          borderRadius: '12px', border: 'none',
          background: 'var(--accent)', color: 'white',
          cursor: 'pointer', fontWeight: '700'
        }}>Verificar</button>

        {resultado && (
          <div style={{
            fontSize: '2rem', fontWeight: '700',
            background: 'var(--card-bg)', borderRadius: '24px',
            padding: '1.5rem 3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            color: resultado.includes('✅') ? '#22c55e' : resultado.includes('❌') ? '#ef4444' : '#f59e0b'
          }}>
            {resultado}
          </div>
        )}

        <a href="/" style={{
          marginTop: '1rem', color: 'var(--accent)',
          textDecoration: 'none', fontWeight: '600'
        }}>← Volver al Dashboard</a>
      </div>
    </div>
  )
}