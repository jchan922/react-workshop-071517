import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom'

import HomePageComponent from './components/HomePageComponent.js'
import ContactsPageComponent from './components/ContactsPageComponent.js'

class App extends Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <nav>
                            <Link to="/home">Home </Link>
                            <Link to="/contacts">Contacts</Link>
                        </nav>

                        <Route path="/home" component={HomePageComponent}></Route>
                        <Route path="/contacts" component={ContactsPageComponent}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}

export default App;
