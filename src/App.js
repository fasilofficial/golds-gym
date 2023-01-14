import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";

import { Home, ExerciseDetail } from "./pages";
import { NavBar, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
