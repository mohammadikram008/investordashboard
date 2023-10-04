import React, { Fragment ,useEffect,useState} from 'react'
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
        const closingPrices = dates.map(date =>
          parseFloat(timeSeries[date]['4. close'])
        );

        // Set the stock data in state
        setStockData({
          labels: dates,
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
  console.log('stock',stockData)
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

        <CCol xs={12} sm={12} lg={3} md={6}>
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
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
                  datasets: [
                    {
                      label: "",

                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 1,
                      data: [10, 40, 60],
                    }]
                }}
                
                options={{
                  plugins: {
                    legend: {
                      display: false, // Hide the legend
                    },
                    tooltip: {
                      callbacks: {
                        label: function (context) {
                          // Customize the tooltip label to show "Rented Text" when hovering
                          return `Rent $ ${Math.round(Math.random() * 100)}`;
                        },
                      },
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
        <CCol xs={12} sm={12} md={6} lg={3}>
          <CCard className="mb-4">
            <CCardHeader>Market Performance</CCardHeader>
            <CCardBody>
            {stockData&&
              <CChartLine
          
                  type="line"
                  data={{
                    datasets:stockData.datasets,
                    labels:stockData.labels
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
        <CCol xs={12} sm={12} lg={3} md={6}>
          <CCard className="mb-5">
            <CCardHeader>Asset Allocation</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={{
                  labels: ['Cash', 'Property in Pakistan', 'Property in Turkey', 'SaleOut'],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                      data: [40, 2, 1, 10],
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
             
                    beginAtZero:true,
                  
                }}

              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={12} lg={3} md={6}>
          <CCard className="cards-main mb-4">
            <CCardHeader>List of holdings and percentage of total portfolio in %</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: ['Property 1', 'Property 2', 'Property 3'],
                  datasets: [
                    {
                      // label: 'List',
                      backgroundColor: '#f87979',
                      data: [40, 20, 70, ],
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
             
                    beginAtZero:true,
                  
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
