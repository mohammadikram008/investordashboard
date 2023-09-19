import React, { Fragment , useEffect, useState} from 'react'
import '../../CSS/Portfolio.css'
import img from '../../assets/images/pro1.jpg'
import img1 from '../../assets/images/pro2.jpg'
const Portfolio = () => {
    const [upcomingActivities, setUpcomingActivities] = useState([]);
    useEffect(() => {
      // Replace this with an actual API call to fetch data from the server
      // For now, we'll use some dummy data
      const dummyData = [
        {
          id: 1,
          title: 'House',
          date: '2023-08-15',
          location: '123 Main Street, City',
          imageUrl: img,
        },
        {
          id: 2,
          title: 'New Property Launch',
          date: '2023-09-20',
          location: '456 Park Avenue, Town',
          imageUrl: img1,
        },
        // Add more upcoming activities as needed
      ];
      setUpcomingActivities(dummyData);
    }, []);
  return (
   <Fragment>
    
    <section className="upcoming-activities">
      <h2>My Own Property</h2>
      <div className="activity-list">
        {upcomingActivities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <img  className='news-img' src={activity.imageUrl} alt={activity.title} />
           <div> <h3>{activity.title}</h3></div>
            <p>Date: {activity.date}</p>
            <p>Location: {activity.location}</p>
          </div>
        ))}
      </div>
      </section>
   </Fragment>
  )
}

export default Portfolio