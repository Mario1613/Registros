
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Layout from "../View/Layout";
import Main from "../View/LoginGlobal/Main";
import Lista from "../View/ListRegisterGlobal/Main";

export default function RouteMain() {
    return (

        <Router>
            <Layout>
                <Routes>
                    <Route path="/registro" element={<Outlet />}>
                        <Route index element={<Main />} ></Route>
                    </Route>
                    <Route path="/registro/:id" element={<Main />} ></Route>
                    <Route
                        path="/registrados"
                        element={<Lista />}
                    ></Route>

                </Routes>
            </Layout>
        </Router >

    );
}
