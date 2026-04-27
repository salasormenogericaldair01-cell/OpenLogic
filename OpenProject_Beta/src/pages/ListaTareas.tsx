import { useState, useEffect } from 'react'

interface Tarea {
  id: number
  texto: string
  completada: boolean
}

export default function ListaTareas() {
  const [tareas, setTareas] = useState<Tarea[]>(() => {
    const guardadas = localStorage.getItem('tareas')
    return guardadas ? JSON.parse(guardadas) : []
  })
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const agregar = () => {
    if (input.trim() === '') return
    setTareas([...tareas, { id: Date.now(), texto: input, completada: false }])
    setInput('')
  }

  const toggleCompletar = (id: number) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t))
  }

  const eliminar = (id: number) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>📝 Lista de Tareas</h1>
        <p>Visualización y gestión de ítems pendientes</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '2rem' }}>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Nueva tarea..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && agregar()}
            style={{
              padding: '0.8rem 1rem', fontSize: '1rem',
              borderRadius: '12px', border: '2px solid var(--accent)',
              width: '300px'
            }}
          />
          <button onClick={agregar} style={{
            padding: '0.8rem 1.5rem', fontSize: '1rem',
            borderRadius: '12px', border: 'none',
            background: 'var(--accent)', color: 'white',
            cursor: 'pointer', fontWeight: '700'
          }}>+ Agregar</button>
        </div>

        <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {tareas.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No hay tareas todavía</p>
          )}
          {tareas.map(tarea => (
            <div key={tarea.id} style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              background: 'var(--card-bg)', borderRadius: '12px',
              padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => toggleCompletar(tarea.id)}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <span style={{
                flex: 1, fontSize: '1rem',
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? 'var(--text-secondary)' : 'inherit'
              }}>
                {tarea.texto}
              </span>
              <button onClick={() => eliminar(tarea.id)} style={{
                padding: '0.4rem 0.8rem', fontSize: '0.9rem',
                borderRadius: '8px', border: 'none',
                background: '#ef4444', color: 'white',
                cursor: 'pointer'
              }}>🗑️</button>
            </div>
          ))}
        </div>

        <a href="/" style={{
          marginTop: '1rem', color: 'var(--accent)',
          textDecoration: 'none', fontWeight: '600'
        }}>← Volver al Dashboard</a>
      </div>
    </div>
  )
}