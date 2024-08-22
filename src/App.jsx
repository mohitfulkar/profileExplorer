import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const UserPage = lazy(() => import("./pages/UserPage"));
const Home = lazy(() => import("./pages/Home"));
const ProgressSpinner = lazy(() => import("./components/ProgressSpinner"));
const ProfileDetails = lazy(() => import("./pages/ProfileDetails"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<ProgressSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
