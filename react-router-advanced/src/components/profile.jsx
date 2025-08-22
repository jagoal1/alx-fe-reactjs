import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "../../pages/ProfileSettings";

export default function Profile() {
  return (
    <div style={{ padding: 16 }}>
      <h1>My Profile</h1>
      <nav style={{ marginBottom: 12 }}>
        <Link to="details" style={{ marginRight: 12 }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
