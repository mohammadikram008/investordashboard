import React, { Fragment, useState } from 'react';
import { Col, Row } from 'reactstrap'
import { Table } from 'reactstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ReactPaginate from 'react-paginate';
const Index = () => {
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [['Date', 'Amount', 'Account', 'Comments', 'Balance']],
      body: paginatedData.map((item) => [
        item.date,
        item.amount.toString(),
        item.account,
        item.comments,
        item.balance.toString(),
      ]),
    });

    doc.save('InfeetReport.pdf');
  };
  const data = [
    {
      date: '2023-09-01',
      amount: 100.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 100.0,
    },
    {
      date: '2023-09-02',
      amount: -50.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 50.0,
    },
    {
      date: '2023-09-03',
      amount: 75.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 125.0,
    },
    {
      date: '2023-09-04',
      amount: -30.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 95.0,
    },
    {
      date: '2023-09-05',
      amount: 60.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 155.0,
    },
    {
      date: '2023-09-06',
      amount: -25.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 130.0,
    },
    {
      date: '2023-09-07',
      amount: 90.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 220.0,
    },
    {
      date: '2023-09-08',
      amount: -45.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 175.0,
    },
    {
      date: '2023-09-09',
      amount: 120.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 295.0,
    },
    {
      date: '2023-09-10',
      amount: -20.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 275.0,
    },
  ];
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
    setCurrentPage(0);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
    setCurrentPage(0);
  };

  const filteredData = data.filter((item) => {
    if (fromDate && toDate) {
      const itemDate = new Date(item.date);
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);

      return itemDate >= fromDateObj && itemDate <= toDateObj;
    }
    return true;
  });

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Fragment>
      {/* <div className='searchbar'>
                <input type="text" placeholder='Search here' value={selectedDate}
                    onChange={handleDateChange} />
            </div> */}
      {/* <Row className='m-0 mt-5 mb-5 transection-mian-row'>
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
            </Row> */}
      {/* <button className='btn-transection mb-4' onClick={generatePdf}>Generate Reports</button> */}
      <div className='date-div'>
        <label htmlFor="fromDate">From Date:</label>
        <input type="date" id="fromD
        
        
        ate" value={fromDate} onChange={handleFromDateChange} />
        <label htmlFor="toDate" id="fromDate">To Date:</label>
        <input type="date" id="toDate" value={toDate} onChange={handleToDateChange} />
      </div>
      <Table bordered hover responsive>
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
        {/* <tbody>
          <tr>
            <th scope="row">1</th>
            <td>12/5/2023</td>
            <td>$ 3456</td>
            <td>self</td>
            <td>Rented</td>
            <td>$ 5677</td>
          </tr>
          <tr>
            <th scope="row">2</th>
         
            <td>1/7/2023</td>
            <td>$ 7656</td>
            <td>self</td>
            <td>Sale</td>
            <td>$ 8877</td>
          </tr>
          <tr>
            <th scope="row">3</th>
         
            <td>6/9/2023</td>
            <td>$ 21234</td>
            <td>self</td>
            <td>Rented</td>
            <td>$ 1897</td>
          </tr>
        </tbody> */}
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.account}</td>
              <td>{item.comments}</td>
              <td>{item.balance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <ReactPaginate
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

      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
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