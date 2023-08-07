import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-md navbar-dark bg-dark" style={{height: "50px"}}>
                      <div style={{paddingLeft: "2%"}}><a href="/employees" class='text-light navbar-brand'>Employee Management App</a></div>
                      <div style={{paddingLeft: "2%"}}><a href="/add-employee" class='text-light text-decoration-none'>Add Employee</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;