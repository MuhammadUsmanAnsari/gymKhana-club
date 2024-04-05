import React from 'react'
import { useAuthContext } from 'context/AuthContext'
import { Navigate } from 'react-router-dom'
import Login from 'pages/Auth/Login'
import Navbar from 'components/Header/Navbar'

export default function PrivateRoute({ Component }) {
    const { isAuthenticated } = useAuthContext()

    if (isAuthenticated) {
        return <Component />
    }
    return (
        <>
            <Navbar />
            <Login />
        </>
    )
}
