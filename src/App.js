
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/jewelry-by-:category" element={<></>} />
      <Route path="/products/jewelry-by-:category/:subcategory" element={<></>}/>
     </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
