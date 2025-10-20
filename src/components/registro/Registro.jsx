import { Link } from 'react-router-dom';
// Reutilizamos los estilos de Login para mantener consistencia
import '../login/Login.css';
import './Registro.css';

function Registro() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Crear Cuenta</h2>
        <p className="auth-subtitle">Completa tus datos para registrarte</p>
        <form className="auth-form">
          <input type="text" placeholder="Nombre Completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <input type="tel" placeholder="Número de cuenta (celular)" required />
          <select required>
            <option value="" disabled selected>Tipo de cuenta</option>
            <option value="ahorros">Ahorros</option>
            <option value="corriente">Corriente</option>
          </select>
          <input type="number" placeholder="Saldo Inicial" required />
          <button type="submit" className="auth-button">Registrarse</button>
        </form>
        <p className="auth-link">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;