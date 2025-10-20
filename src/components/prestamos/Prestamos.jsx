import { Link } from 'react-router-dom';
import '../dashboard/Dashboard.css'; // Reutilizamos
import '../transacciones/Transacciones.css'; // Reutilizamos

function Prestamos() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Préstamos</h1>
        <Link to="/" className="back-link">← Volver</Link>
      </header>

      <div className="card">
        <h3>Solicitar Nuevo Préstamo</h3>
        <form className="transaction-form">
          <input type="number" placeholder="Monto deseado" />
          <input type="number" placeholder="Plazo (en meses)" />
          <button type="submit" className="action-button">Enviar Solicitud</button>
        </form>
      </div>

      <div className="card">
        <h3>Mis Préstamos</h3>
        <p><strong>Deuda Total Pendiente:</strong> $2,500.00</p>
        <p><em>Préstamo #1234 - Aprobado</em></p>
      </div>
    </div>
  );
}

export default Prestamos;