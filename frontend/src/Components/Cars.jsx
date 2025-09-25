import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import API from "../api";

function Cars() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ make: "", model: "", year: "", price: "" });
  const [role, setRole] = useState(localStorage.getItem("role")); 
  const navigate = useNavigate();

  const fetchCars = async () => {
    try {
      const res = await API.get("/cars");
      setCars(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const addCar = async () => {
    try {
      await API.post("/cars", newCar);
      setNewCar({ make: "", model: "", year: "", price: "" });
      fetchCars();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const deleteCar = async (id) => {
    try {
      await API.delete(`/cars/${id}`);
      fetchCars();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    setRole(null);
    navigate("/");
  };

  return (
    <div className="cars-container">
      <div className="cars-header">
        <h1 className="cars-title">Cars</h1>
        {role && (
          <button onClick={handleLogout} className="auth-btn logout">
            Logout
          </button>
        )}
      </div>

      {/* Cars List */}
      <ul className="cars-list">
        {cars.map((car) => (
          <li key={car._id} className="car-card">
            <span className="car-info">
              {car.year} {car.make} {car.model} - ${car.price}
            </span>
            {role === "admin" && (
              <button 
                onClick={() => deleteCar(car._id)}
                className="auth-btn danger"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Add car form */}
      {role === "admin" && (
        <div className="add-car-form">
          <h2 className="form-title">Add New Car</h2>
          <div className="form-row">
            <input 
              type="text" placeholder="Make"
              value={newCar.make}
              onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
            />
            <input 
              type="text" placeholder="Model"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            />
          </div>
          <div className="form-row">
            <input 
              type="number" placeholder="Year"
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
            />
            <input 
              type="number" placeholder="Price"
              value={newCar.price}
              onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
            />
          </div>
          <button onClick={addCar} className="auth-btn">
            Add Car
          </button>
        </div>
      )}
    </div>
  );
}

export default Cars;
