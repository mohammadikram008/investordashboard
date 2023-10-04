import React, { Fragment } from 'react'
import { Row, Col, Table } from 'reactstrap'

const Index = () => {
    return (
        <Fragment>
            <Row className='m-0 border p-3'>
                <Col md='12' className='detail-class-col'>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Property Price:</td>
                                <td>$ 478</td>
                            </tr>
                            <tr>
                                <td>Area:</td>
                                <td>2894 sqft</td>
                            </tr>
                            <tr>
                                <td>Price/sqft:</td>
                                <td>$ 75</td>
                            </tr>
                            <tr>
                                <td>Property Type:</td>
                                <td>Flat</td>
                            </tr>

                            <tr>
                                <td>Bed Rooms:</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Bath Rooms:</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Occupancy:</td>
                                <td>1 %</td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* <div>
                        <h5>Property Price:</h5>
                        <h5>Area: </h5>
                        <h5>Price/sqft:</h5>
                        <h5>Property Type: </h5>
                        <h5>Bed Rooms: </h5>
                        <h5>Bath Rooms: </h5>
                        <h5>Occupancy: </h5>
                        
                    </div> */}
                </Col>
                {/* <Col md='4'>
                    <div>
                    <h5>$ 478</h5>
                        <h5>2894 sqft</h5>
                        <h5>$75</h5>
                        <h5>Flat</h5>
                        <h5>4</h5>
                        <h5> 2</h5>
                        <h5>1%</h5>
                    </div>
                </Col> */}

            </Row>
        </Fragment>
    )
}

export default Index