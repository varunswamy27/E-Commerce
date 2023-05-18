import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ Component }) => {

    const [pathLocation, setPathLocation] = useState(window.location.pathname);
    const navigate = useNavigate();

    useEffect(() => {
        let Login = JSON.parse(localStorage.getItem('profile'));
        console.log(Login?.data?.userRole.role)
        if (!Login) {
            navigate('/auth')
        }
        if (pathLocation === '/admin' && Login?.data?.userRole?.role !== 'Admin') {
            navigate('/');
        }
        if (pathLocation === '/dashboard' && Login?.data?.userRole?.role !== 'SuperAdmin') {
            navigate('/')
        }
    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected