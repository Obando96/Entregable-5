import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedHome = () => {
    const nameTrainer = useSelector((store) => store.nameTrainer);
    if(nameTrainer){
        return <Navigate to="/pokedex" />
    }else{
        return <Outlet/>
    }

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default ProtectedHome