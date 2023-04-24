import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Coin from './components/pages/Coin/Coin';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/coin/:id" element={<Coin/>} />
        </Routes>
    </div>
  );
}

export default App;
