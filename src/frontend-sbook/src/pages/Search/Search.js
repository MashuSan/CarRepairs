import React from 'react';
import {Grid, Input, InputAdornment, IconButton} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {SearchRow} from './SearchTile';
import './Search.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faHashtag } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../components/Dropdown'


function sortTiles(a, b) {
    var firstDate = a.date.split(".")
    var secondDate = b.date.split(".")

    for (let i = 2; i >= 0; i--){
        if (parseInt(firstDate[i]) > parseInt(secondDate[i])) return -1;
        if (parseInt(firstDate[i]) < parseInt(secondDate[i])) return 1;
    }
    return 0;
    
}
const filterOptions = {
    "": "Filtrovať podľa",
    "SPZ": "ŠPZ",
    "Dátum": "Dátum",
    "Technik": "Meno technika",
    "Popis": "Popis"
};
const defFilterOption = "SPZ";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: decodeURI(window.location.search.substr(3)),
            records: [],
            currentSearch: defFilterOption
        }
    }

    async componentDidMount() {
        const productsRes = await fetch('http://localhost:5000/services');
        const data = await productsRes.json();
        this.setState({records: data});
    }

    filter(array, string) {
        return array.filter(item => {
            switch(this.state.currentSearch){
                case "SPZ":
                    return (item.spz.toLowerCase().includes(string.toLowerCase()));
                case "Dátum":
                    return (item.date.replace(' ', '').replace(' ', '')
                        .toLowerCase().includes(string.toLowerCase()));
                    
                case "Technik":
                    return (item.technicsName.toLowerCase().includes(string.toLowerCase()));
                    
                case "Popis":
                    return(item.description.toLowerCase().includes(string.toLowerCase()));
                    
                default:
                    return (item.spz.toLowerCase().includes(string.toLowerCase()));
            }
        })
    }

    mapRecords() {
        return this.filter(this.state.records, this.state.search).map(record => {
            return {
                id: record.id,
                date: record.date,
                kmStatus: record.kmStatus,
                description: record.description,
                materials: record.materials,
                technicsName: record.technicsName,
                spz: record.spz,
                link: "/record/" + record.id,
            };
        }).sort((a, b) => sortTiles(a, b))
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
            <h1>Prehliadka opráv</h1>
            <Input
                onChange={(e) => this.setState({search: e.target.value})}
                label="Search"
                value={this.state.search}
                style={{padding: ".5em"}}
                type="text"
                placeholder={this.state.currentSearch}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={(e) => {
                            if (this.state.search.length) this.props.history.push("/search?q=" + this.state.search)
                        }}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </IconButton>
                    </InputAdornment>
                }
            />
            <br/>
            <br/>
            <br/>
            <section>
                <Dropdown
                    icon={faHashtag}
                    options={filterOptions}
                    onChange={(value) => {
                        if (value === "") {
                            this.setState({currentSearch: defFilterOption})
                        } else {
                            this.setState({currentSearch: value})
                        } 
                    }}
                    style={{margin: "0em .5em .5em 0em"}}
                />
            </section>
                          
            <Grid container spacing={3} id="searchResults">
                {this.mapToGrid(this.mapRecords())}
            </Grid>
        </main>
    }
}

export default withRouter(Search);