import React from 'react';
import {Grid, Button, Input, InputAdornment, IconButton, Typography} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {SearchRow} from '../components/SearchTile';
import './Search.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faThLarge,
    faList,
    faMapMarkerAlt,
    faHashtag,
    faDollarSign,
    faCalendar,
    faCalendarAlt,
    faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../components/Dropdown'
import Toggle from '../components/Toggle';
import ItemList from './Getter'


////////////// Zbyva jen smazat mapovani studentu

function sortTiles(a, b) {
    //console.log(a,b);
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    return 0;
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: decodeURI(window.location.search.substr(3)),
            events: [],
            // vymyslet s tlacitkama headeru tab: (this.props && this.props.tab) ? this.prop.tab : "all",
            tab: this.props.match.params.what ? this.props.match.params.what : "events",
            tileMode: true,
            currentSearch: "y"
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.what != this.props.match.params.what) {
            if (["companies", "internships", "events"].includes(this.props.match.params.what)) {
                this.setState({tab: this.props.match.params.what})
            }
        }
    }

    async fetchData(){
        const productsRes = await fetch('http://localhost:5000/services');
        const products = await productsRes.json(); 
        return products;   
    }

    async componentDidMount() {
        const data = await this.fetchData();
        this.setState({events: data});
    }

    filter(array, string) {
        return array.filter(item => {
            switch(this.state.currentSearch){
                case "spz":
                    if (item.spz.toLowerCase().includes(string.toLowerCase())) return true;
                    return false;
                    
                case "date":
                    if (item.date.toLowerCase().includes(string.toLowerCase())) return true;
                    return false;
                    
                case "tech":
                    if (item.technicsName.toLowerCase().includes(string.toLowerCase())) return true;
                    return false;
                    
                case "desc":
                    if (item.description.toLowerCase().includes(string.toLowerCase())) return true;
                    return false;
                    
                default:
                    if (item.spz.toLowerCase().includes(string.toLowerCase())) return true;
                    return false;                    
            }
            
        })
    }

    mapEvents() {
        console.log(this.state);

        var i = 20;
        return this.filter(this.state.events, this.state.search).map(event => {
                return {
                    if: event.id,
                    date: event.date,
                    kmStatus: event.kmStatus,
                    description: event.description,
                    materials: event.materials,
                    technicsName: event.technicsName,
                    spz: event.spz,
                    link: "/event/" + event.id,
                };
            }
        )  //.sort((a, b) => sortTiles(a, b))
    }

    mapToGrid(array) {
        return array.map(item => <Grid item xs={12}>
                <Link to={item.link} className="notA" target={"blank"}>
                    <SearchRow {...item}/>
                </Link>
            </Grid>
        )
    }

    render() {
        return <main id="searchMain">
            <h1>Prehliadka opráv</h1>
            <Input
                onChange={(e) => this.setState({search: e.target.value})}
                label="Search"
                value={this.state.search}
                style={{padding: ".5em"}}
                className="searchBar"
                type="text"
                placeholder="Filter (funguje na spz)"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={(e) => {
                            if (this.state.search.length) this.props.history.push("/search?q=" + this.state.search)
                        }}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </IconButton>
                    </InputAdornment>
                }

            /><br/>
            <br/>

            <Button onClick={() => this.setState({tileMode: !this.state.tileMode})}>
                <FontAwesomeIcon icon={this.state.tileMode ? faThLarge : faList}/>
            </Button>

            <br/>
            <section>
                <Dropdown
                //    icon={faMapMarkerAlt}
                //    options={{
                //        "": "Vybrat město",
                //        Brno: "Brno",
                //        Praha: "Praha"
                //    }}
                //    onChange={(value) => console.log(value)}
                //    style={{margin: "0em .5em .5em 0em"}}
                />

                <Dropdown
                    icon={faHashtag}
                    options={{
                        "": "Vybrať kategoriu",
                        "spz": "ŠPZ",
                        "date": "Dátum",
                        "tech": "Meno technika",
                        "desc": "Popis"
                    }}
                    onChange={(value) => this.setState({currentSearch: value})}
                    style={{margin: "0em .5em .5em 0em"}}
                />

                <Toggle
                    text="Len nasledujúce dni"
                    icon={faCalendarCheck}
                    style={{margin: "0em"}}
                    onChange={(value) => console.log(value)}
                />
            </section>
                          
            <Grid container spacing={3} id="searchResults">
                {this.mapToGrid(this.state.tab === "events" ? this.mapEvents() : [])}
            </Grid>

            
        </main>
    }
}

export default withRouter(Search);