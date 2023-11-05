import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.js';
import SignUp from './components/SignUp/SignUp.js';
import SignUpSuccess from './components/SignUp/SignUpSuccess.js';
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./index.css";

function App() {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route index element ={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-success" element={<SignUpSuccess />} />  
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

// Placed the context provider here so that <App/> can call useLocation()
const Root = () => <BrowserRouter><App /></BrowserRouter>; // prettier-ignore

render(<Root />, document.getElementById("root"));