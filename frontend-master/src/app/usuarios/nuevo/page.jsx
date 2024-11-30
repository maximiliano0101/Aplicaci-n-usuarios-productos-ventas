"use client";
import axios from "axios";

async function nuevoUsuario(e) {
    e.preventDefault();
    const url = "http://localhost:3000/usuarios/nuevoUsuario";
    const datos = {
        nombre: document.getElementById("nombre").value,
        usuario: document.getElementById("usuario").value,
        password: document.getElementById("password").value,
    };

    await axios.post(url, datos);
    location.replace("http://localhost:3001/usuarios/mostrar");
}

export default function Nuevo() {
    return (
        <div style={containerStyle}>
            <form onSubmit={nuevoUsuario} style={formStyle}>
                <div style={cardStyle}>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>Nuevo Usuario</h1>
                    </div>
                    <div style={cardBodyStyle}>
                        <input id="nombre" placeholder="Nombre" autoFocus type="text" style={inputStyle} />
                        <input id="usuario" placeholder="Usuario" type="text" style={inputStyle} />
                        <input id="password" placeholder="Password" type="password" style={inputStyle} />
                    </div>
                    <div style={cardFooterStyle}>
                        <button type="submit" style={buttonStyle}>Guardar usuario</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Estilos actualizados
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f8ff', // Fondo azul claro
};

const formStyle = {
    width: '40%',
    marginTop: '5%',
};

const cardStyle = {
    backgroundColor: '#fff', // Fondo blanco
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
    backgroundColor: '#007bff', // Azul
    padding: '15px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    textAlign: 'center',
};

const titleStyle = {
    color: '#fff',
    fontSize: '24px',
    margin: 0,
};

const cardBodyStyle = {
    padding: '20px',
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
};

const cardFooterStyle = {
    padding: '15px',
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745', // verde
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
};

// Estilo de botón para el hover (opcional)
buttonStyle[":hover"] = {
    backgroundColor: '#0056b3', // Azul más oscuro para el hover
};
