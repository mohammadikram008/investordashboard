import React, { Fragment, useState } from 'react'
import { Row,Col } from 'reactstrap'
import './Financial.css'
import { Button } from '@mui/material'
import Summary from './Summary/Index'
import Transection from './Transection/Index'
import Report from './Report/Index'
const Index = () => {
    const [name,setName]=useState("");
    const handdleChange=(props)=>{
setName(props);
    }
  return (
    <Fragment>
    <Row className='m-0'>
        <Col md='12' className='btn-col'>
            <Button className='btn-transection'  onClick={()=>handdleChange("Summary")}>Summary</Button>
            <Button className='btn-transection'  onClick={()=>handdleChange("Transection")}>Transection</Button>
            <Button className='btn-transection'  onClick={()=>handdleChange("Report")}>Report</Button>
        </Col>
        <Col md='12'>
          {name==="Summary"?<Summary/>:name==="Transection"?<Transection/>:<Report/>}
        </Col>
    </Row>
</Fragment>
  )
}

export default Index