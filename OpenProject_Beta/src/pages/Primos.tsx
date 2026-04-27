import { useState } from 'react'

export default function Primos() {
  const [num, setNum] = useState('')
  const [resultado, setResultado] = useState<string | null>(null)

  const analizarPrimo = () => {
    const n = parseInt(num)
    if (isNaN(n)) {
      setResultado('⚠️ Ingresa un número válido')
      return
    }
    if (n <= 1) {
      setResultado(`❌ ${n} no es un número primo`)
      return
    }
    if (n <= 3) {
      setResultado(`✅ ${n} es un número primo`)
      return
    }
    if (n % 2 === 0 || n % 3 === 0) {
      setResultado(`❌ ${n} no es un número primo`)
      return
    }
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        setResultado(`❌ ${n} no es un número primo`)
        return
      }
    }
    setResultado(`✅ ${n} es un número primo`)
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>🔍 Analizador de Primos</h1>
        <p>Herramienta matemática para detectar números primos</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '3rem' }}>
        
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="number"
            placeholder="Ingresa un número"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            style={{
              padding: '0.8rem 1rem', fontSize: '1.2rem',
              borderRadius: '12px', border: '2px solid var(--accent)',
              width: '250px', textAlign: 'center'
            }}
          />
          <button onClick={analizarPrimo} style={{
            fontSize: '1.2rem', padding: '0.8rem 2rem',
            borderRadius: '12px', border: 'none',
            background: 'var(--accent)', color: 'white',
            cursor: 'pointer', fontWeight: '700',
            width: '100%'
          }}>
            Analizar
          </button>
        </div>

        {resultado !== null && (
          <div style={{
            fontSize: '1.5rem', fontWeight: '700',
            color: 'var(--accent)', background: 'var(--bg-card)',
            borderRadius: '24px', padding: '1.5rem 3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            textAlign: 'center'
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
