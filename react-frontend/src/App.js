import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div class='container'>
          <Routes>
            <Route path='/' element={<ListEmployeeComponent/>}/>
            <Route path='/employees' element={<ListEmployeeComponent/>}/>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
