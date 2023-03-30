import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../stores/user";

export const ProtectedRoute = () => {
  const { user } = useUserStore();

  return <>{!user.id ? <Navigate to="/" replace={true} /> : <Outlet />}</>;
};
