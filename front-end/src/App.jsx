import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SendMoney from "./pages/SendMoney";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import Logout from "./pages/Logout";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    // to check the token from backend and local storage?
    const token = localStorage.getItem("token");
    if(token){
      setIsAuthenticated(true);
      }
  }, [isAuthenticated])
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/send" element={<SendMoney />} />
        {/* <ProtectedRoute
          path="/dashboard"
          element={<Dashboard />}
          isAuthenticated={isAuthenticated}
        /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
