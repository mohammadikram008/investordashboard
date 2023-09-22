import React, { Fragment, useEffect, useState } from 'react'
import '../../CSS/Portfolio.css'
import img from '../../assets/images/pro1.jpg'
import img1 from '../../assets/images/pro2.jpg'
import { Col, Row } from 'reactstrap'

import Pagination from '../Paginations/PropertiesPagination/Index'
//slider 
import { UncontrolledCarousel } from 'reactstrap';
const Portfolio = () => {
  const propertyData = [
    {
      id: 1,
      propertyName: 'Property 1',
      propertyLocation: 'Location 1',
      propertyPrice: 100000,
      propertyDescription: 'Description for Property 1',
      image: 'https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg',
    },
    {
      id: 2,
      propertyName: 'Property 2',
      propertyLocation: 'Location 2',
      propertyPrice: 150000,
      propertyDescription: 'Description for Property 2',
      image: 'https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg',
    },
    {
        id: 2,
        propertyName: 'Property 2',
        propertyLocation: 'Location 2',
        propertyPrice: 150000,
        propertyDescription: 'Description for Property 2',
        image: 'https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg',
      },
     
    // Add more properties as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 1000
  };
  const items = [
    {
      src: `https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg`,
      // altText: 'Slide 1',
      // caption: 'Slide 1',
    },
    {
      src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
      // altText: 'Slide 2',
      // caption: 'Slide 2',
    },
    {

      src: `https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg`,
      // altText: 'Slide 3',
      // caption: 'Slide 3',



    }
  ];
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  useEffect(() => {
    // Replace this with an actual API call to fetch data from the server
    // For now, we'll use some dummy data
    const dummyData = [
      {
        id: 1,
        title: 'House no 45,Street 45,E11/4',
        date: '2023-08-15',
        price: "450,000",
        location: '123 Main Street, City',
        imageUrl: [
          {
            src: `https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg`,
            // altText: 'Slide 1',
            // caption: 'Slide 1',
          },
          {
            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            // altText: 'Slide 2',
            // caption: 'Slide 2',
          },
          {
      
            src: `https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg`,
            // altText: 'Slide 3',
            // caption: 'Slide 3',
      
      
      
          }
        ],
      },
      {
        id: 2,
        title: 'New Property Launch',
        date: '2023-09-20',
        price: "680,000",
        location: '456 Park Avenue, Town',
        imageUrl:  [
          {
            src: `https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg`,
            // altText: 'Slide 1',
            // caption: 'Slide 1',
          },
          {
            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            // altText: 'Slide 2',
            // caption: 'Slide 2',
          },
          {
      
            src: `https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg`,
            // altText: 'Slide 3',
            // caption: 'Slide 3',
      
      
      
          }
        ],
      },
      // Add more upcoming activities as needed
    ];
    setUpcomingActivities(dummyData);
  }, []);
  return (
    <Fragment>

      <section className="upcoming-activities">
        <h2>My Portfolio</h2>
        <Row className='m-0'>
        <Col md='12' >
            {/* {upcomingActivities.map((activity) => (
              
                <div className="mian-proprty-div" data-animate-effect="fadeIn" key={activity.id}>
                  <div className="fh5co-property" >
                    <div className="custom-carousel">
                      <UncontrolledCarousel  {...settings} items={activity.imageUrl} />
                    </div>
                    <div className="fh5co-property-innter">
                      <span className="rented">Islamabad</span><span className="rented">Rented</span>
                      <div className='contain-div'
                    
                      >
                        <h5>{activity.title}</h5>
                        <div className="price-status">
                          <span className="price">{activity.price}</span>
                        </div>
                        <p className="fh5co-property-specification">
                          <span><strong>4567</strong>Sq Ft</span>
                        </p>
                      
                      </div>

                    </div>
                  </div>
                </div>


              
            ))} */}
 <Pagination itemsPerPage={5} properties={propertyData} />

          </Col>
        </Row>
        {/* <div className="activity-list">
        {upcomingActivities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <img  className='news-img' src={activity.imageUrl} alt={activity.title} />
           <div> <h3>{activity.title}</h3></div>
            <p>Date: {activity.date}</p>
            <p>Location: {activity.location}</p>
          </div>
        ))}
      </div> */}
      </section>
    </Fragment>
  )
}

export default Portfolio