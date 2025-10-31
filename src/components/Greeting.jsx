import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Check if name exists in localStorage
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setName(savedName);
    } else {
      setIsEditing(true);
    }

    // Update greeting based on time
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let message = "";

      if (hour >= 5 && hour < 12) message = "Good Morning";
      else if (hour >= 12 && hour < 17) message = "Good Afternoon";
      else if (hour >= 17 && hour < 21) message = "Good Evening";
      else message = "Good Night";

      setGreeting(message);
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      localStorage.setItem("userName", name);
      setIsEditing(false);
    }
  };

  return (
    <div className="text-center text-white mt-6">
      <h2 className="text-5xl font-semibold flex justify-center items-center gap-2">
        {greeting},
        {isEditing ? (
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              
              className="bg-transparent border-b-2 border-white text-white text-5xl px-2 focus:outline-none w-48 text-center"
              autoFocus
            />
          </form>
        ) : (
          <>
            <span
              className="cursor-pointer hover:opacity-80"
              onClick={() => setIsEditing(true)}
            >
              {name}.
            </span>
          </>
        )}
      </h2>
    </div>
  );
};

export default Greeting;
