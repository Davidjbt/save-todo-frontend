import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RootLayout from "./layouts/RootLayout.jsx";
import SignUp from "./pages/SignUp.jsx";

const App = () => {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<div>Home temp</div>} />
                <Route path="sign-up" element={<SignUp />}/>
                <Route path="login" element={<div>Login</div>}/>
            </Route>
        )
    )

    return (
        <RouterProvider router={routes} />
    );
};

export default App;