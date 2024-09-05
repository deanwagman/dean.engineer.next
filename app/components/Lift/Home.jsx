"use client";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to the Lift app!</p>
      <Link to="/workout">
        <Button variant="contained" color="primary">
          Start Workout
        </Button>
      </Link>
    </div>
  );
};

export default Home;
