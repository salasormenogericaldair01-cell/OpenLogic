import { useState } from 'react'

export default function Operaciones() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState<number | string>('')

  const calcular = (operacion: string) => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    if (isNaN(a) || isNaN(b)) {
      setResultado('⚠️ Ingresa números válidos')
      return
    }
    switch (operacion) {
      case '+': setResultado(a + b); break
      case '-': setResultado(a - b); break
      case '*': setResultado(a * b); break
      case '/': setResultado(b === 0 ? '⚠️ No se puede dividir entre 0' : a / b); break
    }
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>🧮 Operaciones Básicas</h1>
        <p>Suma, resta, multiplicación y división</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '3rem' }}>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="number"
            placeholder="Número 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{
              padding: '0.8rem 1rem', fontSize: '1.2rem',
              borderRadius: '12px', border: '2px solid var(--accent)',
              width: '150px', textAlign: 'center'
            }}
          />
          <input
            type="number"
            placeholder="Número 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{
              padding: '0.8rem 1rem', fontSize: '1.2rem',
              borderRadius: '12px', border: '2px solid var(--accent)',
              width: '150px', textAlign: 'center'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {['+', '-', '*', '/'].map((op) => (
            <button key={op} onClick={() => calcular(op)} style={{
              fontSize: '1.5rem', padding: '0.8rem 1.5rem',
              borderRadius: '12px', border: 'none',
              background: 'var(--accent)', color: 'white',
              cursor: 'pointer', fontWeight: '700'
            }}>{op}</button>
          ))}
        </div>

        {resultado !== '' && (
          <div style={{
            fontSize: '3rem', fontWeight: '700',
            color: 'var(--accent)', background: 'var(--bg-card)',
            borderRadius: '24px', padding: '1.5rem 3rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
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