import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminSidebar() {
    const { logout } = useAuth({ middleware: "auth" });
    return (
        <aside className="md:w-72 h-screen">
            <div className="p-4 flex justify-center items-center">
                <img
                    className="w-40 mx-auto"
                    src="/img/logo.svg"
                    alt="Imagen logo"
                />
            </div>

            <nav className="flex flex-col p-4">
                <Link to="/admin" className="font-bold text-lg">
                    Ordenes
                </Link>
                <Link to="/admin/productos" className="font-bold text-lg">
                    Producto
                </Link>
            </nav>

            <div className="my-5 py-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={logout}
                >
                    Cerrar sesión
                </button>
            </div>
        </aside>
    );
}
