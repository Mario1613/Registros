import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

type RouteButton = {
    id: string;
    title: string;
    route: string;
};

interface Props {
    routeButtons: RouteButton[];
    title: string;
    tamanio: string;
}
/**
 * 
 * @param tamanio es el ancho del sidebar.
 * @param title es el titulo principal
 * @param routeButtons es el arrray de objetos con propiedades de tipo id,title y route
 * @returns retorna unicamente el tsx
 */
const AsideBarComponent = ({ tamanio, title, routeButtons }: Props) => {
    const [active, setActive] = useState('0');

    /**
     * @param id sirve para ver que boton es el que se le aplicara la clase active
     */
    const handleItemClick = (id: string) => {
        setActive(id);
    };

    return (
        <div className="d-none d-block d-sm-flex flex-column flex-shrink-0 p-3 bg-light h-100 position-absolute elevation-4" style={{ width: tamanio }}>
            <Button className="position-absolute d-flex">X</Button>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 link-dark text-decoration-none mt-4">
                <span className="fs-2 d-flex text-center text-success fw-bold">{title}</span>
            </Link>
            <ul className="nav nav-pills flex-column mt-5 ">
                {routeButtons.map((route: RouteButton) => (
                    <li key={route.id} className="nav-item fs-5 fw-semibold mb-3" onClick={() => handleItemClick(route.id)}>
                        <Link to={route.route} className={`nav-link ${active === route.id && 'active'} text-center`} aria-current="page">
                            {route.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AsideBarComponent;
