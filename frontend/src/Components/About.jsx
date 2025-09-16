import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">ℹ️ About Us</h1>
        <p className="text-muted">Driven by passion, powered by trust.</p>
      </div>

      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card shadow-sm p-4">
            <p>
              <strong>CarHub</strong> is a trusted automotive platform based in{" "}
              <strong>Mombasa, Kenya</strong>. We specialize in helping customers
              explore, buy, and sell cars with ease. Our mission is to make the
              car ownership journey simple, transparent, and enjoyable.
            </p>
            <p>
              Being located in <strong>Mombasa</strong>, the gateway to East
              Africa, gives us a unique advantage in sourcing and delivering
              quality vehicles. Whether you’re looking for a family car, a
              luxury ride, or a reliable business vehicle, CarHub is here to
              connect you with the right choice.
            </p>
            <p>
              We pride ourselves on providing excellent customer service, fair
              pricing, and a wide variety of vehicles. Our team of automotive
              experts ensures every car meets the highest standards before being
              listed on our platform.
            </p>
            <p className="fw-bold text-success text-center mt-3">
              🚗 CarHub – Your trusted car partner in Mombasa and beyond!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
