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
    faDollarSign
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
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.what != this.props.match.params.what) {
            if (["companies", "internships", "events"].includes(this.props.match.params.what)) {
                this.setState({tab: this.props.match.params.what})
            }
        }
    }


    componentDidMount() {
        //downloadRecords -> to array
    }

    filter(array, string) {
        return array.filter(item => {
            if (item.name.toLowerCase().includes(string.toLowerCase())) return true;
            return false;
        })
    }

    mapEvents() {
        console.log(this.state);

        var i = 20;
        return this.filter(this.state.events, this.state.search).map(event => {
                const subtitleString = (event.day + "." + event.month + "." + event.year) +
                    (event.setTime ? (" (" +
                            event.hourStart + ":" + (event.minStart < 10 ? "0" + event.minStart : event.minStart) + " - " +
                            event.hourEnd + ":" + (event.minEnd < 10 ? "0" + event.minEnd : event.minEnd)
                            + ")") : ""
                    );
                return {
                    title: event.name,
                    subtitle: subtitleString,
                    setTime: event.setTime,

                    hourEnd: event.hourEnd,
                    hourStart: event.hourStart,
                    minEnd: event.minEnd,
                    minStart: event.minStart,

                    day: event.day,
                    month: event.month,
                    year: event.year,

                    city: event.city,
                    description: event.description,
                    link: "/event/" + event.id,
                };
            }
        ).sort((a, b) => sortTiles(a, b))
    }

    mapToGrid(array) {
        return array.map(item => <Grid item xs={12}>
                <Link to={item.link} className="notA">
                    <SearchRow {...item}/>
                </Link>
            </Grid>
        )
    }

    render() {
        return <main id="searchMain">
            <h1>Databáze</h1>
            <Input
                onChange={(e) => this.setState({search: e.target.value})}
                label="Search"
                value={this.state.search}
                style={{padding: ".5em"}}
                className="searchBar"
                type="text"
                placeholder="Hledej stáže, akce a společnosti..."
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
                    icon={faMapMarkerAlt}
                    options={{
                        "": "Vybrat město",
                        Brno: "Brno",
                        Praha: "Praha"
                    }}
                    onChange={(value) => console.log(value)}
                    style={{margin: "0em .5em .5em 0em"}}
                />

                <Dropdown
                    icon={faHashtag}
                    options={{
                        "": "Vybrat kategorii",
                        "x": "Vzdělávání",
                        "y": "Biologie",
                    }}
                    onChange={(value) => console.log(value)}
                    style={{margin: "0em .5em .5em 0em"}}
                />

                <Toggle
                    text="Placená"
                    icon={faDollarSign}
                    style={{margin: "0em"}}
                    onChange={(value) => console.log(value)}
                />
            </section>

            <Grid container spacing={3} id="searchResults">
                {this.mapToGrid(this.state.tab === "events" ? this.mapEvents() : [])}
            </Grid>
            <ItemList></ItemList>
        </main>
    }
}

export default withRouter(Search);