import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !password) {
      setError("Please enter your name and password.");
    return;
      }
      setError("");
      console.log("Login form submitted for:", name);
    }
  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <div className="login-row">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {setName(e.target.value); setError("");}}
          />
        </div>

        <div className="login-row">
          <label>Password:</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {setPassword(e.target.value); setError("");}}
            />
            <span
              className={`eye-icon ${showPassword ? "open" : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
