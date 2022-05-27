import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Displayuser() {

 const {isAuth,token} = useContext(AuthContext)
    console.log(token)
  return (
    <div>
       <p> {isAuth?"User Is Logged In":"Please Login"}</p>
      <p> {token!=""?`token : ${token}`:"Please Login"}</p> 
    </div>
  )
}

export default Displayuser