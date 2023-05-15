import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ Component }) => {

    const navigate = useNavigate();

    useEffect(() => {
        let Login = JSON.parse(localStorage.getItem('profile'));
        if (!Login) {
            navigate('/auth')
        }
        if (Login?.data?.userRole === undefined) {
            navigate('/');
        }
    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected