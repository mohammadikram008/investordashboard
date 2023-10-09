import React, { Fragment } from 'react'
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
const Index = () => {
    const Navigate=useNavigate();
  return (
  <Fragment>
<div>
    <Button  className='btn-login' onClick={()=>Navigate('/login')}>Login</Button>
    <Button className='btn-login mx-5' onClick={()=>Navigate('/register')}>Register</Button>
    <Button className='btn-login ' onClick={()=>Navigate('/VerificationPage')}>Verification</Button>
    <Button className='btn-login mx-5' onClick={()=>Navigate('/PasswordChange')}>PasswordChange</Button>
</div>
  </Fragment>
  )
}

export default Index