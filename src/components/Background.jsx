import React, { useState, useEffect } from "react";

const Background = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  const fetchNewWallpaper = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=mountain,landscape,nature,travel,adventure,hiking&orientation=landscape&client_id=4daMD7ZgQCT74UxWYpYiN5DBcAj0eZfHcrhZZOR3zAo`
      );

      if (!response.ok) throw new Error("Failed to fetch image");

      const data = await response.json();
      setImageUrl(data.urls.full);
    } catch (error) {
      console.error("Error fetching Unsplash image:", error);
    }
  };

  useEffect(() => {
    fetchNewWallpaper(); // Load first wallpaper

    const interval = setInterval(() => {
      const hour = new Date().getHours();
      if (hour !== currentHour) {
        setCurrentHour(hour);
        fetchNewWallpaper(); // Refresh every new hour
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [currentHour]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full -z-10 transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.85)",
      }}
    />
  );
};

export default Background;
