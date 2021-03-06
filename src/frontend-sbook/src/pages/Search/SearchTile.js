import React from 'react';
import {Card, Typography} from '@material-ui/core';
import './SearchTile.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';

function getName(props){
    if (props.technicsName.length > 10) {
        return props.technicsName.substring(0, 8) + "..";
    } else {
        return props.technicsName;
    }
}

export function SearchRow(props) {
    return (<Card className="searchRow">
        <div className="searchRowContentWrapper" style={props.backgroundPinky ? {backgroundColor: 'pink'} : {}}>
            <div className="searchRowHeader">
                <div className="searchRowTitle"><b>{props.spz}</b><span><i>{props.date}</i></span></div>
                <div className="searchRowLocation">
                    <Typography color="primary">
                        <FontAwesomeIcon style={{marginLeft: "5px", position: "relative", top: "2px"}}
                                         icon={faUserAlt} className="faIcon"
                        />
                    </Typography>
                    <div style={{width: "80px", marginRight: "5px", textAlign: "left"}}>
                        <span style={{position: "relative", top: "5px"}}>{getName(props)}</span>
                    </div>
                </div>
            </div>
            <div className="searchRowDescription">
                {props.description}
            </div>
        </div>
    </Card>)
}