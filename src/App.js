import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Mycomponents/LoginForm';
import Resume from './Mycomponents/Resume';
import ActualResume from './Mycomponents/ActualResume';
import SearchBar from './Mycomponents/SearchBar';
import Header from './Mycomponents/Header';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<ActualResume/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
