import React, { useState, useEffect } from "react";

const Background = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  const fetchNewWallpaper = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=mountain,landscape,nature,travel,adventure,vanlife,glacier,camping,peak,hiking&orientation=landscape&client_id=4daMD7ZgQCT74UxWYpYiN5DBcAj0eZfHcrhZZOR3zAo`
      );
      if (!response.ok) throw new Error("Failed to fetch image");
      const data = await response.json();
      const newUrl = data.urls.full;

     
      localStorage.setItem("wallpaperUrl", newUrl);
      localStorage.setItem("wallpaperHour", new Date().getHours().toString());

      setImageUrl(newUrl);
    } catch (error) {
      console.error("Error fetching Unsplash image:", error);
    }
  };

  useEffect(() => {
    const savedUrl = localStorage.getItem("wallpaperUrl");
    const savedHour = localStorage.getItem("wallpaperHour");
    const hourNow = new Date().getHours();

   
    if (savedUrl && savedHour && parseInt(savedHour) === hourNow) {
      setImageUrl(savedUrl);
    } else {
      fetchNewWallpaper();
    }

    
    const interval = setInterval(() => {
      const hour = new Date().getHours();
      if (hour !== currentHour) {
        setCurrentHour(hour);
        fetchNewWallpaper();
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [currentHour]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      
      <div
        className="w-full h-full transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>
  );
};

export default Background;
