import { Link } from 'react-router-dom';
import '../dashboard/Dashboard.css';
import './Reportes.css';

function Reportes() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Reportes Financieros</h1>
        <Link to="/" className="back-link">← Volver</Link>
      </header>
      
      <div className="report-grid">
        <div className="card report-card">
          <h4>Ingresos Totales</h4>
          <p className="report-value income">$15,000.00</p>
        </div>
        <div className="card report-card">
          <h4>Egresos Totales</h4>
          <p className="report-value expense">$13,750.00</p>
        </div>
        <div className="card report-card">
          <h4>Deuda Pendiente</h4>
          <p className="report-value debt">$2,500.00</p>
        </div>
      </div>
    </div>
  );
}

export default Reportes;