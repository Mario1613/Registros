import React from "react"
import Logo from "../assets/logo-blanco.png"
import { Link } from "react-router-dom"

interface Props {
    tamanio: string
}

const NavbarComponent = ({ tamanio }: Props) => {
    return (
        <nav className="navbar navbar-light bg-success fixed-top " style={{ marginLeft: tamanio, maxWidth: '100%' }}>
            <div className="container-fluid justify-content-center">
                <Link to='/'><img src={Logo} width="90%" alt="Logo Standex" /></Link>
            </div>
        </nav>
    )

}
export default NavbarComponent