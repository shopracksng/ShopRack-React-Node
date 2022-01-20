import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AppDownload from './components/app-download/AppDownload';
import Blog from './components/blog-section/Blog';
import CustomerReview from './components/customer-review/CustomerReview';
import Footer from './components/footer-section/Footer';
import Navbar from './components/nav-seection/Navbar';
import Dropdown from './components/nav-seection/Dropdown';
import Services from './components/services/Services';
import Showcase from './components/showcase/Showcase';
import Signin from './routes/registration/Signin';
import Signup from './routes/registration/Signup';
import { ThemeContextProvider } from './context/ThemeContext';
// import { AuthUserContextProvider } from './context/AuthUserContext';
import Dashboard from './routes/dashboard/Dashboard';
import AlertState from './context/alert/AlertState';
import Alerts from './routes/alerts/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './routes/routing/PrivateRoute';
import AuthState from './context/auth/AuthState';
import ContactUs from './routes/contactus/ContactUs';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <AuthState>
      <AlertState>
        <ThemeContextProvider>
          <div className='overflow-x-hidden'>
            <Alerts />
            <Router>
              <Routes>
                <Route
                  exact
                  path='/'
                  element={
                    <>
                      <Navbar toggle={toggle} />
                      <Dropdown
                        isOpen={isOpen}
                        toggle={toggle}
                      />
                      <Showcase />
                      <Services />
                      <AppDownload />
                      <CustomerReview />
                      <Blog />
                      <Footer />
                    </>
                  }
                />

                <Route
                  exact
                  path='/signin'
                  element={<Signin />}
                />
                <Route
                  exact
                  path='/signup'
                  element={<Signup />}
                />
                <Route
                  exact
                  path='/contactus'
                  element={<ContactUs />}
                />
                {/* <Route
                  exact
                  path='/dashboard'
                  element={<Dashboard />}
                /> */}
                <Route
                  exact
                  path='/dashboard'
                  element={<PrivateRoute />}>
                  <Route
                    exact
                    path='/dashboard'
                    element={<Dashboard />}
                  />
                </Route>
              </Routes>
            </Router>
          </div>
        </ThemeContextProvider>
      </AlertState>
    </AuthState>
  );
}

export default App;
