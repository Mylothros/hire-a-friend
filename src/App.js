import LandingPage from './components/LandingPage/LandingPage.js';
import SignUp from './components/SignUp/SignUp.js';
import SignUpSuccess from './components/SignUp/SignUpSuccess.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element ={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup-success" element={<SignUpSuccess />} />   
    </Routes>
  </BrowserRouter>
  );
}

export default App;