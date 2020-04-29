import React from 'react';
import {Card, Typography} from '@material-ui/core';
import './SearchTile.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import {If} from './Lib';

export function SearchRow(props) {
    return (<Card className="searchRow">
        <div className="searchRowContentWrapper" style={props.backgroundPinky ? {backgroundColor: 'pink'} : {}}>
            <div className="searchRowHeader">
                <div className="searchRowTitle">{props.title}<span>{props.subtitle}</span></div>
                <div className="searchRowLocation">
                    <If if={props.pay}>
                    <span className="searchRowPay"><Typography color="primary"><FontAwesomeIcon style={{fontSize: "1.3em"}}
                                                                                                icon={faMoneyBillWave}
                                                                                                className="faIcon"/></Typography></span>
                    </If>
                    <If if={props.city}><Typography color="primary"><FontAwesomeIcon
                        style={{marginLeft: "5px",position: "relative",
                            top: "2px"}}
                        icon={faMapMarkerAlt} className="faIcon"/></Typography><span style={{position: "relative",
                        top: "5px"
                    }}>{props.city}</span>
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