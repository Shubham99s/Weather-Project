import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CitiesTable from './Components/CitiesTable';
import WeatherPage from './Components/WeatherPage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CitiesTable />} />
          <Route exact path="/weather/:cityName" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
