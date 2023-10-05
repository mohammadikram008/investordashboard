import React, { Fragment, useState } from 'react'

import {
  Table,
  Input,
  Row,
  Col,
  FormGroup,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from "reactstrap";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { CiExport } from 'react-icons/ci';
const Index = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [statementname, setStatementName] = useState('');

  // Define the initial data including "Net Total"

  const income_statement = [
    [{ content: 'Revenues', styles: { fontStyle: 'bold', halign: 'center', fillColor: [220, 220, 220] } }, 'Amount'],
    ['Rental Income', 10],
    ['Fee and Asset Management', 5],
    [{ content: 'Total Revenues', styles: { fontStyle: 'bold', halign: 'start',  } },, 0],
    [{ content: 'Expenses', styles: { fontStyle: 'bold', halign: 'center', fillColor: [220, 220, 220] } }],
    ['Property Maintenance', 40],
    ['Real Estate Taxes', 10],
    ['Insurance', 10],
    ['Property Management', 10],
    ['Fee and Asset Management', 10],
    ['Depreciation', 10],
    ['General and Administrative', 20],
    ['Impairments', 30],
    [{ content: 'Total Expenses', styles: { fontStyle: 'bold', halign: 'start' } },, 0],
    [{ content: 'Net Income(revenue-expense)', styles: { fontStyle: 'bold', halign: 'start', fillColor: [220, 220, 220] } },, 0],
  ];
  const balance_sheet = [
    [{ content: 'Assets', styles: { fontStyle: 'bold', halign: 'center', fillColor: [220, 220, 220] } }, 'Amount'],
    ['Real Estate (Gross Assets)', 20],
    ['Accumulated Depreciation', 15],
    [{ content: 'Net Total Real Estate', styles: { fontStyle: 'bold' } }, 0],
    [{ content: 'Income Statement', styles: { fontStyle: 'bold', halign: 'center', fillColor: [220, 220, 220] } }, ''],
    ['Operating Expenses', 10],
    ['Interest Expenses', 10],
    ['Annual Depreciation', 20],
    [{ content: 'Total Expenses', styles: { fontStyle: 'bold' } }, 0],
    [{ content: 'Net Income', styles: { fontStyle: 'bold' } }, 0],  ];
  const [tableData, setTableData] = useState(income_statement);
  const [balancesheet, setBalanceSheet] = useState(balance_sheet);
  const generatePdf = (props) => {
    console.log("statmentname", statementname)
    if (statementname === "Income Statement") {
      const calculateTotals = () => {
        let totalRevenues = 0;
        let totalExpenses = 0;

         // Calculate total revenues
    for (let i = 1; i <= 2; i++) {
      totalRevenues += tableData[i][1];
    }

    // Calculate total expenses
    for (let i = 5; i <= 12; i++) {
      totalExpenses += tableData[i][1];
    }

    // Calculate net income
    const netIncome = totalRevenues - totalExpenses;

    // Update the totals in the table
    const updatedData = [...tableData];
    updatedData[3][1] = totalRevenues;
    updatedData[13][1] = totalExpenses;
    updatedData[14][1] = netIncome;

    setTableData(updatedData);
      };
      // Validate date range
      if (!fromDate || !toDate) {
        alert('Please select both "From Date" and "To Date".');
        return;
      }

      // Calculate totals
      calculateTotals();

      // Create a new PDF document
      const doc = new jsPDF();
// Add title and date range centered at the top
doc.setFontSize(18);
doc.text(' Income Statement', doc.internal.pageSize.getWidth() / 2, 20, 'center');
doc.setFontSize(12);
doc.text(`Report Date Range: ${fromDate} - ${toDate}`, doc.internal.pageSize.getWidth() / 2, 30, 'center');

// Set the table header style
doc.autoTable({
  head: [['Revenues', 'Amount']],
  body: tableData.slice(1), // Exclude the first row
  startY: 40, // Position below the title and date range
  theme: 'plain', // Remove table border
});

// Save the PDF
// doc.save('rental_property_income_statement.pdf');

// Open the PDF in a new tab
const pdfBlob = doc.output('blob');
const pdfUrl = URL.createObjectURL(pdfBlob);
window.open(pdfUrl, '_blank');
    }
    else if (statementname === 'Balance Sheet') {
      const calculateNetTotalRealEstate = () => {
        const grossAssets = balancesheet[1][1];
        const accumulatedDepreciation = balancesheet[2][1];
        const netTotalRealEstate = grossAssets - accumulatedDepreciation;
    
        // Update the Net Total Real Estate value
        const updatedData = [...balancesheet];
        updatedData[3][1] = netTotalRealEstate;
    
        setBalanceSheet(updatedData);
      };
    
      const calculateNetIncome = () => {
        const operatingExpenses = balancesheet[5][1];
        const interestExpenses = balancesheet[6][1];
        const annualDepreciation = balancesheet[7][1];
        const totalExpenses = operatingExpenses + interestExpenses + annualDepreciation;
    
        // Calculate Net Income
        const netIncome = balancesheet[3][1] - totalExpenses;
    
        // Update the Total Expenses and Net Income values
        const updatedData = [...balancesheet];
        updatedData[8][1] = totalExpenses;
        updatedData[9][1] = netIncome;
    
        setBalanceSheet(updatedData);
      };
      // Validate date range
      if (!fromDate || !toDate) {
        alert('Please select both "From Date" and "To Date".');
        return;
      }

      // Calculate the Net Total dynamically
       // Calculate Net Total Real Estate
    calculateNetTotalRealEstate();

    // Calculate Net Income
    calculateNetIncome();

    // Create a new PDF document
    const doc = new jsPDF();

    // Add title and date range centered at the top
    doc.setFontSize(18);
    doc.text('Balance Sheet', doc.internal.pageSize.getWidth() / 2, 20, 'center');
    doc.setFontSize(12);
    doc.text(`Report Date Range: ${fromDate} - ${toDate}`, doc.internal.pageSize.getWidth() / 2, 30, 'center');

    // Set the table header style
    doc.autoTable({
      head: [['Assets', 'Amount']],
      body: balancesheet.slice(1), // Exclude the first row
      startY: 40, // Position below the title and date range
      theme: 'plain', // Remove table border
    });

      // Save the PDF
      // doc.save('income_statement.pdf');

      // Open the PDF in a new tab
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    }
    // else if (statementname === 'Cash Flow') {

    //   // Validate date range
    //   if (!fromDate || !toDate) {
    //     alert('Please select both "From Date" and "To Date".');
    //     return;
    //   }

    //   // Calculate the Net Total dynamically
    //   let netTotal = 0;
    //   for (let i = 1; i < initialData.length - 1; i++) {
    //     netTotal += initialData[i][1];
    //   }

    //   // Update the "Net Total" row with the calculated value
    //   const updatedData = [...initialData];
    //   updatedData[4][1] = netTotal;

    //   // Create a new PDF document
    //   const doc = new jsPDF();

    //   // Add "Income Statement" centered at the top
    //   doc.setFontSize(18);
    //   doc.text('Cash Flow', doc.internal.pageSize.getWidth() / 2, 20, 'center');

    //   // Display the selected date range below the title
    //   doc.setFontSize(12);
    //   doc.text(`Report Date Range: ${fromDate} - ${toDate}`, doc.internal.pageSize.getWidth() / 2, 30, 'center');

    //   // Set the table header style
    //   doc.autoTable({
    //     head: [['Income ', 'Amount']],
    //     body: updatedData.slice(1), // Exclude the header row
    //     startY: 40, // Position below the title and date range
    //     theme: 'plain', // Add grid lines
    //   });

    //   // Save the PDF
    //   // doc.save('income_statement.pdf');

    //   // Open the PDF in a new tab
    //   const pdfBlob = doc.output('blob');
    //   const pdfUrl = URL.createObjectURL(pdfBlob);
    //   window.open(pdfUrl, '_blank');
    // }
  };

  return (
    <Fragment>
      <Row className='m-0 border p-3'>
        <Col md='12'>
          <div>
            <h5 onClick={() => setStatementName("Income Statement")} className='reports-headings' >Income Statement  <CiExport size={24} style={{ cursor: "pointer" }} /> </h5>
            <h5 onClick={() => setStatementName("Balance Sheet")} className='reports-headings' >Balance Sheet <CiExport size={24} style={{ cursor: "pointer" }} /> </h5>
            <h5 onClick={() => setStatementName("Cash Flow")} className='reports-headings'>Cash Flow <CiExport size={24} style={{ cursor: "pointer" }} /></h5>
            {statementname && statementname ?
              <div className='report-date-div'>
                <h5 >{statementname} Report</h5>
                {/* <div>
                <label htmlFor="fromDate">From Date:</label>
                <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                <label htmlFor="toDate" id="fromDate">To Date:</label>
                <input type="date" id="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
              
              </div> */}
                <div className='date-div'>
                  <FormGroup className='date-form mt-3'>
                    <Label for="startDate">From :</Label>
                    <Input
                      type="date"
                      // id="startDate"
                      id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className='date-form mt-3'>
                    <Label for="endDate" className='lb'>To :</Label>
                    <Input
                      type="date"

                      id="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)}
                    />
                  </FormGroup>
                  <button className='btn-transection mx-4 ' onClick={generatePdf}>Generate Report</button>
                  {/* <button className='btn-transection btn-filter ' onClick={() => handleFilterClick()}>Filter</button> */}
                </div>
              </div>
              : ""}
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Index