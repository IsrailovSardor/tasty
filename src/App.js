import './App.css';
import Main from "./pages/main/Main";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import CareerPage from './pages/CareerPage/CareerPage';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<AboutUsPage/>}/>
                <Route path="/career" element={<CareerPage/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
