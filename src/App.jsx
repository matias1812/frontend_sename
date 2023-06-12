import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import { PrivateRoutes } from "./components/PrivateRoutes";
import Home from "./views/Home";
import JobList from "./views/JobList";
import Login from "./views/Login";
import SignUp from "./views/Signup";
import NotFound from "./views/NotFound";

import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/joblist" element={<JobList />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
