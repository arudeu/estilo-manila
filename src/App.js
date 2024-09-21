import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/AppNavbar";
import Error from "./pages/Error";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AdminDashBoard from "./pages/AdminDashBoard"

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  function unsetUser() {
    localStorage.clear();
  }
  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <NavigationBar />
          <Routes>
            {/* ROUTE HERE */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
