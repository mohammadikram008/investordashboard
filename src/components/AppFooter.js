import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className='bg-black text-white'>
      <div>
          Investor Dashboard
        {/* <a href="/" target="_blank" rel="noopener noreferrer">
        </a> */}
        <span className="ms-1">&copy; 2023 </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        {/* <a href="/" target="_blank" rel="noopener noreferrer">
        </a> */}
          InfeetInc.
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
