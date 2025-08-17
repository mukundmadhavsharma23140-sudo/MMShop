import { useEffect, useState } from "react";
import { getProfile, logoutUser } from "../api/userApi";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getProfile();
      setProfile(data);
    })();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setProfile(null);
  };

  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>No profile loaded</p>
      )}
    </div>
  );
}
