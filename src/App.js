import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";

import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/featured-products";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequreAuth";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/react-router-demo" element={<Home />}></Route>
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route path="order-summary" element={<OrderSummary />}></Route>
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />}></Route>
            <Route path="featured" element={<FeaturedProducts />}></Route>
            <Route path="new" element={<NewProducts />}></Route>
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />}></Route>
            <Route path="admin" element={<Admin />}></Route>
          </Route>

          <Route
            path="Profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
