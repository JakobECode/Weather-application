import './style/css/App.css';
import NavBar from './components/NavBar';
import WeatherPanel from './services/WeatherService';



function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;
