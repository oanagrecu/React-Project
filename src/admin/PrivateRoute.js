import React, {useEffect } from "react";

import { Outlet, useNavigate } from 'react-router-dom';

function PrivateRoute() {
    const isAuthorized = Boolean(localStorage.getItem('userToken'));
    const navigate = useNavigate();

    if (!isAuthorized) {
        navigate('/login');
        return null;
    }

    return <Outlet />;
}

export default PrivateRoute;