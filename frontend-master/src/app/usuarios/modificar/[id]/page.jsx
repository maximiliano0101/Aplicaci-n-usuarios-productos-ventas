"use client";
export default function Modificar({ params }) {
    const usuario = JSON.parse(decodeURIComponent(params.id));

    const modificarUsuario = async (e) => {
        e.preventDefault();

        const data = {
            id: usuario.id,
            nombre: document.getElementById("nombre").value,
            usuario: document.getElementById("usuario").value,
            password: document.getElementById("password").value,
        };

        const url = "http://localhost:3000/usuarios/modificarUsuario";

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/usuarios/mostrar");
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={modificarUsuario}>
                <div style={cardHeaderStyle}>
                    <h1 style={{ margin: 0, textAlign: 'center', color: '#fff' }}>Modificar Usuario</h1>
                </div>
                <div style={cardBodyStyle}>
                    <input id="id" defaultValue={usuario.id} type="text" style={hiddenInputStyle} />
                    <input id="nombre" defaultValue={usuario.nombre} type="text" placeholder="Nombre" style={inputStyle} />
                    <input id="usuario" defaultValue={usuario.usuario} type="text" placeholder="Usuario" style={inputStyle} />
                    <input id="password" required placeholder="Nuevo password" type="text" style={inputStyle} />
                </div>
                <div style={cardFooterStyle}>
                    <button type="submit" style={buttonStyle}>Guardar cambios</button>
                </div>
            </form>
        </div>
    );
}

// Estilos ajustados
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
};

const formStyle = {
    width: '40%',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
};

const cardHeaderStyle = {
    backgroundColor: '#007bff', // Azul
    padding: '20px',
    textAlign: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
};

const cardBodyStyle = {
    padding: '20px',
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '14px',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
};

const hiddenInputStyle = {
    display: 'none',
};

const cardFooterStyle = {
    padding: '20px',
    textAlign: 'center',
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745', // Verde para el botón
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
};
