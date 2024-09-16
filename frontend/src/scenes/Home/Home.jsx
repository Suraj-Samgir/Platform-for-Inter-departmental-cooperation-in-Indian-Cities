import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeSidebar from "../global/HomeSidebar"; // Import the new HomeSidebar
import { useMode } from "../../theme";
import roadImage from "../../assets/road.jpg";
import pipeImage from "../../assets/pipe.jfif";
import lightImage from "../../assets/light.jfif";
import LoginIcon from "@mui/icons-material/Login";

// Placeholder image URLs
const images = [
    roadImage,
    pipeImage,
    lightImage,
];

const Home = () => {
    const [theme, colorMode] = useMode(); // Use the custom hook for theme and color mode
    const navigate = useNavigate(); // Use navigate for routing

    // State for managing the current slide index
    const [current, setCurrent] = useState(0);

    // Handler to go to the previous slide
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Handler to go to the next slide
    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleLoginClick = () => {
        navigate("/login"); // Navigate to the login page
    };

    return (
        <Box display="flex" height="100vh">
            {/* Left Sidebar (Dashboard) */}
            <HomeSidebar />

            {/* Right Content (Heading + Carousel) */}
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
                p={4} // Padding around the content
            >
                {/* Heading */}
                <Typography variant="h4" gutterBottom>
                    - WELCOME TO CENTRALIZED SYSTEM -
                </Typography>

                {/* Carousel */}
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    style={{ width: "80%", marginTop: "20px" }}
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className={`carousel-item ${current === 0 ? "active" : ""}`}>
                            <div style={{ position: "relative" }}>
                                <img
                                    src={pipeImage}
                                    className="d-block w-100"
                                    alt="..."
                                    style={{ height: "500px", objectFit: "cover", opacity: "0.7" }} // Reduced opacity for image
                                />
                                <div
                                    className="carousel-caption d-none d-md-block"
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.3)", // Background overlay for text
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                    }}
                                >
                                    <h5>Water Department</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-item ${current === 1 ? "active" : ""}`}>
                            <div style={{ position: "relative" }}>
                                <img
                                    src={roadImage}
                                    className="d-block w-100"
                                    alt="..."
                                    style={{ height: "500px", objectFit: "cover", opacity: "0.7" }} // Reduced opacity for image
                                />
                                <div
                                    className="carousel-caption d-none d-md-block"
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.3)", // Background overlay for text
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                    }}
                                >
                                    <h5>Road Department</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-item ${current === 2 ? "active" : ""}`}>
                            <div style={{ position: "relative" }}>
                                <img
                                    src={lightImage}
                                    className="d-block w-100"
                                    alt="..."
                                    style={{ height: "500px", objectFit: "cover", opacity: "0.7" }} // Reduced opacity for image
                                />
                                <div
                                    className="carousel-caption d-none d-md-block"
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.3)", // Background overlay for text
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                    }}
                                >
                                    <h5>Electricity Department</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                        onClick={prevSlide}
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                        onClick={nextSlide}
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </Box>

            {/* Login Button */}
            <Button
                variant="contained"
                color="primary"
                startIcon={<LoginIcon />} // Add icon to the button
                onClick={handleLoginClick}
                sx={{
                    position: "absolute",
                    top: "20px", // Adjust distance from the top
                    right: "20px", // Adjust distance from the right
                }}
            >
                Login
            </Button>
        </Box>
    );
};

export default Home;
