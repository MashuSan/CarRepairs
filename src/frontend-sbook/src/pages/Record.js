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
                date: "2.5.2020",
                kmStatus: 50000,
                description: "I did something here",
                materials: "None",
                technicsName: "Matys"
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
                    ourVission={"aaa"}
                    updateInput={this.updateInput}/>
                <ContactPrivateSection
                    personName={"aaa"}
                    email={"aaa"}
                    phone={"aaa"}
                    websiteUrl={"aaa"}
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