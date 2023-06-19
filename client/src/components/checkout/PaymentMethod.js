import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { FaAmazonPay, FaGooglePay, FaMobileAlt, FaCreditCard } from 'react-icons/fa';

const PaymentMethod = () => {
    const [selectedMethods, setSelectedMethods] = useState([]);

    const handlePaymentMethodChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedMethods((prevSelectedMethods) => [...prevSelectedMethods, value]);
        } else {
            setSelectedMethods((prevSelectedMethods) => prevSelectedMethods.filter((method) => method !== value));
        }
    };

    const renderPaymentForm = () => {
        return selectedMethods.map((method) => {
            switch (method) {
                case 'amazonPay':
                    return (
                        <Card key={method}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Amazon Pay
                                </Typography>
                                {/* Amazon Pay specific input fields */}
                                <TextField label="Amazon Pay Email" fullWidth />
                                <TextField label="Amazon Pay Password" type="password" fullWidth />
                            </CardContent>
                        </Card>
                    );
                case 'googlePay':
                    return (
                        <Card key={method}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Google Pay
                                </Typography>
                                {/* Google Pay specific input fields */}
                                <TextField label="Google Pay Email" fullWidth />
                                <TextField label="Google Pay Password" type="password" fullWidth />
                            </CardContent>
                        </Card>
                    );
                case 'phonePe':
                    return (
                        <Card key={method}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    PhonePe
                                </Typography>
                                {/* PhonePe specific input fields */}
                                <TextField label="PhonePe Mobile Number" fullWidth />
                                <TextField label="PhonePe PIN" type="password" fullWidth />
                            </CardContent>
                        </Card>
                    );
                case 'card':
                    return (
                        <Card key={method}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Credit/Debit Card
                                </Typography>
                                {/* Credit/Debit card specific input fields */}
                                <TextField label="Card Number" fullWidth />
                                <TextField label="Expiry Date" fullWidth />
                                <TextField label="CVV" fullWidth />
                            </CardContent>
                        </Card>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', marginTop: "30px" }}>
            <FormControlLabel
                control={<Checkbox icon={<FaAmazonPay />} checkedIcon={<FaAmazonPay />} value="amazonPay" />}
                label="Amazon Pay"
                onChange={handlePaymentMethodChange}
            />
            <FormControlLabel
                control={<Checkbox icon={<FaGooglePay />} checkedIcon={<FaGooglePay />} value="googlePay" />}
                label="Google Pay"
                onChange={handlePaymentMethodChange}
            />
            <FormControlLabel
                control={<Checkbox icon={<FaMobileAlt />} checkedIcon={<FaMobileAlt />} value="phonePe" />}
                label="PhonePe"
                onChange={handlePaymentMethodChange}
            />
            <FormControlLabel
                control={<Checkbox icon={<FaCreditCard />} checkedIcon={<FaCreditCard />} value="card" />}
                label="Credit/Debit Card"
                onChange={handlePaymentMethodChange}
            />

            <Box mt={2}>{renderPaymentForm()}</Box>

            <Box mt={2} textAlign="center">
                <Button variant="contained" color="primary">
                    Pay Now
                </Button>
            </Box>
        </Box>
    );
};

export default PaymentMethod;
