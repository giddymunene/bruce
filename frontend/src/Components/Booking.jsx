// src/pages/Booking.jsx
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Booking.css"; 

function Booking() {
  const location = useLocation();
  const { car } = location.state || {};
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",     // replace with EmailJS service ID
        "your_template_id",    // replace with EmailJS template ID
        formRef.current,
        "your_public_key"      // replace with EmailJS public key
      )
      .then(
        () => {
          alert("✅ Booking request sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">📌 Book Your Car</h2>

      {car && (
        <div className="booking-car-details">
          <h3>{car.year} {car.make} {car.model}</h3>
          <p>💰 Price: ${car.price}</p>
          <p>📍 Location: Mombasa, Kenya</p>
        </div>
      )}

      <form ref={formRef} onSubmit={sendEmail} className="booking-form">
        <input type="hidden" name="car" value={`${car?.year} ${car?.make} ${car?.model}`} />

        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" required />
        </div>

        <div className="form-group">
          <label>Booking Period</label>
          <input type="text" name="period" placeholder="e.g. 3 days" required />
        </div>

        <div className="form-group">
          <label>ID / Driving Licence Number</label>
          <input type="text" name="id_number" required />
        </div>

        <button type="submit" className="auth-btn">Send Booking</button>
      </form>
    </div>
  );
}

export default Booking;
