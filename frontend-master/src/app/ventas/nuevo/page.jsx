"use client";
import axios from "axios";
import { useState } from "react";

async function nuevaVenta(e) {
    e.preventDefault();
    const url = "http://localhost:3000/ventas/nuevaVenta";
    const datos = {
        cantidad: document.getElementById("cantidad").value,
        id_producto: document.getElementById("id_producto").value,
        id_usuario: document.getElementById("id_usuario").value
    };
    await axios.post(url, datos);
    location.replace("http://localhost:3001/ventas/mostrar");
}

export default function Nueva() {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: isHovered ? '#c82333' : '#28a745', // Rojo oscuro al pasar el ratón
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={nuevaVenta} style={formStyle}>
                <div style={cardStyle}>
                    <div style={cardHeaderStyle}>
                        <h1 style={{ margin: 0, color: '#fff' }}>Nueva Venta</h1>
                    </div>
                    <div style={cardBodyStyle}>
                        <input id="cantidad" required placeholder="Cantidad" autoFocus type="text" style={inputStyle} />
                        <input id="id_producto" required placeholder="ID Producto" type="text" style={inputStyle} />
                        <input id="id_usuario" required placeholder="ID Usuario" type="text" style={inputStyle} />
                    </div>
                    <div style={cardFooterStyle}>
                        <button
                            type="submit"
                            style={buttonStyle}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Guardar venta
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Estilos actualizados
const formStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
};

const cardHeaderStyle = {
    backgroundColor: '#007bff', // Azul
    padding: '15px',
    color: '#fff',
    fontSize: '18px',
    textAlign: 'center',
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

const cardFooterStyle = {
    padding: '20px',
    textAlign: 'center',
};

