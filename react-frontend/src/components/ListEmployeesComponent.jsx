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
                <h2 class='text-center fs-1 fw-semibold' style={{marginTop: "1.5%", marginBottom: "2%"}}>Employee List</h2>
                <div class='row'>
                    <table class='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th class="text-center" style={{width: "28%"}}>First Name</th>
                                <th class="text-center" style={{width: "28%"}}>Last Name</th>
                                <th class="text-center" style={{width: "28%"}}>Email</th>
                                <th class="text-center" style={{width: "16%"}}>Actions</th>
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
                                          <div class="d-flex justify-content-evenly">
                                            <Link to={`/update-employee/${employee.id}`}>
                                              <button class="btn btn-info">Update</button>  
                                            </Link>
                                            <button class="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                          </div>
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