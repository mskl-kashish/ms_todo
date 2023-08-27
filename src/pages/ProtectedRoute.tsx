import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
type ProtectedRouteProps = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token: string | null = localStorage.getItem("access_token");
  if (!token) {
    console.log(token, "tokentoken");
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
