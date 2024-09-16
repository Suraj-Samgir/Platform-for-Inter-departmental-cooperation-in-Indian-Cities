import React from "react";
import { Box, Button, TextField, MenuItem, Typography, useTheme } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import HomeSidebar from "../global/HomeSidebar"; // Import the sidebar
import HomeTopbar from "../global/HomeTopbar";

const departments = [
    { value: "HR", label: "Human Resources" },
    { value: "IT", label: "Information Technology" },
    { value: "Finance", label: "Finance" },
    // Add more departments as needed
];

const validationSchema = yup.object().shape({
    location: yup.string().required("Location is required"),
    complaint: yup.string().required("Please describe your complaint"),
    department: yup.string().required("Please select a department"),
});

const ComplaintBox = () => {
    const theme = useTheme();

    const handleFormSubmit = (values) => {
        console.log(values);
        // Handle form submission here (e.g., send data to the server)
    };

    return (
        <Box display="flex" height="100vh">
            {/* SIDEBAR */}
            <HomeSidebar />

            {/* CONTENT */}
            <Box flexGrow={1} display="flex" flexDirection="column">
                {/* TOPBAR */}
                <HomeTopbar />

                {/* FORM CONTENT */}
                <Box flexGrow={1} p={4} bgcolor={theme.palette.background.default}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            padding: 3,
                            borderRadius: 1,
                            maxWidth: "600px",
                            margin: "auto",
                        }}
                    >
                        <Typography variant="h4" mb={3}>
                            Submit a Complaint
                        </Typography>
                        <Formik
                            initialValues={{
                                location: "",
                                complaint: "",
                                department: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleFormSubmit}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Box
                                        display="grid"
                                        gap="20px"
                                        gridTemplateColumns="repeat(1, 1fr)"
                                    >
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Location"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.location}
                                            name="location"
                                            error={!!touched.location && !!errors.location}
                                            helperText={touched.location && errors.location}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Complaint"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.complaint}
                                            name="complaint"
                                            error={!!touched.complaint && !!errors.complaint}
                                            helperText={touched.complaint && errors.complaint}
                                            multiline
                                            rows={4}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            select
                                            label="Department"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.department}
                                            name="department"
                                            error={!!touched.department && !!errors.department}
                                            helperText={touched.department && errors.department}
                                        >
                                            {departments.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Box>
                                    <Box display="flex" justifyContent="end" mt="20px">
                                        <Button type="submit" color="secondary" variant="contained">
                                            Submit Complaint
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ComplaintBox;
