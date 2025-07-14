import React from "react";
import { useAuth } from "./AuthContext";
import PrivatePage from "./PrivatePage";
import LoginPage from "./LoginPage";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <h1>Hello</h1>
      {isAuthenticated() ? <PrivatePage /> : <LoginPage />}
    </div>
  );
}
