import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from './Loader';


const IsAuthorized = ({ pathLocation }) => {


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isLogin, setIsLogin] = useState(false);
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



    return (
        <>
            {loading && <Loader />}
        </>
    )
}

export default IsAuthorized