import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { CssBaseline, GlobalStyles } from "@mui/material";
import AppBar from './app/features/appbar/AppBar';
import Dashboard from './app/features/dashboard/Dashboard';
import PrivateRoute from './app/features/routes/PrivateRoute';
import PublicOnlyRoute from './app/features/routes/PublicOnlyRoute';
import Login from './app/features/sessions/Login';
import Logout from './app/features/sessions/Logout';
import PersistLogin from './app/features/sessions/PersistLogin';
import Signup from './app/features/sessions/Signup';
import UpdateProfile from './app/features/sessions/UpdateProfile';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#085b48',
        light: '#4db6ac',
        contrastText: '#fbfbfb',

      },
      secondary: {
        main: '#f0394d',
        light: '#ef9a9a',
        contrastText: '#fbfbfb',
      },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: "Outfit", 
      fontWeightRegular: 400,
      fontWeightBold: 700,
      h3: {
        fontFamily: '"Outfit", "Helvetica", "Arial", sans-serif',
        fontSize: '2rem',
      },
      h1: {
        fontSize: '4rem',
        fontFamily: '"Outfit", "Arial", sans-serif',
      },
      h2: {
        fontSize: '3rem',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
          styles={{
            body: { backgroundColor: "#FFF" },
          }}/>

      <div className="App">
        <Router>
        <header className="App-header">
          <AppBar />
        </header>
        <main>
          <Routes>
            <Route element={<PersistLogin />}>
              <Route path="/" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/logout" element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
              } />
              <Route path="/update-profile" element={
                <PrivateRoute>
                  <UpdateProfile/>
                </PrivateRoute>
              }/>
              <Route path="/login" element={
                  <PublicOnlyRoute>
                    <Login />
                  </PublicOnlyRoute> 
                }/>
                <Route path="/signup" element={
                  <PublicOnlyRoute>
                    <Signup />
                  </PublicOnlyRoute> 
                }/>
            </Route>
          </Routes>
        </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
function pxToRem(arg0: number) {
  throw new Error('Function not implemented.');
}

