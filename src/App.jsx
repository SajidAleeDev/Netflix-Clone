import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./Feature/userReducer";
import Profile from "./Profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const Dispatch = useDispatch();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        Dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        Dispatch(logout());
      }
    });
    return unsub;
  }, [Dispatch]);
  return (
    <>
      <div className="app">
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route exact path="/Profile" element={<Profile />} />
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
