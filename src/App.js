import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </div>
  );
}

export default App;
