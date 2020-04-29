import React from 'react';
/**
 * renders it's children based on a condition
 * @name If
 * @extends React.Component
 * @param {bool} if condition
 * @param {Component} children children to render if condition is true
 * @param {Component} else children to render when condition is false
 */
export class If extends React.Component{
    render(){
        return Boolean(this.props.if)?this.props.children:(this.props.else?this.props.else:<></>)
    }
}