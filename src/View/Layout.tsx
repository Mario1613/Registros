import React from 'react'
import NavbarComponent from '../Component/NavbarComponent'
import AsideBarComponent from '../Component/AsideBarComponent'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setClickSidebar } from '../store/slices/context';

const Layout = (props: any) => {
    const sidebar_click = useSelector((state: RootState) => state.context.sidebar)
    const dispatch = useDispatch()

    /**
     * Hace que el sidebar derecho aparesca y desaparesca
     */
    const pushClick = () => dispatch(setClickSidebar(!sidebar_click))

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
            <AsideBarComponent sidebar_click={sidebar_click} title={"Grupo Standex"} routeButtons={routeButtons} />
            <NavbarComponent sidebar_click={sidebar_click} pushClick={pushClick} />
            {props.children}
        </>

    )
}

export default Layout