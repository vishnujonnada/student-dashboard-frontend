import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { HomePage } from "./components/HomePage";
import Logout from "./components/Logout";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}


export default App;
