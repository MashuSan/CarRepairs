import React from "react";
import {withRouter} from 'react-router-dom';
import "./Record.css";
import {
    DescriptionSection, MaterialsSection,
    BasicInfoSection, SaveSection
} from "../components/Profile/Record";

class CompanyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMaterial: "",
            newPrice: "",
            materials: []
        };
    }

    saveData = async (event) => {
        if (this.verifyInput()) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: this.state.date,
                    spz: this.state.spz,
                    kmStatus: this.state.kmStatus,
                    description: this.state.description,
                    materials: this.state.materials,
                    technicsName: this.state.technicsName
                })
            }
            await fetch('http://localhost:5000/services', requestOptions)
            window.location.reload();
            event.preventDefault()
        };
    }

    render() {
        return (<main>
            <h1>Vytvor záznam</h1>
            <DescriptionSection
                updateInput={this.updateInput}
            />
            <MaterialsSection
                materials={this.state.materials}
                deleteEntry={(index) => this.deleteMatPriEntry(index)}
                onChangeMaterial={(e, index) => this.onChangeMaterial(e, index)}
                onChangePrice={(e, index) => this.onChangePrice(e, index)}
                newMaterial={this.state.newMaterial}
                newPrice={this.state.newPrice}
                onNewChangeMaterial={e => this.setState({newMaterial: e.target.value})}
                onNewChangePrice={e => this.setState({newPrice: e.target.value})}
                addEntry={(e) => this.addMatPriEntry(e)}/>
            <BasicInfoSection
                updateInput={this.updateInput}
                handleDayClick={this.handleDayClick}
                date={this.state.date}/>
            <SaveSection
                saveData={this.saveData}
            />
        </main>)
    }

    onChangeMaterial = (e, index) => {
        let materials = this.state.materials;
            materials[index] = {
                material: e.target.value,
                price: materials[index].price
            };
            this.setState({materials: materials});
    }

    onChangePrice = (e, index) => {
        let materials = this.state.materials;
            materials[index] = {
                material: materials[index].material,
                price: e.target.value
            };
        this.setState({materials: materials});
    }

    addMatPriEntry = (e) => {
        var materials = this.state.materials;
        var item = {
            material: this.state.newMaterial,
            price: this.state.newPrice
        }
        materials.push(item);
        this.setState({materials: materials, newMaterial: "", newPrice: ""});
    }

    deleteMatPriEntry= (index) => (e) => {
        var materials = this.state.materials;
        materials.splice(index, 1);
        this.setState({materials: materials});
    }

    updateInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleDayClick = day => {
        day = day.toLocaleDateString();
        this.setState({ date: day });
    }

    // parsers

    verifyInput = () => {
        if (this.verifyDescription() && this.verifyPriceMaterial() && this.verifySPZ() && 
            this.verifyKM() && this.verifyTechnic() && this.verifyDate()) {
            return true
        } else {
            return false
        }
    }

    verifyPriceMaterial = () => {
        for (let i = 0; i < this.state.materials.length; i++) {
            let obj = this.state.materials[i]
            
            let material = String(obj[Object.keys(obj)[0]])
            let price = String(obj[Object.keys(obj)[1]])
            
            if (!material) {
                alert('Materiál nemôže byť prázdny')
                return false
            }

            let numbers = /[0-9]/
            let processed = price.replace(/ /g, '')
            for (let i = 0; i < processed.length; i++) {
                if (!processed[i].match(numbers)) {
                    alert('Cena musí byť číslo')
                    return false
                }
            }

            let materials = this.state.materials
            materials[i] = {
                material: materials[i].material,
                price: processed
            }
            this.setState({materials: materials})
        }
        return true
    }

    verifyDate = () => {
        if (typeof this.state.date == 'undefined') {
            alert('Dátum nemôže byť nedefinovaný')
            return false
        }
        return true
    }

    verifyTechnic = () => {
        if (typeof this.state.technicsName == 'undefined') {
            alert('Meno technika nemôže byť nedefinované')
            return false
        }
        return true
    }

    verifyDescription = () => {
        if (typeof this.state.description == 'undefined') {
            alert('Popis závady nemôže byť nedefinovaný')
            return false
        }
        return true
    }

    verifyKM = () => {
        if (typeof this.state.kmStatus == 'undefined') {
            alert('Najazdené kilometre nemôžu byť nedefinované')
            return false
        }
        
        let numbers = /[0-9]/
        let processed = this.state.kmStatus.replace(/ /g, '')
        for (let i = 0; i < processed.length; i++) {
            if (!processed[i].match(numbers)) {
                alert('Najazdené kilometre musia byť číslo')
                return false
            }
        }
        
        this.setState({kmStatus: String(processed)})
        return true
    }

    verifySPZ = () => {
        let spz = this.state.spz
        if (typeof spz == 'undefined') {
            alert('SPZ nemôže byť nedefinovaná')
            return false
        }
        
        if (spz.length !== 5) {
            alert('SPZ musí byť tvaru AA111')
            return false
        }

        let letters = /[A-Z]/
        let numbers = /[0-9]/

        let result = ""
        for (let i = 0; i < 2; i++) {
            if (!spz.charAt(i).match(letters)) {
                alert('SPZ musí byť tvaru AA111')
                return false
            }
            result += spz.charAt(i)
        }

        for (let i = 2; i < 5; i++) {
            if (!spz.charAt(i).match(numbers)) {
                alert('SPZ musí byť tvaru AA111')
                return false
            }
            result += spz.charAt(i)
        }
        this.setState({spz: result})
        return true
    }
}
export default withRouter(CompanyAccount);