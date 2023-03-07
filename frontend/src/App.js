import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Services from "./components/main/Services";
//import UserAuth from "./auth/UserAuth";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
//import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";
import AddMusic from "./components/admin/AddMusic";
import MusicListing from "./components/main/MusicListing";
import MusicPlayer from "./components/main/MusicPlayer";
import ManageUser from "./components/admin/ManageUser";
import ManageUserProfile from "./components/admin/ManageUserProfile";
import ManageToDo from "./components/admin/ManageToDo";
import ManageStudyMethods from "./components/admin/ManageStudyMethods";
import ManageMusic from "./components/admin/ManageMusic";
import ManageReminder from "./components/admin/ManageReminder";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
              <Route element={<AddMusic />} path="addmusic" />
            </Route>

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              <Route element={<About />} path="aboutus" />
              <Route element={<Contact />} path="contact" />
              <Route element={<Services />} path="services" />
              <Route element={<Login />} path="login" />
              <Route element={<Signup />} path="signup" />
              <Route element={<AddMusic />} path="addmusic" />
              <Route element={<MusicListing />} path="musiclisting" />
              <Route element={<MusicPlayer />} path="musicplayer" />
              <Route element={<ManageUser />} path="manageuser" />
              <Route element={<ManageUserProfile />} path="manageuserprofile" />
              <Route element={<ManageToDo />} path="managetodo" />
              <Route element={<ManageStudyMethods />} path="managestudymethods" />
              <Route element={<ManageMusic />} path="managemusic" />
              <Route element={<ManageReminder />} path="managereminder" />
            </Route>

            <Route
              element={
                // <UserAuth>
                // </UserAuth>
                <User />
              }
              path="user"
            >
              <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
