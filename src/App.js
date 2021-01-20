import 'assets/sass/styles.sass';
import Homepage from 'pages/Homepage';
import Login from 'pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app-wrapper">
            <Router>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Homepage} />
            </Router>
        </div>
    );
}

export default App;
