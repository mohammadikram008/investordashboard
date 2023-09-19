import React, { Fragment } from 'react'
import { Row,Col } from 'reactstrap'

const Index = () => {
    return (
        <Fragment>
            <Row className='m-0'>
                <Col md='12'>
                    <div>
                        <h5>Property Price: 478$</h5>
                        <h5>Area: 2894 sqft</h5>
                        <h5>Price/sqft: 75$</h5>
                        <h5>Property Type: Flat</h5>
                        <h5>BedRooms: 4</h5>
                        <h5>BathRooms: 2</h5>
                        <h5>Occupancy: 1%</h5>
                        <h5></h5>
                    </div>
                </Col>
                
            </Row>
        </Fragment>
    )
}

export default Index