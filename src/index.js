import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Products1 from "./pages/Products1";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Layout />}
        >

          <Route
            index
            element={<Home />}
          />

          <Route
            path="Home"
            element={<Home />}
          />

          <Route
            path="Login"
            element={<Login />}
          />

          <Route
            path="Register"
            element={<Register />}
          />

          <Route
            path="Products"
            element={<Products />}
          />

          <Route
            path="products1"
            element={<Products1 />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);