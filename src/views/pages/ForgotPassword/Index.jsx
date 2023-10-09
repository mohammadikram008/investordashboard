import React ,{ Fragment,useState }from 'react'

import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Index = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Make an API request to send a reset password link to the user's email
        // Example:
        // await axios.post('/api/forgot-password', { email });
  
        setSuccessMessage('Reset password link sent to your email.');
        setErrorMessage('');
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