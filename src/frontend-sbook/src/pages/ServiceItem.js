import React from 'react';
import { Component } from "react";

export class Item extends React.Component{
    
    render() {
        return (
            <div className="serviceRow">
                <div className="serviceCol">{ this.props.id }</div>
                <div className="serviceCol">{ this.props.date }</div>
                <div className="serviceCol">{ this.props.kmStatus }</div>
                <div className="serviceCol">{ this.props.description }</div>
                { this.props.materials.map((m) => <div className="serviceCol">{ m.material } {" "} { m.price} </div>)}
                
                <div className="serviceCol">{ this.props.technicsName }</div>
                <p className="newLine"></p>
            </div>
        );
    }
}