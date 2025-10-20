import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Bienvenido, Estebanquito</h1>
        <Link to="/login" className="logout-button">Cerrar Sesión</Link>
      </header>

      <div className="card balance-card">
        <h3>Saldo Actual</h3>
        <p className="balance-amount">$1,250.00</p>
        <div className="account-details">
          <span>Cuenta: •••• 7890</span>
          <span>Tipo: Ahorros</span>
        </div>
      </div>
      
      <nav className="dashboard-nav">
        <Link to="/transacciones" className="nav-item">Realizar Transacción</Link>
        <Link to="/prestamos" className="nav-item">Solicitar Préstamo</Link>
        <Link to="/reportes" className="nav-item">Ver Reportes</Link>
      </nav>

      <div className="card">
        <h3>Transacciones Recientes</h3>
        <ul className="transaction-list">
          <li className="transaction-item income">
            <span>Depósito de Nómina</span>
            <span>+$800.00</span>
          </li>
          <li className="transaction-item expense">
            <span>Transferencia a Juan Pérez</span>
            <span>-$50.00</span>
          </li>
          <li className="transaction-item expense">
            <span>Retiro en cajero</span>
            <span>-$20.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;