import React, { useContext } from 'react'
import styled from 'styled-components'
import {AuthContext} from '../context/AuthContext'

const Nav = styled.div`
    
    width:100%;
    color:white;

     button{
        background-color:teal;
        font-weight:500;
        width:150px;
        height:40px;
        color:white;
        margin:auto;
    }
`

function Navbar() {
const {isAuth,toggleAuth} = useContext(AuthContext)
 console.log({isAuth,toggleAuth})

  return (
    <>
        <Nav>
            <button className="navBtn" onClick={toggleAuth}>
                {isAuth?"Logout":"Login"}
            </button>
        </Nav>
    </>
  )
}

export default Navbar