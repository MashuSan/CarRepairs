import React from "react";
import {
    Card,

} from "@material-ui/core";
import {withRouter} from 'react-router-dom';
import "./Record.css";
import {
    AboutUsPrivateSection, ContactPrivateSection,
    OurVissionPrivateSection, SavePrivateSection
} from "../components/Profile/Record";
import { Item } from './ServiceItem';

export default class ItemList extends React.Component {
    async fetchData(){
        const productsRes = await fetch('http://localhost:5000/services');
        const products = await productsRes.json(); 
        return products;   
    }

    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    render() {
        return (           
            <main className="ServiceItems">

            </main>
        );
    }

    async componentDidMount(){
        const data = await this.fetchData();
        this.setState({products: data});
    }
    
}