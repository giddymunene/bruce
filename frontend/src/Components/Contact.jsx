import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">📞 Contact Us</h1>
        <p className="text-muted">
          We’d love to hear from you! Reach out via email, phone, or leave us a
          message below.
        </p>
      </div>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4">
            <h3 className="text-secondary">Get in Touch</h3>
            <p><strong>Email:</strong> support@carhub.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 123 CarHub Street, Nairobi, Kenya</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4">
            <h3 className="text-secondary">Send us a Message</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-5">
        <h2 className="text-center fw-bold text-success">⭐ Customer Reviews</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3">
              <p>
                "CarHub made my car purchase so smooth and easy. Amazing service
                and friendly staff!"
              </p>
              <h6 className="text-end">- John Doe</h6>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3">
              <p>
                "Very professional team. The support staff was quick to answer
                all my questions."
              </p>
              <h6 className="text-end">- Sarah W.</h6>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3">
              <p>
                "I highly recommend CarHub. Best prices and reliable cars. Five
                stars from me!"
              </p>
              <h6 className="text-end">- Michael K.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
