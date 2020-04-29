import React from "react";
import {Card, Typography} from "@material-ui/core";
import "./Record.css";
import {withRouter} from 'react-router-dom';
import {If} from "../components/Lib";
import './RecordPreview.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faMoneyBillWave, faClock} from "@fortawesome/free-solid-svg-icons";
import {TextComponent} from "../components/Text";
import {downloadRecord} from "../services/downloadRecordData";

class RecordView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            record: "",
            id: this.props.match.params.id,
        }
    }

    async componentDidMount() {
        var record = await downloadRecord(this.state.id);
        this.setState({record:record});
    }

    render() {
        var record = this.state.record;
        return (<main>
            <If if={record}>
                <RecordDetail
                    pushToHistory={(path) => this.props.history.push(path)}
                    adress={record.adress}
                    city={record.city}
                    companyName={record.companyName}
                    day={record.day}
                    description={<TextComponent text={record.description}/>}
                    hourEnd={record.hourEnd}
                    hourStart={record.hourStart}
                    imgSrc={this.state.record.imgUrl ? this.state.record.imgUrl : "https://picsum.photos/800/800"}
                    id={record.id}
                    minEnd={record.minEnd}
                    minStart={record.minStart}
                    month={record.month}
                    publicView={record.publicView}
                    name={record.name}
                    setTime={record.setTime}
                    year={record.year}


                    location={record.city}
                    event={record}
                    buttonCondition={1}/>
            </If>

        </main>);
    }
}

export default withRouter(RecordView);


function RecordDetail(props) {
    return (<Card className="internshipDetail">
        <div className="internshipDetailHeader">
            <div className="internshipDetailHeaderBackground"
                 style={{backgroundImage: "url(" + props.imgSrc + ")"}}/>
            <div className="internshipDetailHeaderImage" style={{backgroundImage: "url(" + props.imgSrc + ")"}}/>
        </div>
        <div className="internshipDetailContent basic-ahref">
            <h1>{props.name}<span>{props.companyName}</span><span>{props.day}.{props.month}.{props.year}</span></h1>
            <div className="internshipDetailInfoLabels">
                <If if={props.setTime}>
                <div className="infoLabel" alt="minimální věk">
                    <Icon icon={faClock}/>

                    <span> {props.hourStart}:{props.minStart<10 ? "0"+ props.minStart : props.minStart} -
                        {props.hourEnd}:{props.minEnd<10 ? "0"+ props.minEnd : props.minEnd}</span>
                </div>
                </If>
                <div className="infoLabel" alt="minimální věk">
                    <Icon icon={faMapMarkerAlt}/>
                    <span>{props.location}</span>
                </div>
                <If if={props.pay}>
                    <div className="infoLabel" alt="placená">
                        <Icon icon={faMoneyBillWave}/>
                        <span>Placená</span>
                    </div>
                </If>
            </div>
            <If if={props.description && props.description.props && props.description.props.text}>
                <h2>Popis eventu</h2>
                <p className="display-linebreak">{props.description}</p>
            </If>
        </div>

    </Card>);
}

function Icon(props) {
    return <Typography color="primary"><FontAwesomeIcon className="faIcon" icon={props.icon}/></Typography>
}