import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/common/Header/Header';
// import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <div>
        
      <Header/>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
    </div>
  );
}

export default App;
