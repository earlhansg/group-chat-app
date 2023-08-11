import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import UserList from './UserList'

const Users = () => {
  return (
    <Box sx={{height:"100vh"}}>
      <Header/>
      <UserList/>
    </Box>
  )
}

export default Users
