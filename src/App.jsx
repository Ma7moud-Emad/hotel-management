import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/SignIn";
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
import SignUp from "./pages/SignUp";
import ThemeProvider from "./context/ThemeContext";
import ChangePassword from "./pages/ChangePassword";

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
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRouter>
                  <Layout />
                </ProtectedRouter>
              }
            >
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/bookings/:bookingId" element={<BookingDetails />} />
              <Route path="/checked-in/:bookingId" element={<CheckedIn />} />
              <Route path="/cabins" element={<Cabins />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<Users />} />
              <Route path="/account" element={<Account />} />
              <Route path="/changePassword" element={<ChangePassword />} />
            </Route>

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
