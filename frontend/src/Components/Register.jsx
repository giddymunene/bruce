
import { useState } from "react";
import API from "../api";
function Register() {
  const [form, setForm] = useState({ username: "", password: "", role: "user" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);
      setMessage("User registered successfully! You can now login.");
      setError("");
      setForm({ username: "", password: "", role: "user" });
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      setMessage("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Register</h1>

      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className="border p-1 block mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-1 block mb-2"
      />
      <select
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        className="border p-1 block mb-2"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-1 rounded"
      >
        Register
      </button>
    </div>
  );
}

export default Register;
