import React from "react";
import {
    Card,

} from "@material-ui/core";
import {withRouter} from 'react-router-dom';
import "./Record.css";
import {
    AboutUsPrivateSection, ContactPrivateSection,
    OurVissionPrivateSection, SavePrivateSection
} from "../components/Profile/Record";

class CompanyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
    }

    saveData = async (event) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: this.state.date,
                kmStatus: this.state.kmStatus,
                description: this.state.description,
                materials: this.state.materials,
                technicsName: this.state.technicsName
            })
        }
        fetch('http://localhost:5000/services', requestOptions)
        event.preventDefault()
    };

    render() {
        return (<main>
            <Card className="profileBase">
                <AboutUsPrivateSection
                    updateInput={this.updateInput}
                />
                <OurVissionPrivateSection
                    updateInput={this.updateInput}/>
                <ContactPrivateSection
                    updateInput={this.updateInput}/>
                <SavePrivateSection
                    pushToHistory={(path) => this.props.history.push(path)}
                    databaseId={""}
                    saveData={this.saveData}
                />
            </Card>
        </main>)
    }

    updateInput = e => {
        this.setState({[e.target.name]: e.target.value});
    };
}

export default withRouter(CompanyAccount);