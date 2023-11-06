import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import SignUpSuccess from './components/SignUp/SignUpSuccess';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Root() {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route index element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-success" element={<SignUpSuccess />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
