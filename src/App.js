import 'assets/sass/styles.sass';
import AuthenticatedRoute from 'components/auth/AuthenticatedRoute';
//import ProtectedRoute from 'components/auth/ProtectedRoute';
import Homepage from 'pages/Homepage';
import Login from 'pages/Login';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    //TODO: In process. change place this
    const authenticated = window.localStorage.getItem('authenticated') || false;

    useEffect(() => {
        window.localStorage.setItem('authenticated', authenticated);
    }, [authenticated]);

    return (
        <div className="app-wrapper">
            <Router>
                <Route exact path="/login" component={Login} />
                <AuthenticatedRoute exact path="/" component={Homepage} isAuth={authenticated} />
            </Router>
        </div>
    );
}

export default App;
