import React, { Fragment, useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
  Table,
  Input,
  FormGroup,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from "reactstrap";
import ReactPaginate from "react-js-pagination";


const Index = () => {

  const transactions = [
    {
      id: 1,
      date: '2023-09-01',
      amount: 100.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 100.0,
    },
    {
      id: 2,
      date: '2023-09-02',
      amount: -50.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 50.0,
    },
    {
      id: 3,
      date: '2023-09-03',
      amount: 75.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 125.0,
    },
    {
      id: 4,
      date: '2023-09-04',
      amount: -30.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 95.0,
    },
    {
      id: 5,
      date: '2023-09-05',
      amount: 60.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 155.0,
    },
    {
      id: 6,
      date: '2023-09-06',
      amount: -25.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 130.0,
    },
    {
      id: 7,
      date: '2023-09-07',
      amount: 90.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 220.0,
    },
    {
      id: 8,
      date: '2023-09-08',
      amount: -45.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 175.0,
    },
    {
      id: 9,
      date: '2023-09-09',
      amount: 120.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 295.0,
    },
    {
      id: 10,
      date: '2023-09-10',
      amount: -20.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 275.0,
    },
  ];
  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filterTransactions = () => {
    let filtered = transactions;

    if (startDate && endDate) {
      // Filter transactions based on the date range
      filtered = filtered.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return transactionDate >= start && transactionDate <= end;
      });
    }

    return filtered;
  };

  const renderTransactions = () => {
    const filteredTransactions = filterTransactions();
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;

    return filteredTransactions.slice(startIndex, endIndex).map((transaction) => (
      <tr key={transaction.id}>
        <td>{transaction.id}</td>
        <td>{transaction.date}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.account}</td>
        <td>{transaction.comments}</td>
        <td>{transaction.balance}</td>
      </tr>
    ));
  };

  return (
    <Fragment>
      <div className='date-div'>
        <FormGroup className='date-form mt-3'>
          <Label for="startDate">From :</Label>
          <Input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup className='date-form mt-3'>
          <Label  for="endDate" className='lb' >To :</Label>
          <Input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormGroup>
        {/* <button className='btn-transection btn-filter ' onClick={() => handleFilterClick()}>Filter</button> */}
      </div>
      <Table hover responsive >
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Account</th>
            <th>Comments</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{renderTransactions()}</tbody>
      </Table>
      <Pagination>
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink previous onClick={() => handlePageClick(currentPage - 1)} />
        </PaginationItem>
        {[...Array(Math.ceil(filterTransactions().length / pageSize))].map((_, index) => (
          <PaginationItem key={index} active={index === currentPage}>
            <PaginationLink onClick={() => handlePageClick(index)}>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === Math.ceil(filterTransactions().length / pageSize) - 1}>
          <PaginationLink next onClick={() => handlePageClick(currentPage + 1)} />
        </PaginationItem>
      </Pagination>
    </Fragment>
  )
}

export default Index