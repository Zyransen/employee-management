import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div class='container'>
          <Routes>
            <Route path='/' element={<ListEmployeesComponent/>}/>
            <Route path='/employees' element={<ListEmployeesComponent/>}/>
            <Route path='/add-employee' element={<AddEmployeeComponent/>}/>
            <Route path='/update-employee/:id' element={<UpdateEmployeeComponent/>}/>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>
    
  );
}

export default App;
