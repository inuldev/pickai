"use client";

import React, { useState } from "react";

import LoginForm from "./LoginForm";

const AuthForm = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === "reset"
            ? "Reset Password"
            : mode === "login"
            ? "Login"
            : "Sign Up"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {mode === "reset"
            ? "Enter your email address to reset your password"
            : mode === "login"
            ? "Enter your email and password to login"
            : "Enter your information below to create an account"}
        </p>
      </div>
      {mode === "login" && <LoginForm />}
      {mode === "signup" && <span>Signup Form</span>}
      {mode === "reset" && <span>Reset Password Form</span>}
    </div>
  );
};

export default AuthForm;
