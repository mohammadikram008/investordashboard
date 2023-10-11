import React, { Fragment, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('sk_test_51NzDfpBuGdpsayKMf1fdpJdhUH5H5sPEWW7EfyEDUaUrkvA1ICRe0J3MuoISm6tebqlrUapDE35u0xtw1I0Sfoxa00QyjZJIF8');
import axios from 'axios';

const Index = () => {
    const [formData, setFormData] = useState({
        legalName: '',
        fullAddress: '',
        idOrPassport: '',

        // To store the selected payment method
    });
    const [paymentMethod, setPaymentMethod] = useState('bankAccount');
    const [bankData, setBankData] = useState({
        accountNumber: '',
        routingNumber: '',
        accountHolderName: '',
    });

    const [cryptoWalletData, setCryptoWalletData] = useState({
        walletAddress: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleBankChange = (e) => {
        const { name, value } = e.target;
        setBankData({
            ...bankData,
            [name]: value,
        });
    };

    const handleCryptoWalletChange = (e) => {
        const { name, value } = e.target;
        setCryptoWalletData({
            ...cryptoWalletData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the user profile data and selected payment method details to your API here
            // Example: await axios.post('/api/profile', { ...formData, paymentMethodData });
            await axios.post('http://localhost:3005/api/tasks/profile', { ...formData,paymentMethod, ...bankData });
            console.log('Profile data submitted:', { ...formData });
            console.log('Bank Account data:', { ...bankData });
            console.log('Crypto Wallet data:', { ...cryptoWalletData });
            // Clear the form fields
            setFormData({
                legalName: '',
                fullAddress: '',
                idOrPassport: '',
            });
            setBankData({
                accountNumber: '',
                routingNumber: '',
                accountHolderName: '',
            });
            setCryptoWalletData({
                walletAddress: '',
            })
            alert("Your Data is Saved!")
        } catch (error) {
            console.error('Error submitting profile form:', error);
        }
    };
    return (
        <Fragment>
            <Container>
                <div className='change-pass-main-div'>
                    <h2>Profile Page</h2>
                </div>
                <div className='verification-form-div mt-4'>
                    <Form onSubmit={handleSubmit}>
                        <div className='verification-form-div '>


                            <FormGroup>
                                <Label for="legalName">Legal Name</Label>
                                <Input
                                    type="text"
                                    name="legalName"
                                    id="legalName"
                                    value={formData.legalName}
                                    onChange={handleChange}
                                />
                            </FormGroup>

                            <FormGroup className='mx-2'>
                                <Label for="fullAddress"> Address</Label>
                                <Input
                                    type="text"
                                    name="fullAddress"
                                    id="fullAddress"
                                    value={formData.fullAddress}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <FormGroup>
                            <Label for="idOrPassport">ID/Passport</Label>
                            <Input
                                type="text"
                                name="idOrPassport"
                                id="idOrPassport"
                                value={formData.idOrPassport}
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="paymentMethod">Payment Method</Label>
                            <Input
                                type="select"
                                name="paymentMethod"
                                id="paymentMethod"
                                value={paymentMethod}
                                onChange={handlePaymentMethodChange}
                            >
                                <option value="bankAccount">Bank Account</option>
                                <option value="cryptoWallet">Crypto Wallet</option>
                            </Input>
                        </FormGroup>

                        {/* Bank Account Fields */}
                        {paymentMethod === 'bankAccount' && (
                            <div>
                                <FormGroup>
                                    <Label for="accountNumber">Account Number</Label>
                                    <Input
                                        type="text"
                                        name="accountNumber"
                                        id="accountNumber"
                                        value={bankData.accountNumber}
                                        onChange={handleBankChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="routingNumber">Routing Number</Label>
                                    <Input
                                        type="text"
                                        name="routingNumber"
                                        id="routingNumber"
                                        value={bankData.routingNumber}
                                        onChange={handleBankChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="accountHolderName">Account Holder's Name</Label>
                                    <Input
                                        type="text"
                                        name="accountHolderName"
                                        id="accountHolderName"
                                        value={bankData.accountHolderName}
                                        onChange={handleBankChange}
                                    />
                                </FormGroup>

                                {/* <Elements stripe={stripePromise}>
                                <CardElement />
                            </Elements> */}
                            </div>
                        )}

                        {/* Crypto Wallet Fields */}
                        {paymentMethod === 'cryptoWallet' && (
                            <div>
                                <FormGroup>
                                    <Label for="walletAddress">Crypto Wallet Address</Label>
                                    <Input
                                        type="text"
                                        name="walletAddress"
                                        id="walletAddress"
                                        value={cryptoWalletData.walletAddress}
                                        onChange={handleCryptoWalletChange}
                                    />
                                </FormGroup>
                            </div>
                        )}

                        <Button className='btn-login' type="submit">
                            Save Profile
                        </Button>
                    </Form>
                </div>
            </Container>
        </Fragment>
    )
}

export default Index