import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PropertyPagination.css'
// import { Table } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import Select from "react-select";
import {
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
const Index = ({ properties, itemsp }) => {
  console.log("properties",properties)
  const navigate = useNavigate();
 
  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const pageCount = Math.ceil(properties.length / pageSize);
  const filteredProperties = properties.filter((property) => {
    if (!filter) return true;
    switch (selectedFilter.value) {
      case "Name":
        return property.Name.toLowerCase().includes(filter.toLowerCase());
      case "Address":
        return property.Address.toLowerCase().includes(filter.toLowerCase());
      case "City":
        return property.City.toLowerCase().includes(filter.toLowerCase());
      case "Country":
        return property.Country.toLowerCase().includes(filter.toLowerCase());
      default:
        return true;
    }
  });

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterSelectChange = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };

  const renderProperties = () => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;

    return filteredProperties.slice(startIndex, endIndex).map((property) => (
      <tr key={property.id} onClick={()=>handleNavigation()}>
          <td>{property.id}</td>
        <td>{property.Name}</td>
        <td>{property.Address}</td>
        <td>{property.City}</td>
        <td>{property.Country}</td>
        <td>{property.Price}</td>
      </tr>
    ));
  };

  // const filteredProperties = properties.filter((property) =>
  //   property.propertyCity && property.propertyCity.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  // const handlePageClick = ({ selected }) => {
  //   setCurrentPage(selected);
  // };

  const handleNavigation = (prop) => {

    console.log("propN")
    // window.open('https://65043945a24bc40b8f20810e--melodic-pudding-312f80.netlify.app/#/dashboard', '_blank');
    navigate('/explore/propertydetail', { state: prop });
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
      <div className='searchbar'>
      <Select
          id="filter"
          options={[
            { value: "Name", label: "Name" },
            { value: "Address", label: "Address" },
            { value: "City", label: "City" },
            { value: "Country", label: "Country" },
          ]}
          value={selectedFilter}
          onChange={handleFilterSelectChange}
          isClearable
        />
         <Input
        type="text"
        placeholder="Filter..."
        value={filter}
        className='input-class'
        onChange={handleFilterChange}
      /> </div>
      {/* <select value={searchType} onChange={handleSearchTypeChange}>
          <option value="location">Location</option>
          <option value="name">Property Name</option>
        </select> */}
      {/* <Table bordered hover responsive className='mt-4'>
        <thead >
          <tr>
            <th>#</th>
            <th>Property Name</th>
            <th> Address</th>
            <th> City</th>
            <th> Country</th>
            <th> Property Type</th>
            <th> Price</th>
          </tr>
        </thead>
        <tbody >
          {paginatedProperties.map((property, index) => (
            <tr key={index} className='border ' onClick={() => navigate('/property/propertydetail')}>
              <th scope="row">{property.id}</th>
              <td>
                {property.propertyName}</td>
              <td>{property.propertyAddress}</td>
              <td>{property.propertyCity}</td>
              <td>{property.propertyCountry}</td>
              <td>{property.propertyType}</td>
              <td>{property.propertyPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
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
      /> */}
          <Table bordered hover responsive className='mt-4'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>{renderProperties()}</tbody>
      </Table>
      <Pagination>
        {Array.from({ length: pageCount }).map((_, index) => (
          <PaginationItem key={index}  active={index === currentPage}>
            <PaginationLink onClick={() => setCurrentPage(index)}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    

    </Fragment>
  )
}

export default Index