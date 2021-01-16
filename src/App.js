import React from 'react';
import Homepage from 'pages/Homepage';
import 'assets/sass/styles.sass';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Homepage />
            <Footer />
        </div>
    );
}

export default App;
