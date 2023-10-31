import React, { Fragment, useState } from 'react'
import { Row, Col } from 'reactstrap'
import './Financial.css'
import { button } from '@coreui/coreui'
import Summary from './Summary/Index'
import Transection from './Transection/Index'
import Report from './Report/Index'
const Index = (props) => {
  console.log("finanace",props)
  const [name, setName] = useState("");
  const handdleChange = (props) => {
    setName(props);
  }
  return (
    <Fragment>
      <Row className='m-0 '>
        <Col md='12' className='btn-col'>
          <button className='btn-transection' onClick={() => handdleChange("Summary")}>Summary</button>
          <button className='btn-transection' onClick={() => handdleChange("Transection")}>Transactions</button>
          <button className='btn-transection' onClick={() => handdleChange("Report")}>Reports</button>
        </Col>
        <Col md='12 mt-4 ' className='detail-main-col'>
          {name === "Report" ? <Report /> : name === "Transection" ? <Transection data={props.data} /> : <Summary />}
        </Col>
      </Row>
    </Fragment>
  )
}

export default Index