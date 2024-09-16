import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, TextField, Typography, useTheme, Paper } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/login', {
                name: username,
                pass: password
            });

            if (response.data === 'Employee') {
                localStorage.setItem("auth", "true");
                navigate("/dashboard");
            } else if (response.data === 'Hod') {
                localStorage.setItem("auth", "true");
                navigate("/dashboard");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor={theme.palette.background.default} // Use theme background color
        >
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 4,
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper, // Use theme background color for the paper
                    boxShadow: theme.shadows[5],
                    width: '300px',
                }}
            >
                <Typography variant="h4" gutterBottom color={theme.palette.text.primary}>
                    Login
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    fullWidth
                    sx={{ 
                        marginTop: 2, 
                        bgcolor: theme.palette.primary.main, 
                        '&:hover': {
                            bgcolor: 'green', // Change to green on hover
                        },
                    }}
                >
                    Login
                </Button>
            </Paper>
        </Box>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
    },
    loginBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    button: {
        width: '100%',
        padding: '10px',
        marginTop: '20px',
        borderRadius: '5px',
        backgroundColor: '#1976d2',
        color: '#fff',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
    },
};

export default Login;