
import { useState } from "react";
import API from "../api";
function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      window.location.href = "/cars"; // redirect after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text" placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className="border p-1 block mb-2"
      />
      <input
        type="password" placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-1 block mb-2"
      />
      <button 
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Login
      </button>
    </div>
  );
}


export default Login;
