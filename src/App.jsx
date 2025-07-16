import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import GlobalStyles from "./styles/GlobalStyels";
import Layout from "./ui/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import BookingDetails from "./feateurs/bookings/BookingDetails";
import CheckedIn from "./pages/CheckedIn";
import ProtectedRouter from "./ui/ProtectedRouter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
    },
    mutations: {
      retry: 1,
      onError: (error) => alert(error.message),
      onSuccess: () => alert("Success😎"),
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouter>
                  <Dashboard />
                </ProtectedRouter>
              }
            />
            <Route
              path="/bookings"
              element={
                <ProtectedRouter>
                  <Bookings />
                </ProtectedRouter>
              }
            />
            <Route
              path="/bookings/:bookingId"
              element={
                <ProtectedRouter>
                  <BookingDetails />
                </ProtectedRouter>
              }
            />
            <Route
              path="/checked-in/:bookingId"
              element={
                <ProtectedRouter>
                  <CheckedIn />
                </ProtectedRouter>
              }
            />
            <Route
              path="/cabins"
              element={
                <ProtectedRouter>
                  <Cabins />
                </ProtectedRouter>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRouter>
                  <Settings />
                </ProtectedRouter>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRouter>
                  <Users />
                </ProtectedRouter>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRouter>
                  <Account />
                </ProtectedRouter>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
