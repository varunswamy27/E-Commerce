import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from './Loader';


const IsAuthorized = ({ pathLocation }) => {


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        if (!user && window.location.href.indexOf('auth') === -1) {
            navigate('/auth');
        }
        if (user && pathLocation === '/auth') {
            navigate('/');
        }
    }, [pathLocation]);

    useEffect(() => {
        if (user?.data?.isAdmin === false && pathLocation === '/admin') {
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