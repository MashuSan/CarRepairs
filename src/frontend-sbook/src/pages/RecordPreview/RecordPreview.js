import React from "react";
import {Typography} from "@material-ui/core";
import {withRouter} from 'react-router-dom';
import {If} from "../../components/Lib";
import './RecordPreview.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarDay, faUserCog } from "@fortawesome/free-solid-svg-icons";
import {downloadRecord} from "../../services/downloadRecordData";
import {
    DeleteSection, ModifySection
} from "./RecordPreviewComponent";

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

    deleteData = async () => {
        const requestOptions = {
            method: 'DELETE',
        };
        await fetch('http://localhost:5000/services/' + this.state.id, requestOptions);
        window.location.assign('/search')
    };

    render() {
        var record = this.state.record;
        return (<main className={"main-widt-restriction"}>
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
            <ModifySection id={this.state.id}/>
            <DeleteSection deleteData={this.deleteData}/>
        </main>);
    }
}

export default withRouter(RecordView);


function RecordDetail(props) {
    var price = 0;
    props.materials.map((m) => price += parseInt(m.price))
    return (<div>
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
                <span><h3>Stav km: </h3>{props.kmStatus} km</span>
                <span></span>
                <span><h3>SPZ: </h3>{props.spz}</span>
            </div>
            <span><h3>Popis závady: </h3></span>
            <p>{props.description}</p>
            <span><h3>Použité materiály: </h3></span>
            { props.materials.map((m) => <p>{ m.material } {" - "} { m.price }€ </p>)}
            <h4>{ "Celkova cena : " + price + "€"}</h4>
    </div>);
}

function Icon(props) {
    return <Typography color="primary"><FontAwesomeIcon className="faIcon" icon={props.icon}/></Typography>
}