import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import IndexLayout from '../Layout/IndexLayout/IndexLayout'
import Index from './Index/Index'
import MainLayout from '../Layout/MainLayout/MainLayout'
import Services from './Services/Services'
import About from './About/About'
import Prices from './Prices/Prices'
import Contact from './Contact/Contact'
import Privacy from './Privacy/Privacy'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            { path: '/', element: <Index />}
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/services', element: <Services />},
            { path: '/about', element: <About />},
            { path: '/prices', element: <Prices />},
            { path: '/contact', element: <Contact />},
            { path: '/privacy', element: <Privacy />}
        ]
    }
])
