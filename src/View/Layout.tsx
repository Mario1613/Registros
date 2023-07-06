import React from 'react'
import NavbarComponent from '../Component/NavbarComponent'
import AsideBarComponent from '../Component/AsideBarComponent'
import { RootState } from '../store'
import { useSelector } from 'react-redux'

const Layout = (props: any) => {
    const tamanio = useSelector((state: RootState) => state.context.sidebar.tamanio)
    return (
        <>
            <AsideBarComponent />
            <NavbarComponent tamanio={tamanio} />
            {props.children}

        </>

    )
}

export default Layout