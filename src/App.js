import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActualResume from "./Mycomponents/ActualResume";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<ActualResume />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
