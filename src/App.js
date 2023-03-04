
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sample from "./routes/Sample"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Sample />} />
      </Routes>
    </div>
  );
}

export default App;
