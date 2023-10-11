import React ,{ Fragment,useState }from 'react'

import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
const Index = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (e) => {
      console.log('email',e.target.value)
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  // const email=(e.target.value)
  // console.log("em",email)
      try {
        // Make an API request to send a reset password link to the user's email
        // Example:
        fetch('http://localhost:3005/api/tasks/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email}),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('API response:', data);
            setSuccessMessage('Reset password link sent to your email.');
            setErrorMessage('');
            // You can handle the API response here, such as showing a success message or handling errors.
          })
          .catch((error) => {
            console.error('API error:', error);
          });
        // await axios.post('http://localhost:3005/api/tasks/forgot-password', { email });
  
        
      } catch (error) {
        console.error('Error sending reset password link:', error);
        setErrorMessage('Failed to send reset password link. Please check your email address.');
        setSuccessMessage('');
      }
    };
  
  return (
   <Fragment>
 <h2>Forgot Password</h2>
      <Form onSubmit={handleSubmit}>
        {successMessage && <p className="text-success">{successMessage}</p>}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button className="btn-login" type="submit">
          Send Reset Password Link
        </Button>
      </Form>
   </Fragment>
  )
}

export default Index