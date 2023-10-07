import React, { Fragment, useEffect, useState } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
  CChart
} from '@coreui/react-chartjs'
import "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { DocsCallout } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  // marketapi
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_ALPHA_VANTAGE_API_KEY' with your actual API key
    const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY';
    const symbol = 'IBM';
    const interval = '5min';

    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`
        );

        // Extract data from the API response
        const timeSeries = response.data['Time Series (5min)'];
        const dates = Object.keys(timeSeries).reverse();

        // Filter data for the last 4 months
        const last4MonthsDates = dates.slice(0, 5); // Assuming an average month has 30 days

        // Format the dates to "Month-Year" with the year truncated to 2 digits
        const formattedDates = last4MonthsDates.map(date => {
          const dateObj = new Date(date);
          const month = dateObj.toLocaleString('default', { month: 'short' }); // Ensure month is displayed as two digits
          const year = dateObj.getFullYear().toString().slice(-2);
          return `${month}-${year}`;
        });

        const closingPrices = last4MonthsDates.map(date =>
          parseFloat(timeSeries[date]['4. close'])
        );
        console.log("dates", timeSeries)
        // Set the stock data in state
        setStockData({
          labels: formattedDates,
          // labels: ['1day', '2mon', '3mon', '6mon', '1year', '2year', '3year'],
          datasets: [
            {
              label: `Stock Price (${symbol})`,
              data: closingPrices,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              pointRadius: 0, // Hide data points
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch stock data when the component mounts
    fetchStockData();
  }, []);
  console.log('stock', stockData)
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        // label: 'Sales',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [random(), random(), 80, 81, 56],
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <Fragment>

      <CRow className='d-flex justify-content-center'>

        {/* <CCol xs={12}>
        <DocsCallout
        name="Chart"
        href="components/chart"
        content="this is our chart area"
        />
      </CCol> */}

        <CCol xs={12} sm={12} lg={4} md={6}>
          {/* <CCard className="mb-4">
          <CCardHeader>Portfolio Performance</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
                datasets: [
                  {
                   
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    // borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    // pointBorderColor: '#fff',
                    data: [1, 3, 18, 4, 5, random(), random()],
                  },
                  // {
                   
                  //   backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  //   borderColor: 'rgba(151, 187, 205, 1)',
                  //   pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  //   pointBorderColor: '#ffff',
                  //   data: [random(), random(), random(), random(), random(), random(), random()],
                  // },
                ],
              }}
            />
          </CCardBody>
        </CCard> */}
          <CCard className="mb-4">
            <CCardHeader>Portfolio Performance</CCardHeader>
            <CCardBody>
              <CChartLine
                type="line"
                data={{
                  labels: ['1 mon', '2 mon', '3 mon', '6 mon', '1 yr', '2 yr', '3 yr', '10 yr'],
                  datasets: [
                    {
                      label: "",
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 1,
                      data: [10, 15, 40],
                    }]
                }}

                options={{
                  plugins: {
                    legend: {
                      display: false, // Hide the legend
                    },
                    // tooltip: {
                    //   callbacks: {
                    //     label: function (context) {
                    //       // Customize the tooltip label to show "Rented Text" when hovering
                    //       return `Rent  `;
                    //     },
                    //   },
                    // },
                  },
                  // plugins: {
                  //   title: {
                  //     display: false,
                  //     text: 'My Custom Chart Title',
                  //   },
                  // },

                  beginAtZero: true,

                }}
              />


            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={12} md={6} lg={4}>
          <CCard className="mb-4">
            <CCardHeader>Market Performance</CCardHeader>
            <CCardBody>
              {stockData &&
                <CChartLine

                  type="line"
                  data={{
                    datasets: stockData.datasets,
                    labels: stockData.labels
                  }}

                  options={{
                    plugins: {
                      legend: {
                        display: false, // Hide the legend
                      },
                    },
                    // plugins: {
                    //   title: {
                    //     display: false,
                    //     text: 'My Custom Chart Title',
                    //   },
                    // },

                    beginAtZero: true,

                  }}
                />
              }
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className='d-flex justify-content-center'>
        <CCol xs={12} sm={12} lg={4} md={6}>
          <CCard className="">
            <CCardHeader>Asset Allocation</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                className='charts-asset-allocation'
                data={{
                  labels: ['Cash', 'Property in Pakistan', 'Property in Turkey', 'SaleOut'],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                      data: [65, 3, 0, 10],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false, // Hide the legend
                    },
                  },
                  // plugins: {
                  //   title: {
                  //     display: false,
                  //     text: 'My Custom Chart Title',
                  //   },
                  // },

                  beginAtZero: true,

                }}

              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={12} lg={4} md={6}>
          <CCard className="cards-main mb-4">
            <CCardHeader>Largest holdings percentage</CCardHeader>
            <CCardBody className='holding-chart'>
              <Bar
                data={{
                  labels: ['Property 1', 'Property 2', 'Property 3', 'Cash'],
                  datasets: [
                    {
                      // label: 'List',
                      backgroundColor: '#f87979',
                      data: [10, 20, 70, 65],
                    },
                  ],
                }}
                options={{
                  indexAxis: 'y',
                  plugins: {
                    legend: {
                      display: false, // Hide the legend
                    },
                  },
                  scales: {
                    x: {
                      beginAtZero: true,
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                  // plugins: {
                  //   title: {
                  //     display: false,
                  //     text: 'My Custom Chart Title',
                  //   },
                  // },

                  beginAtZero: true,

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
    </Fragment>
  )
}

export default Charts
