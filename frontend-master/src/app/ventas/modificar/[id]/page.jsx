"use client";
export default function Modificar({ params }) {
    const venta = JSON.parse(decodeURIComponent(params.id));

    const modificarVenta = async (e) => {
        e.preventDefault();

        const data = {
            id: venta.id,
            cantidad: document.getElementById("cantidad").value,
            producto: document.getElementById("producto").value,
            usuario: document.getElementById("usuario").value
        };

        const url = "http://localhost:3000/ventas/modificarVenta";

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/ventas/mostrar");
    };

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={modificarVenta}>
                <div className="card" style={cardStyle}>
                    <div className="card-header" style={headerStyle}>
                        <h1 style={{ color: '#fff' }}>Modificar Venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="id" defaultValue={venta.id} type="text" style={inputStyle} className="d-none" />
                        <input id="cantidad" defaultValue={venta.cantidad} type="text" style={inputStyle} placeholder="Cantidad" />
                        <input id="producto" defaultValue={venta.producto} type="text" style={inputStyle} placeholder="Producto" />
                        <input id="usuario" defaultValue={venta.usuario} type="text" style={inputStyle} placeholder="Usuario" />

                    </div>
                    <div className="card-footer">
                        <button type="submit" style={buttonStyle}>Guardar cambios</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Estilos
const cardStyle = {
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    backgroundColor: '#f9f9f9',
};

const headerStyle = {
    backgroundColor: '#007bff', // Azul claro
    padding: '15px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '10px 10px 0 0',
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #d1d1d1',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745', // Verde
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
};

// Para el botón, agrega un efecto hover:
const buttonHoverStyle = {
    backgroundColor: '#218838', // Verde oscuro para hover
};

