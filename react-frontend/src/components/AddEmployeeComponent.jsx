import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import withRouter from './withRouter';

class AddEmployeeComponent extends Component {
  constructor(props){
    super (props)

    this.state = {
        firstName: "",
        lastName: "",
        email: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  saveEmployee = (event) => {
    event.preventDefault()
    let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email}
    EmployeeService.saveEmployee(employee).then(res => {
      this.props.navigate('/employees')
    })

  }

  render() {
        return (
            <div>
               <div class="container">
                <div class="row">
                  <div class="card col-md-6 offset-md-3">
                    <h2 class="text-center">Add Employee</h2>
                    <div class="card-body">
                      <form action="">
                        <div class="form-group">
                          <label>First Name:</label>
                          <input type="text" placeholder="First Name" name="firstName" class="form-control" value={this.state.firstName} onChange={this.handleChange}/>
                        </div>
                        <div class="form-group">
                          <label>Last Name:</label>
                          <input type="text" placeholder="Last Name" name="lastName" class="form-control" value={this.state.lastName} onChange={this.handleChange}/>
                        </div>  
                        <div class="form-group">
                          <label>Email:</label>
                          <input type="text" placeholder="Email" name="email" class="form-control" value={this.state.email} onChange={this.handleChange}/>
                        </div>

                        <button class="btn btn-success" style={{marginTop: "10px"}} onClick={this.saveEmployee}>Save</button>
                        <Link to="/employees">
                        <button class="btn btn-danger" style={{marginLeft: "10px", marginTop: "10px"}}>Cancel</button>
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
               </div>
            </div>
        );
    }
}

export default withRouter(AddEmployeeComponent);