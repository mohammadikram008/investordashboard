import React, { Fragment } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

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
  
      <CCol xs={4}>
        <CCard className="mb-4">
          <CCardHeader>Portfolio Performance</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
                datasets: [
                  {
                   
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                   
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={4}>
        <CCard className="mb-4">
          <CCardHeader>Market Performance</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
                datasets: [
                  {
                  
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow className='d-flex justify-content-center'>
    <CCol xs={3} >
        <CCard className="mb-4">
          <CCardHeader>Asset Allocation</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Cash', 'NFTs', 'Crypto', 'Stable coins'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={4}>
        <CCard className="mb-4">
          <CCardHeader>List of holdings and percentage of total portfolio</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
                datasets: [
                  {
                    label: 'List',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
          </CCard>
      </CCol>
      
    </CRow>
            </Fragment>
  )
}

export default Charts
