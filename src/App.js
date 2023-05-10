import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Result from './components/Result';
import NoPage from './components/NoPage';


function App() {
  return (
    <div>  

  <BrowserRouter>
    <Routes>
        <Route>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
