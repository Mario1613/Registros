import React from 'react'
import NavbarComponent from '../Component/NavbarComponent'
import AsideBarComponent from '../Component/AsideBarComponent'
import { RootState } from '../store'
import { useSelector } from 'react-redux'

const Layout = (props: any) => {
    const tamanio = useSelector((state: RootState) => state.context.sidebar.tamanio)

    let routeButtons = [
        {
            id: '0',
            route: '/',
            title: 'Registro',
        },
        {
            id: '1',
            route: "/lista",
            title: "Registrados"
        }
    ]
    return (
        <>
            <AsideBarComponent tamanio={tamanio} title={"Grupo Standex"} routeButtons={routeButtons} />
            <NavbarComponent tamanio={tamanio} />
            {props.children}
        </>

    )
}

export default Layout