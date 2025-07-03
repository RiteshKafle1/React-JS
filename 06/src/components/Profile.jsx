import React from "react";
import userContext from "../context/userContext";

const Profile = () => {
  const { user } = React.useContext(userContext);

  if (!user) return <h4>Please login first</h4>;
  else return <h4>{user.username}</h4>;
};

export default Profile;
