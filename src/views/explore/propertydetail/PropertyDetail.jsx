import React from 'react'
import { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import '../../../CSS/InvestorDashBoard.css'
import pro3 from '../../../assets/images/pro3.jpg'
import InvestorDashBoard from '../../InvestorDashboard/Index'
//slider 
import { UncontrolledCarousel } from 'reactstrap';
const PropertyDetail = () => {
    const items = [
        {
            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            // altText: 'Slide 1',
            // caption: 'Slide 1',
          
        },
        {
            
            src: `${pro3}`,
            // altText: 'Slide 2',
            // caption: 'Slide 2',
           
        },
        {

            src: `https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg`,
            // altText: 'Slide 3',
            // caption: 'Slide 3',
           



        }
    ];
  return (
    <Fragment>
        <div className='title-div'>
            <p className='investor-title'>House no 45,Street 45,E11/4</p>
                {/* <p className='investor-title'>{data && data ? data.appartmentaddres : ""}</p> */}
            </div>
            <Row className='m-0'>
                <Col md='12'>
                      {/* slider area */}
                <div className="detail-slide">
                    <UncontrolledCarousel items={items} />
                </div>
                    {/* <figure>
                        <img src={pro3} className="img-investor" alt="Apartment" />
                   
                        <img src={`http://localhost:3005/${data.image}`} className="img-investor" alt="Apartment" />
                    </figure> */}
                </Col>
                <Col>
                <Row className='m-0 detail-row'>
                    <Col md='6'>
                        <h5>PKR 450,007</h5>
                        <h5>Annualised return</h5>
                        <h5>Funded Date</h5>
                        <h5>Current Valueation</h5>
                    </Col>
                    <Col md='6'>
                        <h5>567 Investor</h5>
                        <h5>9.0%</h5>
                        <h5>4 Aug 2023</h5>
                        <h5>PKR 1,110,000</h5>
                    </Col>
                </Row>
                
                </Col>
            </Row>
            <InvestorDashBoard/>
    </Fragment>
  )
}

export default PropertyDetail