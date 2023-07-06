
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../View/Layout";
import Main from "../View/LoginGlobal/Main";

export default function RouteMain() {
    return (

        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/operaciones" element={<></>} />
                    <Route
                        path="/operaciones/clientes/:id_cliente"
                        element={<></>}
                    />

                </Routes>
            </Layout>
        </Router >

    );
}
