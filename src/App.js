import './reset.css';
import Landingpage from './Landingpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
