import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Banca Estebanquito</h2>
        <p className="auth-subtitle">Inicia sesión para continuar</p>
        <form className="auth-form">
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit" className="auth-button">Iniciar Sesión</button>
        </form>
        <p className="auth-link">
          ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;