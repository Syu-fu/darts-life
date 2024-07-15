import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="h-screen bg-gray-100">
        <Header />
        <NavigationBar />
        <Routes />
      </div>
    </Router>
  );
};

export default App;
