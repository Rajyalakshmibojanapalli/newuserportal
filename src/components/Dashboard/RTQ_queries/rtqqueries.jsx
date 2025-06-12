import React, { useState } from 'react';
import { useGetKYCByUserIdMutation, useSaveBusinessMutation } from './kycDetails';
const KYCDetails = () => {
    const { data, error, isLoading } = useGetKYCByUserIdMutation();
    const [saveBusiness] = useSaveBusinessMutation();
    const [name, setName] = useState('');
    const [businessDetails, setBusinessDetails] = useState('');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userId: '3154584842121',
            businessType: 'Individual',
            businessName: 'Default Business Name',
            gstNumber: '',
            cinNumber: '',
            contactDetails: {
                email: 'example@email.com',
                phone: 9999999999,
                alternatePhone: 8888888888,
            },
            businessAddress: {
                street: '123 Default Street',
                city: 'Default City',
                state: 'Default State',
                pincode: '123456',
                country: 'India',
            },
            bankDetails: {
                accountNumber: '0000000000',
                ifscCode: 'ABCD0123456',
                bankName: 'Default Bank',
                accountHolderName: 'Default Account Holder',
            },
        };
        try {
            const response = await saveBusiness(payload).unwrap();
            console.log('Successfully submitted:', response);
            alert('Business info saved!');
        } catch (err) {
            console.error('Error submitting:', err);
            alert('Failed to save business info.');
        }
    };

    return (
        <div>
            <h2>KYC Details</h2>
            <p>Business Name: {data?.businessName}</p>
            <p>Status: {data?.kycStatus}</p>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Business Details</label>
                <input
                    type="text"
                    placeholder="Enter business details"
                    value={businessDetails}
                    onChange={(e) => setBusinessDetails(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default KYCDetails;
