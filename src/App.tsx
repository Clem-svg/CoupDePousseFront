import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { CssBaseline, GlobalStyles } from "@mui/material";
import AppBar from "./app/features/appbar/AppBar";
import Dashboard from "./app/features/dashboard/Dashboard";
import Gardens from "./app/pages/Index";
import PrivateRoute from "./app/features/routes/PrivateRoute";
import PublicOnlyRoute from "./app/features/routes/PublicOnlyRoute";
import Login from "./app/features/sessions/Login";
import Logout from "./app/features/sessions/Logout";
import PersistLogin from "./app/features/sessions/PersistLogin";
import Signup from "./app/features/sessions/Signup";
import UpdateProfile from "./app/features/sessions/UpdateProfile";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import { Theme } from "@emotion/react";
import AboutPage from "./app/pages/GardenPage";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#085b48",
        light: "#4db6ac",
        contrastText: "#fbfbfb",
      },
      secondary: {
        main: "#f0394d",
        light: "#ef9a9a",
        contrastText: "#fbfbfb",
      },
      info: {
        main: "#02c6f3",
      },

      success: {
        main: "#17ad37",
      },

      warning: {
        main: "#f53939",
      },

      error: {
        main: "#ea0606",
      },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      htmlFontSize: 14,
      fontFamily: "Outfit",
      fontWeightRegular: 400,
      fontWeightBold: 700,
      h1: {
        fontSize: "4rem",
        fontFamily: '"Outfit", "Arial", sans-serif',
      },
      h2: {
        fontSize: "3rem",
      },
      h3: {
        fontFamily: '"Outfit", "Helvetica", "Arial", sans-serif',
        fontSize: "2rem",
      },
    },
  });

  theme.typography.h1 = {
    fontSize: "1.5rem",
    "@media (min-width:600px)": {
      fontSize: "1.75rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5em",
    },
  };

  theme.typography.h2 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };

  theme.typography.h3 = {
    fontSize: "1rem",
    "@media (min-width:600px)": {
      fontSize: "1.2em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };

  theme.typography.subtitle1 = {
    fontSize: "0.75rem",
    "@media (min-width:600px)": {
      fontSize: "1em",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.25rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#f8f9fa" },
        }}
      />

      <div className="App">
        <Router>
          <header className="App-header">
            <AppBar />
          </header>
          <main>
            <Routes>
              <Route element={<PersistLogin />}>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Gardens />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/logout"
                  element={
                    <PrivateRoute>
                      <Logout />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/update-profile"
                  element={
                    <PrivateRoute>
                      <UpdateProfile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicOnlyRoute>
                      <Login />
                    </PublicOnlyRoute>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <PublicOnlyRoute>
                      <Signup />
                    </PublicOnlyRoute>
                  }
                />
                <Route path="gardens">
                    <Route path=":id" element={<AboutPage />} />
                </Route>
              </Route>
            </Routes>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
