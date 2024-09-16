import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Paper, IconButton, InputBase } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import HomeSidebar from "../global/HomeSidebar";
import HomeTopbar from "../global/HomeTopbar";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios"; // Assuming you are using axios to fetch data

const Emergency = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [emergencies, setEmergencies] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch emergency data from the backend API
    useEffect(() => {
        const fetchEmergencies = async () => {
            try {
                const response = await axios.get("/api/emergencies"); // Replace with your actual API endpoint
                setEmergencies(response.data);
            } catch (error) {
                console.error("Error fetching emergencies data:", error);
            }
        };
        fetchEmergencies();
    }, []);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "problem", headerName: "Problem", flex: 1 },
        { field: "location", headerName: "Location", flex: 1 },
    ];

    // Filter the rows based on the search input
    const filteredEmergencies = emergencies.filter((row) =>
        row.problem.toLowerCase().includes(search.toLowerCase()) ||
        row.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box display="flex" height="100vh">
            {/* SIDEBAR */}
            <HomeSidebar />

            {/* CONTENT */}
            <Box flexGrow={1} display="flex" flexDirection="column">
                {/* TOPBAR */}
                <HomeTopbar />

                {/* HEADER & SEARCH */}
                <Box display="flex" flexDirection="column" p={4} bgcolor={theme.palette.background.default}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                        <Header title="Emergency Situations" subtitle="List of all emergency situations" />
                        
                        {/* SEARCH INPUT */}
                        <Box
                            display="flex"
                            alignItems="center"
                            backgroundColor={colors.primary[400]}
                            borderRadius="3px"
                            sx={{ width: "300px" }}
                        >
                            <InputBase
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                sx={{ ml: 2, flex: 1, color: colors.grey[200] }}
                            />
                            <IconButton type="button" sx={{ p: 1 }}>
                                <SearchIcon sx={{ color: colors.grey[200] }} />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* DATA GRID */}
                    <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
                        <Box
                            height="75vh"
                            sx={{
                                "& .MuiDataGrid-root": {
                                    border: "none",
                                },
                                "& .MuiDataGrid-cell": {
                                    borderBottom: "none",
                                },
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: colors.blueAccent[700],
                                    borderBottom: "none",
                                },
                                "& .MuiDataGrid-virtualScroller": {
                                    backgroundColor: colors.primary[400],
                                },
                                "& .MuiDataGrid-footerContainer": {
                                    borderTop: "none",
                                    backgroundColor: colors.blueAccent[700],
                                },
                                "& .MuiCheckbox-root": {
                                    color: `${colors.greenAccent[200]} !important`,
                                },
                            }}
                        >
                            <DataGrid rows={filteredEmergencies} columns={columns} />
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default Emergency;
