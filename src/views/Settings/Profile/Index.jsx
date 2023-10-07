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
</div>
  </Fragment>
  )
}

export default Index