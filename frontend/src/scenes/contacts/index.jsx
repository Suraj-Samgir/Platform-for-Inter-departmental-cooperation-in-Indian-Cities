// edited to have backend data
import { Box, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "projectName", headerName: "Project Name", flex: 1 },
        { field: "startDate", headerName: "Start Date", type: "date", flex: 1 },
        { field: "endDate", headerName: "End Date", type: "date", flex: 1 },
        { field: "cost", headerName: "Cost", type: "number", flex: 1 },
        { field: "description", headerName: "Description", flex: 2 },
        { field: "location", headerName: "Location", flex: 1 },
        {
            field: "status",
            headerName: "Status of Project",
            flex: 1,
            renderCell: (params) => (
                <RadioGroup row defaultValue={params.value}>
                    <FormControlLabel
                        value="In Progress"
                        control={<Radio style={{ color: colors.blueAccent[700] }} />}
                        label="In Progress"
                    />
                    <FormControlLabel
                        value="Completed"
                        control={<Radio style={{ color: colors.greenAccent[300] }} />}
                        label="Completed"
                    />
                    <FormControlLabel
                        value="On Hold"
                        control={<Radio style={{ color: colors.redAccent[200] }} />}
                        label="On Hold"
                    />
                </RadioGroup>
            ),
        },
    ];

    return (
        <Box m="20px">
            <Header
                title="PROJECTS"
                subtitle="List of Projects for Future Reference"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
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
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    // rows={/* Your data source here */}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;
