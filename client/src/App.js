import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './component/signup';
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;