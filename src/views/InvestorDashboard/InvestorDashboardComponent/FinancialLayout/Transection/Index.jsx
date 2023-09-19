import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'

const Index = () => {
    return (
        <Fragment>
            <Row className='m-0 mt-5 mb-5 transection-mian-row'>
                <Col md='2' sm='12' className='col-border-rgt'>
                    <div className='col-heading'><p>Date</p></div>
                    <div className='col-detail'>
                        <span>12/5/2023</span>
                    </div>
                </Col>
                <Col md='2' sm='12' className='col-border-rgt'>
                    <div className='col-heading'><p>Amount</p></div>
                    <div className='col-detail'>
                        <p>1300</p>
                    </div>
                </Col>
                <Col md='2' sm='12' className='col-border-rgt'>
                    <div className='col-heading'><p>Account</p></div>
                    <div className='col-detail'>
                        <p>1252023</p>
                    </div>
                </Col>
                <Col md='2' sm='12' className='col-border-rgt'>
                    <div className='col-heading'><p>Comments</p></div>
                    <div className='col-detail'>
                        <p>i am owner</p>
                    </div>
                </Col>
                <Col md='2' sm='12' className='col-border-rgt'>
                    <div className='col-heading'><p>Recived</p></div>
                    <div className='col-detail'>
                        <p>1252023</p>
                    </div>
                </Col>
                <Col md='2' sm='12' className='col-border-rgt'>
                    <div className='col-heading'><p>Balance</p></div>
                    <div className='col-detail'>
                        <p>12500,9</p>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Index