import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthLayout({ authentication = true, children }) {
  const authstatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authstatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authstatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authentication, authstatus, navigate]);

  return loader ? (
    <h1 className=" text-blue-500">Loading.....</h1>
  ) : (
    <>{children}</>
  );
}
