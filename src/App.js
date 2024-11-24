import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageRoles from "./pages/ManageRoles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow p-4 w-full md:w-4/5 mx-auto bg-white shadow rounded-lg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/roles" element={<ManageRoles />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
