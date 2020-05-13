import React from "react";
import {Card, Typography} from "@material-ui/core";
import "./Record.css";
import {withRouter} from 'react-router-dom';
import {If} from "../components/Lib";
import './RecordPreview.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarDay, faUserCog } from "@fortawesome/free-solid-svg-icons";
import {downloadRecord} from "../services/downloadRecordData";

class RecordView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    id={record.id}
                    date={record.date}
                    kmStatus={record.kmStatus}
                    description={record.description}
                    materials={record.materials}
                    technicsName={record.technicsName}
                    spz={record.spz}

                    pushToHistory={(path) => this.props.history.push(path)}
                />
            </If>

        </main>);
    }
}

export default withRouter(RecordView);


function RecordDetail(props) {
    return (<Card className="internshipDetail">
        <div className="internshipDetailContent basic-ahref">
            <h1>Detail opravy</h1>
            <div className={"infoLabel"} title={"Dátum opravy a meno technika"}>
                <Icon icon={faCalendarDay}/>
                <span><h3>{props.date}</h3></span>
                <span></span>
                <Icon icon={faUserCog}/>
                <span><h3>{props.technicsName}</h3></span>
            </div>
            <p></p>
            <div className={"infoLabel"}>
                <span><h3>Stav km: </h3>{props.kmStatus}</span>
                <span></span>
                <span><h3>SPZ: </h3>{props.spz}</span>
            </div>
            <p>{props.description}</p>
            <p>{props.materials}</p>
        </div>

    </Card>);
}

function Icon(props) {
    return <Typography color="primary"><FontAwesomeIcon className="faIcon" icon={props.icon}/></Typography>
}