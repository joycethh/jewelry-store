
import './App.css';
import Home from './pages/Home';
import ProductLists from './pages/ProductLists';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/products/jewelry/:category" element={<ProductLists />} />
     <Route path="/products/jewelry/:category/:subcategory?" element={<ProductLists />}/>
      {/* <Route path="/products/jewelry/:category/:subcategory" element={<ProductLists />}/> */}
     </Routes>
     </BrowserRouter>
  );
}

export default App;
