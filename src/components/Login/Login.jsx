import {Link} from "react-router";
import { useNavigate } from "react-router";
import "./Login.css";
import { useState } from "react";


function Login({valor}) {

    const navigate = useNavigate();

    const [campo, setCampo] = useState("");

    const validateUser = () => {
        alert("Hola, tu nombre es: " + campo);

        // campo != "alejo" ? alert("Usuario Incorrecto") : navigate("/dashboard");

        if(campo != "juan"){
            alert("Usuario Incorrecto");
        }
        else{
            navigate("/dashboard", {state:{nombreUsuario: {campo} }});
        }

    }

    return(
        <div id="contenedorLogin">
            <h1>Bienvenido Al Banco</h1>
            <input type="text" value={campo} onChange={(e) => setCampo(e.target.value)} className="inputLogin" placeholder="Usuario"/>
            <input type="text" className="inputLogin" placeholder="Contaseña"/>

            <button id ="buttonStyles" onClick={validateUser}>Iniciar Sesion</button>
        </div>
    );
}

export default Login;