import React from 'react'
import NavbarComponent from '../Component/NavbarComponent'
import AsideBarComponent from '../Component/AsideBarComponent'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setClickSidebar } from '../store/slices/context';

const Layout = (props: any) => {
    const sidebarClick = useSelector((state: RootState) => state.context.sidebar)
    const dispatch = useDispatch()

    /**
     * Hace que el sidebar derecho aparesca y desaparesca
     */
    const pushClick = () => dispatch(setClickSidebar(!sidebarClick))

    /**
     * Arreglo de objetos que depende el largo agrega botones de lado lateral en el sidebar
     */
    let routeButtons = [
        {
            id: '0',
            route: '/registro',
            title: 'Registro',
        },
        {
            id: '1',
            route: "/registrados",
            title: "Registrados"
        }
    ]
    return (
        <>
            <AsideBarComponent sidebarClick={sidebarClick} title={"Grupo Standex"} routeButtons={routeButtons} />
            <NavbarComponent sidebarClick={sidebarClick} pushClick={pushClick} />
            {props.children}
        </>

    )
}

export default Layout