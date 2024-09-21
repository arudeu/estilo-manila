import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Notyf } from "notyf";

import UserContext from "../context/UserContext";

export default function Logout() {
  const { setUser, unsetUser } = useContext(UserContext);
  const notyf = new Notyf();

  unsetUser();

  useEffect(() => {
    setUser({
      id: null,
      isAdmin: null,
    });
  });

  return <Navigate to="/login" />;
}
