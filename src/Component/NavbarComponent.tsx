import Logo from "../assets/logo-blanco.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


interface Props {
    pushClick: () => void;
    sidebar_click: any
}

const NavbarComponent = ({ pushClick, sidebar_click }: Props) => {


    return (
        <nav
            className={`navbar-wrapper ${sidebar_click ? "sidebar-click" : ""}`}
            style={{ zIndex: 100 }}
        >
            <Button
                className="position-absolute d-none d-sm-flex"
                style={{ left: 0 }}
                onClick={() => pushClick()}
            >
                X
            </Button>
            <div className="container-fluid navbar-container">
                <Link to="/registro">
                    <img src={Logo} alt="Logo Standex" />
                </Link>
            </div>

            <style >{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #198754;
          transition: margin-left 0.3s ease;
          margin-left: 0;
        }

        .sidebar-click {
          margin-left: 15%;
        }

        .navbar-container {
          display: flex;
          justify-content: center;
        }

        img {
          width: 90%;
        }
      `}</style>
        </nav>
    );
};

export default NavbarComponent;

