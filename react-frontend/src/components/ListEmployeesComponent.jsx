import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom'

class ListEmployeeComponent extends Component {
    constructor(props){
        super (props)

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
      this.loadEmployees()
    }

    loadEmployees() {
      EmployeeService.getEmployees().then((res) => {
        this.setState({employees: res.data})
      })
    }
    handle() {
      console.log('kek')
    }

    deleteEmployee(employeeId) {
      console.log('yayayay')
      EmployeeService.deleteEmployee(employeeId).then((res) => {
        if(res.data.deleted){
          this.loadEmployees()
        }
      })
    }

    render() {
        return (
            <div>
                <h2 class='text-center'>Employee List</h2>
                <div class='row'>
                    <Link to="/add-employee">
                      <button class='btn btn-primary'>Add Employee</button>
                    </Link>
                </div>
                <div class='row'>
                    <table class='table table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.email} </td>
                                        <td> 
                                          <Link to={`/update-employee/${employee.id}`}>
                                            <button class="btn btn-info">Update</button>  
                                          </Link>
                                          <button class="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;