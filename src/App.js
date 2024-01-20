import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login';
import SignUp from './Signup';
import Dashboard from './Dashboard';
import Table from './Table';
import CircularWithValueLabel from './CircularProgress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<Table />} />
        <Route path="/progress" element={<CircularWithValueLabel />} />
      </Routes>
    </Router>
  );
}

export default App;
