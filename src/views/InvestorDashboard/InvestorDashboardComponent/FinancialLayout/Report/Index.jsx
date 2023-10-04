import React, { Fragment, useState } from 'react'
import { Row, Col } from 'reactstrap'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const Index = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [statementname, setStatementName] = useState('');
  // Define the initial data including "Net Total"
  const initialData = [
    ['Income Detail', 'Amount'],
    ['Rent', 1000],
    ['Expense', -500],
    ['Tax', -200],
    [{ content: 'Net Total', styles: { fontStyle: 'bold' } }, 0], // Initial Net Total value
  ];

  const [tableData, setTableData] = useState(initialData);

  const generatePdf = (props) => {
    console.log("statmentname", statementname)
    if (statementname === "Income Statement") {


      // Validate date range
      if (!fromDate || !toDate) {
        alert('Please select both "From Date" and "To Date".');
        return;
      }

      // Calculate the Net Total dynamically
      let netTotal = 0;
      for (let i = 1; i < initialData.length - 1; i++) {
        netTotal += initialData[i][1];
      }

      // Update the "Net Total" row with the calculated value
      const updatedData = [...initialData];
      updatedData[4][1] = netTotal;

      // Create a new PDF document
      const doc = new jsPDF();

      // Add "Income Statement" centered at the top
      doc.setFontSize(18);
      doc.text('Income Statement', doc.internal.pageSize.getWidth() / 2, 20, 'center');

      // Display the selected date range below the title
      doc.setFontSize(12);
      doc.text(`Report Date Range: ${fromDate} - ${toDate}`, doc.internal.pageSize.getWidth() / 2, 30, 'center');

      // Set the table header style
      doc.autoTable({
        head: [['Income ', 'Amount']],
        body: updatedData.slice(1), // Exclude the header row
        startY: 40, // Position below the title and date range
        theme: 'plain', // Add grid lines
      });

      // Save the PDF
      // doc.save('income_statement.pdf');

      // Open the PDF in a new tab
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    } else if (statementname === 'Balance Sheet') {

      // Validate date range
      if (!fromDate || !toDate) {
        alert('Please select both "From Date" and "To Date".');
        return;
      }

      // Calculate the Net Total dynamically
      let netTotal = 0;
      for (let i = 1; i < initialData.length - 1; i++) {
        netTotal += initialData[i][1];
      }

      // Update the "Net Total" row with the calculated value
      const updatedData = [...initialData];
      updatedData[4][1] = netTotal;

      // Create a new PDF document
      const doc = new jsPDF();

      // Add "Income Statement" centered at the top
      doc.setFontSize(18);
      doc.text('Balance Sheet', doc.internal.pageSize.getWidth() / 2, 20, 'center');

      // Display the selected date range below the title
      doc.setFontSize(12);
      doc.text(`Report Date Range: ${fromDate} - ${toDate}`, doc.internal.pageSize.getWidth() / 2, 30, 'center');

      // Set the table header style
      doc.autoTable({
        head: [['Income', 'Amount']],
        body: updatedData.slice(1), // Exclude the header row
        startY: 40, // Position below the title and date range
        theme: 'plain', // Add grid lines
      });

      // Save the PDF
      // doc.save('income_statement.pdf');

      // Open the PDF in a new tab
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    }
    else if (statementname === 'Cash Flow') {

      // Validate date range
      if (!fromDate || !toDate) {
        alert('Please select both "From Date" and "To Date".');
        return;
      }

      // Calculate the Net Total dynamically
      let netTotal = 0;
      for (let i = 1; i < initialData.length - 1; i++) {
        netTotal += initialData[i][1];
      }

      // Update the "Net Total" row with the calculated value
      const updatedData = [...initialData];
      updatedData[4][1] = netTotal;

      // Create a new PDF document
      const doc = new jsPDF();

      // Add "Income Statement" centered at the top
      doc.setFontSize(18);
      doc.text('Cash Flow', doc.internal.pageSize.getWidth() / 2, 20, 'center');

      // Display the selected date range below the title
      doc.setFontSize(12);
      doc.text(`Report Date Range: ${fromDate} - ${toDate}`, doc.internal.pageSize.getWidth() / 2, 30, 'center');

      // Set the table header style
      doc.autoTable({
        head: [['Income ', 'Amount']],
        body: updatedData.slice(1), // Exclude the header row
        startY: 40, // Position below the title and date range
        theme: 'plain', // Add grid lines
      });

      // Save the PDF
      // doc.save('income_statement.pdf');

      // Open the PDF in a new tab
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <Fragment>
      <Row className='m-0 border p-3'>
        <Col md='12'>
          <div>
            <h4 onClick={() => setStatementName("Income Statement")} className='reports-headings' >Income Statement </h4>
            <h4 onClick={() => setStatementName("Balance Sheet")} className='reports-headings' >Balance Sheet</h4>
            <h4 onClick={() => setStatementName("Cash Flow")} className='reports-headings'>Cash Flow</h4>
            { statementname && statementname?
              <div className='report-date-div'>
              <h4 >{statementname} Report</h4>
              <div>
                <label htmlFor="fromDate">From Date:</label>
                <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                <label htmlFor="toDate" id="fromDate">To Date:</label>
                <input type="date" id="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
              <button className='btn-transection mx-4 ' onClick={generatePdf}>Generate Report</button>
              </div>
            </div>
           :"" }
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Index