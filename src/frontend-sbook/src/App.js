import React from 'react';
import './App.css';
import {mainTheme} from './theme.js';
import {ThemeProvider} from '@material-ui/core';
/*Components*/
import Header from './components/Header.js';
import Footer from './components/Footer.js';
/* Router */
import {BrowserRouter as Router} from "react-router-dom";
import {MySwitch} from './Routes';


export class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={mainTheme}>
                <Router>
                    <div className="App">
                        <Header/>
                        <MySwitch/>
                        <Footer/>
                    </div>
                </Router>
            </ThemeProvider>
        );
    }
}
export default App;