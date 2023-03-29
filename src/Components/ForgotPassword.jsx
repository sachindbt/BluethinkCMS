import React from 'react'
import { Button, TextField } from '@mui/material';
import "./CSS/ForgotPassword.css"


export default function ForgotPassword() {
    return (
        <div>
            <h1>Forgot Password</h1>
            <TextField
                label="Email"
                id='email'
                name='email'
                variant='outlined'
                required
            /><br />
            <Button variant='contained' size='small' type='submit'>
                Reset Password
            </Button>
        </div>
    )
}
