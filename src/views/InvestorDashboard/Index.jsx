import React, { Fragment, useEffect, useState } from 'react'
import { Routes, useLocation } from 'react-router-dom';

import { Col, Row } from 'reactstrap'
import '../../CSS/InvestorDashBoard.css'
import pro3 from'../../assets/images/pro3.jpg'
import Details from './InvestorDashboardComponent/DetailLayout/Index'
import Financial from './InvestorDashboardComponent/FinancialLayout/Index'
import OwnerArea from './InvestorDashboardComponent/OwnerArea/Index'
const Index = (props) => {
    // const location = useLocation();
const propertiedetails=props.propertiedetails;

    const [data, setData] = useState("");
    const [loadfram, setLoadFram] = useState("");
    useEffect(() => {
        setData(propertiedetails)

    }, [])
    const handleChange = (props) => {
        setLoadFram(props);
    }
    
  return (
   <Fragment>
    <div className='title-div'>
            
                {/* <p className='investor-title'>{data && data ? data.appartmentaddres : ""}</p> */}
                        {/* <img src={`http://localhost:3005/${data.image}`} className="img-investor" alt="Apartment" /> */}
            {/* <p className='investor-title'>House no 45,Street 45,E11/4</p>
            
            <Row className='m-0 imgdiv'>
                <Col md='11'>
                    <figure className=''>
                        <img src={pro3} className="img-investor" alt="Apartment" />
                   
                    </figure>
                </Col>
            
            </Row> */}
            </div>
            <Row className='m-0  sec-row'>
                <div className='second-row'>

                    <Col md='12' className='detail-col'>
                        <div className='mini-navbar'>
                            <ul>
                                <li  onClick={() => handleChange("Details")}>Details</li>|
                                <li onClick={() => handleChange("Financial")}>Financial</li>|
                                {/* <li className="tooltip-btn" data-tooltip="Owner Access">Owner Area</li> */}
                                <li onClick={() => handleChange("OwnerArea")} className="">Owner's Area</li>
                            </ul>
                        </div>

                    </Col>
                    <Col md='10 m-2' className='detail-main-col' >
                        {loadfram === "Financial" ?   <Financial data={data} />:loadfram === "OwnerArea" ?<OwnerArea/>: <Details />}
                    </Col>
                </div>
            </Row>
   </Fragment>
  )
}

export default Index