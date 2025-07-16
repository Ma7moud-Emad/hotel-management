import { Navigate } from "react-router-dom";

export default function ProtectedRouter({ children }) {
  if (!localStorage["sb-tpnazochmapbixyunstp-auth-token"]) {
    return <Navigate to="/login" replace={true} />;
  }
  return <>{children}</>;
}
