import { Botton } from '@mui/material'
import React from 'react'

function SignIn() {
  function signInWithGoogle() {

  }
  
  return (
    <div>
      <Botton onClick={signInWithGoogle}>グーグルでログインする</Botton>
    </div>
  )
}

export default SignIn