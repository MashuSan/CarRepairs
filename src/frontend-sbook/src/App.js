import React from 'react';
import './App.css';
import {mainTheme} from './theme.js';
import {AppBar, Drawer, IconButton, ThemeProvider, Toolbar, Typography,} from '@material-ui/core';
/* Package components*/
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
/*Components*/
import Header from './components/Header.js';
import Footer from './components/Footer.js';
/* Router */
import {BrowserRouter as Router} from "react-router-dom";
import {MyList, MySwitch} from './Routes';


/**
 * The whole application
 * @prop {Student/Company} user student/company information
 */
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            menuOpen: false,
           //////////// headerClicked: "",
        };

    }


    /**
     * Loads user data
     */
    componentDidMount() {
        console.log("AppRoot works");
        ///COOKIES F5 mě ohlásí
    }
    /**
     * Toggles sidebar menu
     */
    toggleMenu() {
        this.setState({menuOpen: !this.state.menuOpen});
    }
    render() {
        return (
            <ThemeProvider theme={mainTheme}>
                <Router>
                    <div className="App">
                        <Header
                            toggleMenu={() => this.toggleMenu()}
                            classes={{paper: "drawer"}}
                        />
                        <Drawer open={this.state.menuOpen} onClose={() => this.toggleMenu()}>
                            <AppBar position="sticky">
                                <Toolbar>
                                    <IconButton edge="start" color="inherit" aria-label="menu"
                                                onClick={() => this.toggleMenu()}>
                                        <FontAwesomeIcon icon={faChevronLeft}/>
                                    </IconButton>
                                    <Typography variant="h6" className="title">
                                        Interns.cz
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <MyList  menu={() => this.toggleMenu()}/>
                        </Drawer>
                        <MySwitch/>
                        <Footer/>
                    </div>
                </Router>
            </ThemeProvider>
        );
    }
}
export default App;