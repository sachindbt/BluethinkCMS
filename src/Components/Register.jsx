import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding: 32px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top:30px

`;

const ProfileImageInput = styled.input`
  display: none;
`;

const ProfileImageLabel = styled.label`
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff !important;
  color: #fff !important;
  padding: 8px 16px !important;
  border-radius: 4px !important;
`;

const App = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyJoiningDate, setCompanyJoiningDate] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profileImage, setProfileImage] = useState('');

    const handleProfileImageChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            password,
            companyJoiningDate,
            birthDate,
            phoneNumber,
            profileImage,
        });
    };

    return (
        <div >

            <Container >
            <h1>Please Fill The Details</h1>

                <TextField
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <TextField
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="Company Joining Date"
                    type="date"
                    value={companyJoiningDate}
                    onChange={(e) => setCompanyJoiningDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            max: new Date().toISOString().split("T")[0],
                        },
                    }}
                />
                <TextField
                    label="Birth Date"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        inputProps: {
                            max: new Date().toISOString().split("T")[0],
                        },
                    }}
                />

                <TextField
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <ProfileImageInput
                    type="file"
                    id="profile-image"
                    accept="image/*"
                    onChange={handleProfileImageChange}
                />
                <ProfileImageLabel htmlFor="profile-image">
                    Choose Profile Image
                </ProfileImageLabel>
                <SubmitButton variant="contained" onClick={handleSubmit}>
                    Submit
                </SubmitButton>
            </Container>
        </div>
    );
};

export default App;
