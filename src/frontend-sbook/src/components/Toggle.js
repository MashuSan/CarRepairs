import React from 'react'
import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Toggle extends React.Component{
    constructor()
    {
        super()
        this.state = {
            on:false,
        }
    }

    render(){
        const text = this.props.text?this.props.text:"Text"
        const icon = this.props.icon?this.props.icon:null
        const callback = this.props.onChange?this.props.onChange:()=>{}

        return <div 
            style={{display:"inline-block",...this.props.style}}
        ><Button
        variant={this.state.on?"contained":"outlined"}
        color="primary"
        onClick={() => {
            callback(!this.state.on)
            this.setState({on: !this.state.on})
        }}
        className={this.props.className}
    >
        <div style={icon&&{paddingRight:".5em"}}><FontAwesomeIcon icon={icon}/></div>{text}
    </Button></div>
    }
}