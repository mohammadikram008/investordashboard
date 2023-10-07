import React, { Fragment } from 'react'

import { CiExport } from 'react-icons/ci';
import { Col, Row } from 'reactstrap';
const Index = () => {
    return (
        <Fragment>
            <Row className='m-0 border p-3'>
                <Col md='12'>

                    <div>
                        <h5 className='reports-headings' >Title Deed  <CiExport size={24} style={{ cursor: "pointer" }} /> </h5>
                        <h5 className='reports-headings' >Individual Financial<CiExport size={24} style={{ cursor: "pointer" }} /> </h5>
                        {/* <h5  className='reports-headings'>Cash Flow <CiExport size={24} style={{ cursor: "pointer" }} /></h5> */}
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Index