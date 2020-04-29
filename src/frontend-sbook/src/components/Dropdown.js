import React from 'react';
import { Button } from '@material-ui/core';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dropdown.scss'

export default class Dropdown extends React.Component{
    constructor(){
        super()
        this.state = {
            down:false,
            selected:""
        }
    }

    render(){
        var rows = [];
        const x = this.props.options?this.props.options:{
        }
        const callback = this.props.onChange?this.props.onChange:()=>{}

        for(const key in x){
            rows.push(<div
                    key={key}
                    style={{padding:".75em 1em", borderBottom:"1px solid rgba(27, 27, 27, 0.08)"}}
                    className="dropdownItem"
                    onClick={()=>{
                        this.setState({selected:key,down:false})
                        callback(key)
                    }}
                >
                    {x[key]}
                </div>)
        }

        const icon = this.props.icon?this.props.icon:null

        return <div style={{position:"relative", display:"inline-block", ...this.props.style}}><Button
                variant={this.state.selected?"contained":"outlined"}
                color="primary"
                onClick={() => this.setState({down:!this.state.down})}
                className={this.props.className}
            >
            {this.state.selected && <div style={{paddingRight:".5em"}}><FontAwesomeIcon icon={icon}/></div>}
            {x[this.state.selected]}<div
                style={{display:"inline", marginLeft:"1em", cursor:"pointer", fontWeight:"light"}}
            ><FontAwesomeIcon icon={faChevronDown} style={{transform:!this.state.down&&"rotate(90deg)", transition:".3s"}}/></div>
            </Button>
            {<div
                style={{
                    position:"absolute",
                    top:"2.4em", left:0,
                    width:"100%",
                    backgroundColor:"white",
                    zIndex:"100",
                    maxHeight:!this.state.down?"0em":"20em",
                    transition:".3s",
                    borderBottomLeftRadius:"4px", borderBottomRightRadius:"4px",
                    overflow:"hidden",
                    color:"black",
                }}
            >
                {rows}
            </div>}
            </div>
    }
}