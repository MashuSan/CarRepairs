import React from "react";
import {
    Card,

} from "@material-ui/core";
import {withRouter} from 'react-router-dom';
import "./Record.css";
import {
    AboutUsPrivateSection, ContactPrivateSection, FoundingYearPrivateSection,
    NamePrivateSection, OurVissionPrivateSection,
     SavePrivateSection, SitesPrivateSection
} from "../components/Profile/Record";


//Private Company Account Page

class CompanyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
    }

    saveData = async () => {
    };


    render() {
        return (<main>
            <Card className="profileBase">
                <NamePrivateSection
                    name={"aaa"}
                    updateInput={this.updateInput}
                />
                <div>
                    <AboutUsPrivateSection
                        aboutUs={"aaa"}
                        updateInput={this.updateInput}
                    />
                    <br/><br/>
                    <FoundingYearPrivateSection
                        foundingYear={"aaa"}
                        updateInput={this.updateInput}
                    />
                </div>
                <OurVissionPrivateSection
                    ourVission={"aaa"}
                    updateInput={this.updateInput}/>
                <ContactPrivateSection
                    personName={"aaa"}
                    email={"aaa"}
                    phone={"aaa"}
                    websiteUrl={"aaa"}
                    updateInput={this.updateInput}/>
                <SitesPrivateSection
                    socialSites={""}
                    changeSocialSitesLinks={this.changeSocialSitesLinks}
                />
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


    changeSocialSitesLinks = (e) => {
        this.setState({
            socialSites: {
                ...this.state.socialSites,
                [e.target.name]: e.target.value
            }
        });
    };
}

export default withRouter(CompanyAccount);