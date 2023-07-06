import React from "react"
import Logo from "../assets/logo-blanco.png"



const NavbarComponent = ({ tamanio }: any) => {
    return (
        <nav className="navbar navbar-light bg-success fixed-top " style={{ marginLeft: tamanio, maxWidth: '100%' }}>
            <div className="container-fluid justify-content-center">
                <a href="/"><img src={Logo} width="90%" alt="" /></a>

            </div>
        </nav>
    )

}
export default NavbarComponent