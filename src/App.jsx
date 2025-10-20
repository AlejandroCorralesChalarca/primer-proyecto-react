import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Registro from './components/registro/Registro';
import Dashboard from './components/dashboard/Dashboard';
import Transacciones from './components/transacciones/Transacciones';
import Prestamos from './components/prestamos/Prestamos';
import Reportes from './components/reportes/Reportes';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/transacciones" element={<Transacciones />} />
      <Route path="/prestamos" element={<Prestamos />} />
      <Route path="/reportes" element={<Reportes />} />
    </Routes>
  );
}

export default App;