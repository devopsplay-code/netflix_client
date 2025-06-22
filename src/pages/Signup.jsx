import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.type === "text" ? "name" : e.target.type]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert(res.data.message); // "User registered successfully"
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
