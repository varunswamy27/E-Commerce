import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from './Loader';


const IsAuthorized = ({ pathLocation }) => {


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const Admin = "6447adc7f24f8b311abee1c2";


    useEffect(() => {
        if (!user && window.location.href.indexOf('auth') === -1) {
            navigate('/auth');
        }
        if (user && pathLocation === '/auth') {
            navigate('/');
        }
        if (user?.data?.userRole === undefined && pathLocation === '/admin') {
            navigate('/');
        }
    }, [pathLocation]);



    return (
        <>
            {loading && <Loader />}
        </>
    )
}

export default IsAuthorized