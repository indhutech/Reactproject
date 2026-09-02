import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Here you can add validation or save data

    alert("Registration Successful!");

    // Navigate to Home page
    navigate("/Home");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center text-success mb-4">
              MYGROCERY WELCOMES YOU
            </h2>

            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label d-block">Gender</label>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                  />
                  <label className="form-check-label">Male</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter mobile number"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter your address"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success w-100">
                Register
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;