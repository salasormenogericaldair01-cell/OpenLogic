import { useState } from 'react'

export default function Contador() {
  const [count, setCount] = useState(0)

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>🔢 Contador</h1>
        <p>Lógica de incremento y decremento numérico</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginTop: '3rem' }}>
        <div style={{
          fontSize: '5rem', fontWeight: '700',
          color: 'var(--accent)', background: 'var(--bg-card)',
          borderRadius: '24px', padding: '2rem 4rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          {count}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => setCount(count - 1)} style={{
            fontSize: '2rem', padding: '0.8rem 2rem',
            borderRadius: '12px', border: 'none',
            background: 'var(--danger)', color: 'white',
            cursor: 'pointer', fontWeight: '700'
          }}>−</button>

          <button onClick={() => setCount(0)} style={{
            fontSize: '1rem', padding: '0.8rem 1.5rem',
            borderRadius: '12px', border: 'none',
            background: '#6b7280', color: 'white',
            cursor: 'pointer', fontWeight: '600'
          }}>Reset</button>

          <button onClick={() => setCount(count + 1)} style={{
            fontSize: '2rem', padding: '0.8rem 2rem',
            borderRadius: '12px', border: 'none',
            background: 'var(--success)', color: 'white',
            cursor: 'pointer', fontWeight: '700'
          }}>+</button>
        </div>

        <a href="/" style={{
          marginTop: '1rem', color: 'var(--accent)',
          textDecoration: 'none', fontWeight: '600'
        }}>← Volver al Dashboard</a>
      </div>
    </div>
  )
}