import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Character from "./Character";
import Characters from "./Characters";

import './App.css';


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                <ToastContainer />

                <Switch>
                    <Route exact path="/">
                        <Characters/>
                    </Route>
                    <Route exact path="/character/:id">
                        <Character/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
