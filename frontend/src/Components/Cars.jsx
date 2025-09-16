
import { useEffect, useState } from "react";
import API from "../api";

function Cars() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ make: "", model: "", year: "", price: "" });
  const [role, setRole] = useState(localStorage.getItem("role")); // stored after login

  // Fetch cars
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

  // Add new car (admin only)
  const addCar = async () => {
    try {
      await API.post("/cars", newCar);
      setNewCar({ make: "", model: "", year: "", price: "" });
      fetchCars();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // Delete car (admin only)
  const deleteCar = async (id) => {
    try {
      await API.delete(`/cars/${id}`);
      fetchCars();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Cars</h1>

      {/* Show cars */}
      <ul className="space-y-2">
        {cars.map((car) => (
          <li key={car._id} className="border p-2 flex justify-between">
            <span>{car.year} {car.make} {car.model} - ${car.price}</span>
            {role === "admin" && (
              <button 
                onClick={() => deleteCar(car._id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Add car form (admin only) */}
      {role === "admin" && (
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Add New Car</h2>
          <input 
            type="text" placeholder="Make"
            value={newCar.make}
            onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
            className="border p-1 mr-2"
          />
          <input 
            type="text" placeholder="Model"
            value={newCar.model}
            onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            className="border p-1 mr-2"
          />
          <input 
            type="number" placeholder="Year"
            value={newCar.year}
            onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
            className="border p-1 mr-2"
          />
          <input 
            type="number" placeholder="Price"
            value={newCar.price}
            onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
            className="border p-1 mr-2"
          />
          <button 
            onClick={addCar}
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default Cars;
