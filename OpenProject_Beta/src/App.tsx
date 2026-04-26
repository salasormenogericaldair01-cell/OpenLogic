import './index.css';

export default function App() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>OpenLogic Dashboard</h1>
        <p>Selecciona un módulo para acceder a la herramienta</p>
      </header>
      <div className="grid">
        <a href="/contador" className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <h2>🔢 Contador</h2>
          <div className="card-content">
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '3rem' }}>
              Lógica de incremento y decremento numérico.
            </p>
            <div style={{
              marginTop: '0.5rem',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '12px',
              padding: '0.8rem',
              fontWeight: '600',
              textAlign: 'center',
            }}>
              Ir al módulo ➔
            </div>
          </div>
        </a>

        <a href="/operaciones" className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <h2>🧮 Operaciones Básicas</h2>
          <div className="card-content">
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '3rem' }}>
              Interfaz para sumar, restar, multiplicar y dividir.
            </p>
            <div style={{
              marginTop: '0.5rem',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '12px',
              padding: '0.8rem',
              fontWeight: '600',
              textAlign: 'center',
            }}>
              Ir al módulo ➔
            </div>
          </div>
        </a>

        <a href="/tareas" className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <h2>📝 Lista de Tareas</h2>
          <div className="card-content">
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '3rem' }}>
              Visualización y gestión de ítems pendientes.
            </p>
            <div style={{
              marginTop: '0.5rem',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '12px',
              padding: '0.8rem',
              fontWeight: '600',
              textAlign: 'center',
            }}>
              Ir al módulo ➔
            </div>
          </div>
        </a>

        <a href="/edad" className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <h2>👤 Verificador de Edad</h2>
          <div className="card-content">
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '3rem' }}>
              Validación interactiva para verificar la mayoría de edad.
            </p>
            <div style={{
              marginTop: '0.5rem',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '12px',
              padding: '0.8rem',
              fontWeight: '600',
              textAlign: 'center',
            }}>
              Ir al módulo ➔
            </div>
          </div>
        </a>

        <a href="/primos" className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <h2>🔍 Analizador de Primos</h2>
          <div className="card-content">
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '3rem' }}>
              Herramienta matemática para detectar números primos.
            </p>
            <div style={{
              marginTop: '0.5rem',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '12px',
              padding: '0.8rem',
              fontWeight: '600',
              textAlign: 'center',
            }}>
              Ir al módulo ➔
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
