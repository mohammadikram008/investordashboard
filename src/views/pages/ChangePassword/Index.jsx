import React, { Fragment ,useState} from 'react'
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert,
  } from 'reactstrap';
const Index = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    
      const [error, setError] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Make an API request to change the password here
          // You can use libraries like Axios to make the request
          // Example:
          // await axios.post('/api/password-change', formData);
    
          console.log('Password changed successfully');
          setFormData({
            currentPassword: '',
        newPassword: '',
        confirmPassword: '',
          });
         
          alert("Your Password is Changed!")
          setError(null); // Clear any previous errors
        } catch (error) {
          console.error('Error changing password:', error);
          setError('Failed to change password. Please check your current password.');
        }
      };
  return (
  <Fragment>
 <div>
      <h2>Password Change</h2>
      <Form onSubmit={handleSubmit}>
        {error && <Alert color="danger">{error}</Alert>}
        <FormGroup>
          <Label for="currentPassword">Current Password</Label>
          <Input
            type="password"
            name="currentPassword"
            id="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="newPassword">New Password</Label>
          <Input
            type="password"
            name="newPassword"
            id="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="confirmPassword">Confirm New Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <Button className='btn-login' type="submit">
          Change Password
        </Button>
      </Form>
    </div>
  </Fragment>
  )
}

export default Index