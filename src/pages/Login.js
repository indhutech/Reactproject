import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form refresh
    navigate("/");  // Go to Home page
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow p-4">
            <h2 className="text-center text-success mb-4">
              Welcome Customer!!!
            </h2>

            <form onSubmit={handleLogin}>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>

              {/* Login Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-success"
                  onClick={() => alert(`Login sucessfully!!`)}>
                  Login
                </button>
              </div>

              {/* Register Link */}
              <div className="text-center mt-3">
                <p>
                  Don't have an account?{" "}
                  <a href="/register" className="text-decoration-none">
                    Register
                  </a>
                </p>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;