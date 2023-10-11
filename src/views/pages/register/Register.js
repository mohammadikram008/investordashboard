import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {
  // Step 1: Set up state variables
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  // Step 2: Create event handlers to update state
  const handleChange = (e) => {
    console.log("e",e.target)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Implement a function to send data to the API
  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the formData state to send data to the API
    // You can use libraries like axios or the native fetch API for this.

    // Example: Sending data with fetch
    fetch('http://localhost:3005/api/tasks/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API response:', data);
        setFormData({
          username: '',
          email: '',
          password: '',
          repeatPassword: '',
        });
        // You can handle the API response here, such as showing a success message or handling errors.
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  };

  return (
    <div className=" mt-5  d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1 className='login-heading'>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      value={formData.username}
                      onChange={handleChange}
                      name='username' // Step 2: Add onChange handler
                      placeholder="Username"
                  />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      value={formData.email}
                      onChange={handleChange} // Step 2: Add onChange handler
                      placeholder="Email"
                      name='email'
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                     value={formData.password}
                     onChange={handleChange}
                      type="password"
                      name='password'
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                     value={formData.repeatPassword}
                     onChange={handleChange}
                      type="password"
                      name='repeatPassword'
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" className="btn-transection  btn-login" >Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
