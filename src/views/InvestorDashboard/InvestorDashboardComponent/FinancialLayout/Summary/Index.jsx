import React, { Fragment } from 'react'
import { Col, Row, Table } from 'reactstrap'

const Index = () => {
  return (
    <Fragment>
      <Row className='m-0 mb-5 border p-3'>
        <Col md='12' className='detail-class-col'>
          <Table>
            <tbody>
              <tr>
                <td>1 Year Price Change:</td>
                <td>4%</td>
              </tr>
              <tr>
                <td>Rental Return:</td>
                <td>56%</td>
              </tr>
              <tr>
                <td>Avg Occugoing Rate:</td>
                <td>2%</td>
              </tr>
              <tr>
                <td>Monthly Rental:</td>
                <td>PKR 56</td>
              </tr>

              <tr>
                <td>Cash in Reserve:</td>
                <td>PKR 675</td>
              </tr>
              <tr>
                <td>Payment Ratio:</td>
                <td>2:1</td>
              </tr>
              <tr>
                <td>Property managment fee:</td>
                <td>1%</td>
              </tr>
            </tbody>
          </Table>

        </Col>

      </Row>
    </Fragment>
  )
}

export default Index