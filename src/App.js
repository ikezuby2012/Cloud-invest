import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import landingPage from "./pages/landingPage";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard/dashboard";
import Wallet from "./pages/Dashboard/Wallet";
import Market from "./pages/Dashboard/Market";
import Billing from "./pages/Dashboard/Billing";
import Profile from "./pages/Dashboard/Profile";
import ProtectedRoute from "./components/utils/ProtectedRoute";


import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={landingPage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/dashboard/wallet" component={Wallet} />
      <ProtectedRoute exact path="/dashboard/market" component={Market} />
      <ProtectedRoute exact path="/dashboard/billing" component={Billing}/>
      <ProtectedRoute exact path="/dashboard/profile" component={Profile}/>
    </BrowserRouter>
  );
};

export default App;
