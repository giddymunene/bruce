import React, { useEffect, useState } from "react";
import API from "../api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    name: "",
    location: "",
    price: "",
    currency: "USD",
  });

  // Fetch users and cars when dashboard loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await API.get("/auth/users");
        setUsers(userRes.data);

        const carRes = await API.get("/cars");
        setCars(carRes.data);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    if (window.confirm("Delete this user?")) {
      try {
        await API.delete(`/auth/users/${id}`);
        setUsers(users.filter((u) => u._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDeleteCar = async (id) => {
    if (window.confirm("Delete this car?")) {
      try {
        await API.delete(`/cars/${id}`);
        setCars(cars.filter((c) => c._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleAddCar = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/cars", newCar);
      setCars([...cars, res.data]);
      setNewCar({ name: "", location: "", price: "", currency: "USD" });
    } catch (err) {
      console.error("Error adding car:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">🛠️ Admin Dashboard</h1>

      {/* Users Table */}
      <h3>👤 Users</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUser(u._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cars Section */}
      <h3 className="mt-5">🚗 Cars</h3>

      {/* Add Car Form */}
      <form className="row g-3 mb-4" onSubmit={handleAddCar}>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Car Name"
            value={newCar.name}
            onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={newCar.location}
            onChange={(e) => setNewCar({ ...newCar, location: e.target.value })}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={newCar.price}
            onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
            required
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={newCar.currency}
            onChange={(e) => setNewCar({ ...newCar, currency: e.target.value })}
          >
            <option value="USD">USD</option>
            <option value="KES">KES</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">
            ➕ Add Car
          </button>
        </div>
      </form>

      {/* Cars Table */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Location</th><th>Price</th><th>Currency</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.location}</td>
              <td>{c.price}</td>
              <td>{c.currency}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteCar(c._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
