import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">ICAF</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link" ariaCurrent="page" to="/" activeClassName="active">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/" activeClassName="active">Downloads</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/" activeClassName="active" activeClassName="active">Researchers</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/" activeClassName="active">WorkShops</Link>
                        </li>
                    </ul>
                    <div class="d-flex" id="navbarText2">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/" activeClassName="active">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/" activeClassName="active">Register</Link>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </nav>

            
            
            </div>
        );
    }
}

export default NavBar;