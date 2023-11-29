import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import { Error404 } from './pages/Error404'

export const Router = () => {
  return (
    <BrowserRouter>
        <header>
            <nav>
                <h2>Logo</h2>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </main>

    </BrowserRouter>
  )
}
