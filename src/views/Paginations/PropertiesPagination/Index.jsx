import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PropertyPagination.css'
// import { Table } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import Select from "react-select";
import {
  Table,
  Button,
  Collapse,
  Input,
  FormGroup,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { BiFilterAlt } from 'react-icons/bi';
const Index = ({ properties, itemsp }) => {
  console.log("properties", properties)
  const navigate = useNavigate();
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [filterCity, setFilterCity] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterPropertyType, setFilterPropertyType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filterProperties = () => {
    let filtered = properties;

    if (filterCity) {
      filtered = filtered.filter((property) =>
        property.city.toLowerCase() === filterCity.toLowerCase()
      );
    }

    if (filterPrice) {
      const [minPrice, maxPrice] = filterPrice.split("-").map((price) => parseInt(price, 10));
      filtered = filtered.filter(
        (property) => {
          const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ""), 10);
          return propertyPrice >= minPrice && propertyPrice <= maxPrice;
        }
      );
    }

    if (filterPropertyType) {
      filtered = filtered.filter(
        (property) =>
          property.type.toLowerCase() === filterPropertyType.toLowerCase()
      );
    }

    return filtered;
  };

  const renderProperties = () => {
    const filteredProperties = filterProperties();
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;

    return filteredProperties.slice(startIndex, endIndex).map((property) => (
      <tr key={property.id} onClick={()=>handleNavigation()}>
        <td>{property.id}</td>
        <td>{property.name}</td>
        <td>{property.address}</td>
        <td>{property.city}</td>
        <td>{property.country}</td>
        <td>{property.type}</td>
        <td>{property.price}</td>
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
      <div className='filter-div'> 

        <BiFilterAlt size={24} onClick={toggle} style={{ cursor: "pointer" }} />
      </div>
      {/* <Button color="primary" onClick={toggle}>
        Filter
      </Button> */}
      <Collapse isOpen={isOpen} className='collapse-div'>
        <FormGroup className='collapse-div-groupform'>
          <Label for="filterCity">City:</Label>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              {filterCity || "Select City"}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setFilterCity("")}>
                All
              </DropdownItem>
              <DropdownItem onClick={() => setFilterCity("Karachi")}>
                Karachi
              </DropdownItem>
              <DropdownItem onClick={() => setFilterCity("Lahore")}>
                Lahore
              </DropdownItem>
              <DropdownItem onClick={() => setFilterCity("Islamabad")}>
                Islamabad
              </DropdownItem>
              <DropdownItem onClick={() => setFilterCity("Peshawar")}>
                Peshawar
              </DropdownItem>
              {/* Add more cities as needed */}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup  className='collapse-div-groupform'>
          <Label for="filterPrice">Price:</Label>
          <Input
            type="select"
            id="filterPrice"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
          >
            <option value="">Select Price Range in PKR</option>
            <option value="1000-10000">1,000 - 10,000</option>
            <option value="10000-50000">10,000 - 50,000</option>
            <option value="50000-100000">50,000 - 100,000</option>
          </Input>
        </FormGroup>
        <FormGroup className='collapse-div-groupform'>
          <Label for="filterPropertyType">Property Type:</Label>
          <Input
            type="select"
            id="filterPropertyType"
            value={filterPropertyType}
            onChange={(e) => setFilterPropertyType(e.target.value)}
          >
            <option value="">Select Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Apartment">Apartment</option>
            <option value="Home">Home</option>
            <option value="House">House</option>
            {/* Add more property types as needed */}
          </Input>
        </FormGroup>
      </Collapse>
      <Table hover  className='table-body'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Property Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody >{renderProperties()}</tbody>
      </Table>
      <Pagination>
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink previous onClick={() => handlePageClick(currentPage - 1)} />
        </PaginationItem>
        {Array.from({ length: Math.ceil(filterProperties().length / pageSize) }).map((_, index) => (
          <PaginationItem key={index} active={index === currentPage}>
            <PaginationLink onClick={() => handlePageClick(index)}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === Math.ceil(filterProperties().length / pageSize) - 1}>
          <PaginationLink next onClick={() => handlePageClick(currentPage + 1)} />
        </PaginationItem>
      </Pagination>
      {/* <Pagination>
        {Array.from({ length: Math.ceil(filterProperties().length / pageSize) }).map((_, index) => (
          <PaginationItem key={index} active={index === currentPage}>
            <PaginationLink onClick={() => handlePageClick(index)}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination> */}

    </Fragment>
  )
}

export default Index