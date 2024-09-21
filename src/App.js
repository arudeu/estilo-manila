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
<<<<<<< HEAD
import ProductsView from "./pages/ProductsView";
=======
import AdminDashBoard from "./pages/AdminDashBoard"
>>>>>>> de82653a0c639b54b3d6ff7f0ababe3967a5b820

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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
<<<<<<< HEAD
            <Route path="/product/:productId" element={<ProductsView />} />
=======
            <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
>>>>>>> de82653a0c639b54b3d6ff7f0ababe3967a5b820
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
