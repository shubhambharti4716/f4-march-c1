import React, { useState } from "react";
import "./signUpForm.css";


const SignUpForm = () => {
  // for input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // for input validation
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  //for focus
  const [isEmailFocused, setEmailIsFocused] = useState(false);
  const [isPasswordFocused, setPasswordIsFocused] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordIsFocused] = useState(false);

  // validate email format
  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(emailRegex.test(value));
  };

  // validate password length
  const validatePassword = (value) => {
    setPasswordValid(value.length >= 8);
  };

  // confirm password
  const validateConfirmPassword = (value) => {
    setConfirmPasswordValid(value === password);
  };

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setEmailValid(false);
      setPasswordValid(false);
      setConfirmPasswordValid(false);
    } else {
      alert("Form cannot be submitted!");
    }
  };
  

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            onFocus={() => setEmailIsFocused(true)}
            onBlur={() => setEmailIsFocused(false)}
            style={{
              border: isEmailFocused
                ? "2px solid blue"
                : emailValid
                ? "2px solid green"
                : "2px solid red",
            }}
          />
          {!emailValid && <p style ={{color : "red"}}>Invalid email format</p>} 
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            
            onFocus={() => setPasswordIsFocused(true)}
            onBlur={() => setPasswordIsFocused(false)}
            style={{
              border: isPasswordFocused
                ? "2px solid blue"
                : passwordValid
                ? "2px solid green"
                : "2px solid red",
            }}
          />
          {!passwordValid && (
            <p style ={{color : "red"}}>Password must be at least 8 characters</p>
          )}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
            }}
            onFocus={() => setConfirmPasswordIsFocused(true)}
            onBlur={() => setConfirmPasswordIsFocused(false)}
            style={{
              border: isConfirmPasswordFocused
                ? "2px solid blue"
                : confirmPasswordValid
                ? "2px solid green"
                : "2px solid red",
            }}
          />
          {!confirmPasswordValid && (
            <p style ={{color : "red"}}>Passwords do not match</p>
          )}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
