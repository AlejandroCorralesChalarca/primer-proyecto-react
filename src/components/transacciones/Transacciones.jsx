import { Link } from 'react-router-dom';
import '../dashboard/Dashboard.css'; // Reutilizamos estilos
import './Transacciones.css';

function Transacciones() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Transacciones</h1>
        <Link to="/" className="back-link">← Volver</Link>
      </header>
      
      <div className="card">
        <h3>Realizar Operación</h3>
        <form className="transaction-form">
          <select>
            <option value="transferencia">Transferencia</option>
            <option value="deposito">Depósito</option>
            <option value="retiro">Retiro</option>
          </select>
          <input type="text" placeholder="Cuenta Destino (si es transferencia)" />
          <input type="number" placeholder="Monto" />
          <button type="submit" className="action-button">Confirmar Operación</button>
        </form>
      </div>
    </div>
  );
}

export default Transacciones;