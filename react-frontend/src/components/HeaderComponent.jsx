import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                      <div><a href="/" class='text-light text-decoration-none'>Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;