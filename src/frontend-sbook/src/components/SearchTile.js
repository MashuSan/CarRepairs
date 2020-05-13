import React from 'react';
import {Card, Typography} from '@material-ui/core';
import './SearchTile.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoneyBillWave, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {If} from './Lib';

export function SearchRow(props) {
    return (<Card className="searchRow">
        <div className="searchRowContentWrapper" style={props.backgroundPinky ? {backgroundColor: 'pink'} : {}}>
            <div className="searchRowHeader">
                <div className="searchRowTitle">{props.spz}<span>{props.date}</span></div>
                <div className="searchRowLocation">
                    <If if={props.technicsName}>
                        <Typography color="primary">
                            <FontAwesomeIcon style={{marginLeft: "5px", position: "relative", top: "2px"}}
                                             icon={faUserAlt} className="faIcon"
                            /></Typography>
                        <span style={{position: "relative", top: "5px"}}>{props.technicsName}</span>
                    </If>

                </div>
            </div>
            <If if={props.description}>
                <div className="searchRowDescription">
                    {props.description}
                </div>
            </If>
        </div>
    </Card>)
}