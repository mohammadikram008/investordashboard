import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow,CFooter } from '@coreui/react'
import '../CSS/Style.css'
const AppFooter = () => {
  return (
    <CFooter className='footer'>
    <CRow>
      <CCol xs={12} lg={12} sm={12} md={12}>
      <div >
      {/* <p>&copy; 2023 InFeet Inc. All Rights Reserved. </p> */}
          {/* Investor Dashboard
        <a href="/" target="_blank" rel="noopener noreferrer">
        </a>
        <span className="ms-1">&copy; 2023 </span>
        <span className="me-1">Powered by</span>
        <a href="/" target="_blank" rel="noopener noreferrer">
        </a>
          InfeetInc. */}
      </div>
      
      </CCol>
    </CRow>
      
    </CFooter>
  )
}

export default React.memo(AppFooter)
