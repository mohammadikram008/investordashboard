import React, { Fragment, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './PropertyPagination.css'

import ReactPaginate from 'react-paginate';

const Index = ({ properties,itemsp }) => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('location');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Number of items to display per page

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0); // Reset to the first page when searching
  };

  const filteredProperties = properties.filter((property) =>
    property.propertyLocation && property.propertyLocation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  
    const handleNavigation = (prop) => {

        console.log("prop", prop)
        // window.open('https://65043945a24bc40b8f20810e--melodic-pudding-312f80.netlify.app/#/dashboard', '_blank');
        navigate('/property/propertydetail', { state: prop });
        // const storedData = localStorage.getItem('login');
        // if (storedData) {
        //     // If data exists in local storage, update the component state
        //     //   setData(JSON.parse(storedData));
        //     navigate('/investordashboard',{ state: prop });
        // } else {
        //     navigate('/login');
        // }

    };
    const handleSearchTypeChange = (event) => {
      setSearchType(event.target.value);
    };
  return (
    <Fragment>
      {/* <div className='searchbar'>
        <input type="text" placeholder='Search by Location' value={searchTerm} onChange={handleSearch} />
      </div> */}
       <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="location">Location</option>
          <option value="name">Property Name</option>
        </select>
      <table className='property-table'>
        <thead className='border'>
          <tr>
            <th>Property Name</th>
            <th>Property Location</th>
            <th>Property Price</th>
          </tr>
        </thead>
        <tbody className='border '>
          {paginatedProperties.map((property, index) => (
            <tr key={index} className='border '>
              <td>
                <Link to='/property/propertydetail'>{property. propertyName}</Link></td>
              <td>{property.propertyLocation}</td>
              <td>{property.propertyPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    
    </Fragment>
  )
}

export default Index