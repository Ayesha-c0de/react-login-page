import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-row">
          <label>Name:</label>
          <input type="text" />
        </div>

        <div className="login-row">
          <label>Password:</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
            />
            <span
              className={`eye-icon ${showPassword ? "open" : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <button>Login</button>
      </div>
    </div>
  );
}
