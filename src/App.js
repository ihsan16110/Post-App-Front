import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useAuth } from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Suspense, lazy } from "react";

const LazyHome = lazy(() => import("./pages/home/Home"));
const LazySignUp = lazy(() => import("./pages/signupform/SignUpForm"));
const LazyLogin = lazy(() => import("./pages/loginform/LoginForm"));
const LazyPostView = lazy(() =>
  import("./components/home/singlePost/PostView")
);
const LazyAbout = lazy(() => import("./pages/about/About"));

const App = () => {
  const { userDetails } = useAuth();
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route
            path="/signup"
            element={!userDetails.username ? <LazySignUp /> : <LazyHome />}
          />
          <Route
            path="/login"
            element={!userDetails.username ? <LazyLogin /> : <LazyHome />}
          />
          <Route path="/view-post/:id" element={<LazyPostView />} />
          <Route path="/about" element={<LazyAbout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
