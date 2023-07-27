import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./components/homepage";
import ResponsiveAppBar from "./components/navbar";
import Contents from "./components/contents";
function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/detection" element={<Contents />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
