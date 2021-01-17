import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from 'pages/Homepage';
import 'assets/sass/styles.sass';

function App() {
    return (
        <div className="app-wrapper">
            <Router>
                <Route exact path="/" component={Homepage} />
            </Router>
        </div>
    );
}

export default App;
