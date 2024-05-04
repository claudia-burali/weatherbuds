
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherBudsNav from "./components/WeatherBudsNav";
import WeatherBudsFot from './components/WeatherBudsFot';
import WeatherBudsMain from './components/WeatherBudsMain';
import WeatherFetch from './components/WeatherFetch';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <WeatherBudsNav />
          <Routes>
            <Route path="/" element={<WeatherBudsMain />} />
            <Route path="/WeatherFetch" element={<WeatherFetch />} />
          </Routes>
          <WeatherBudsFot />
        </BrowserRouter>
      </div>
  );
}

export default App;

