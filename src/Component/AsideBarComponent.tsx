import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type RouteButton = {
    id: string;
    title: string;
    route: string;
};

interface Props {
    routeButtons: RouteButton[];
    title: string;
    sidebarClick: boolean;
}

/**
 * @param sidebarClick activa el sidebar con un boolean
 * @param title son los titulos del sidebar
 * @param routeButtons son los botones laterales en forma de arreglo de objetos 
 * @returns 
 */
const AsideBarComponent = ({ sidebarClick, title, routeButtons }: Props) => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div
            className={`d-none d-block d-sm-flex flex-column flex-shrink-0 ${sidebarClick && 'p-3'} bg-light h-100 position-fixed elevation-4`}
            style={{
                marginLeft: `${sidebarClick ? '0%' : '-15%'}`,
                width: '15%',
                transition: 'margin .3s',
                zIndex: '100'
            }}
        >
            {sidebarClick && (
                <>
                    <Link to="/registro" className="d-flex align-items-center mb-3 mb-md-0 link-dark text-decoration-none mt-4">
                        <span className="fs-2 d-flex text-center text-success fw-bold">{title}</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mt-5">
                        {routeButtons.map((route: RouteButton) => (
                            <li key={route.id} className="nav-item fs-5 fw-semibold mb-3" >
                                <Link
                                    to={route.route}
                                    className={`nav-link ${currentPath.startsWith(route.route) && 'active'} text-center`}
                                    aria-current="page"
                                >
                                    {route.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default AsideBarComponent;

