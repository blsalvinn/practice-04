import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthSlice } from '../../redux/hooks'

const ProtectedRouter = ({Element}) => {

  return Element
}

export default ProtectedRouter