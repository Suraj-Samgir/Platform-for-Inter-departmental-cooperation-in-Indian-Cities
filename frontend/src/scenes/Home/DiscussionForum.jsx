import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import HomeSidebar from "../global/HomeSidebar"; // Import the HomeSidebar component
import HomeTopbar from "../global/HomeTopbar";

const DiscussionForum = () => {
    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [input, setInput] = useState("");
    const theme = useTheme();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setUsername("");
        setInput("");
    };

    const handlePost = () => {
        if (username.trim() && input.trim()) {
            setPosts([...posts, { username, content: input }]);
            handleClose();
        }
    };

    return (
        <Box display="flex" height="100vh">
            {/* SIDEBAR */}
            <HomeSidebar />

            {/* CONTENT */}
            <Box flexGrow={1} display="flex" flexDirection="column">
                {/* TOPBAR */}
                <HomeTopbar />

                {/* FORUM CONTENT */}
                <Box flexGrow={1} p={4} bgcolor={theme.palette.background.default}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            padding: 3,
                            borderRadius: 1,
                            mb: 2,
                        }}
                    >
                        <Typography variant="h4" mb={2}>
                            Discussion Forum
                        </Typography>
                        <Box
                            sx={{
                                maxHeight: "60vh",
                                overflowY: "auto",
                                mb: 2,
                                backgroundColor: theme.palette.background.default,
                                padding: 2,
                                borderRadius: 1,
                            }}
                        >
                            {posts.map((post, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <Typography variant="body2" color="textSecondary">
                                        {post.username}
                                    </Typography>
                                    <Typography variant="body1">{post.content}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Button variant="contained" color="primary" onClick={handleClickOpen}>
                            Post
                        </Button>
                    </Box>

                    {/* Modal for Posting */}
                    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                        <DialogTitle>Post a Message</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Username"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                margin="dense"
                                label="Your Post"
                                type="text"
                                fullWidth
                                variant="outlined"
                                multiline
                                rows={4}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={handlePost} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>
        </Box>
    );
};

export default DiscussionForum;
