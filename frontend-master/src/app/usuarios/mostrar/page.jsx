import BorrarUsuario from "@/components/borrar";
import axios from "axios";
import Link from "next/link";

async function getUsuarios() {
    const url = "http://localhost:3000/usuarios";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuarios() {
    const usuarios = await getUsuarios();
    return (
        <>
            <h1 style={pageTitleStyle}>Usuarios</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={tabEncabezado}>Id</th>
                        <th style={tabEncabezado}>Nombre</th>
                        <th style={tabEncabezado}>Usuario</th>
                        <th style={tabEncabezado}>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i) => (
                        <tr key={i} style={i % 2 === 0 ? rowEvenStyle : rowOddStyle}>
                            <td style={tabstyle2}>{i + 1}</td>
                            <td style={tabstyle2}>{usuario.nombre}</td>
                            <td style={tabstyle2}>{usuario.usuario}</td>
                            <td style={tabstyle2}>
                                <BorrarUsuario id={usuario.id} />
                                <> / </>
                                <Link href={`/usuarios/modificar/${encodeURIComponent(JSON.stringify({ id: usuario.id, nombre: usuario.nombre, usuario: usuario.usuario }))}`}>
                                    Modificar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={buttonContainerStyle}>
                <Link href="/usuarios/nuevo" style={buttonStyle}>Nuevo</Link>
            </div>
        </>
    );
}

// Estilos actualizados
const pageTitleStyle = {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
};

const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    overflow: 'hidden',
};

const tabEncabezado = {
    padding: '12px',
    border: '2px solid #e0e0e0',
    textAlign: 'left',
    fontWeight: 'bold',
    backgroundColor: '#007bff', // Azul para encabezados
    color: '#fff',
};

const tabstyle2 = {
    padding: '12px',
    border: '1px solid #e0e0e0',
    fontSize: '14px',
};

const rowEvenStyle = {
    backgroundColor: '#f9f9f9',
};

const rowOddStyle = {
    backgroundColor: '#ffffff',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
};

const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#28a745', // Verde
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
};
