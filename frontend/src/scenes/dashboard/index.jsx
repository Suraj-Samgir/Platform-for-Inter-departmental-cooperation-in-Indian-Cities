import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import Header from "../../components/Header";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Simulate fetching alert data
  useState(() => {
    const fetchedData = "This is an alert message"; 
    setAlertData(fetchedData);
  }, []);

  // const location = useLocation();
  //   const { role, username } = location.state || {}; // Destructure the passed state

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontSize: '16px',
            padding: '10px 20px',
            backgroundColor: alertData ? 'red' : 'secondary.main',
          }}
          onClick={handleClickOpen}
        >
          Alert
        </Button>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px" mt="20px">
        <Box gridColumn="span 6" backgroundColor="primary.main" p="20px" sx={{ maxHeight: '400px', overflowY: 'scroll' }}>
          <Header title="Complaint" subtitle="Submit and view complaints" />
        </Box>

        <Box gridColumn="span 6" backgroundColor="primary.main" p="20px" sx={{ maxHeight: '400px', overflowY: 'scroll' }}>
          <Header title="Emergency" subtitle="Emergency reports and actions" />
        </Box>

        <Box gridColumn="span 6" backgroundColor="primary.main" p="20px" sx={{ maxHeight: '400px', overflowY: 'scroll' }}>
          <Header title="Projects" subtitle="Manage your projects" />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: '20px' }}
            onClick={() => navigate('/projects')} // Navigate to /projects
          >
            See Projects
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Alert Details</DialogTitle>
        <DialogContent>
          <p>{alertData || "No alerts available."}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;