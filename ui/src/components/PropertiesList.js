import React from "react";
import Property from './Property';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class PropertiesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: this.props.properties,
            direction: "asc"
        };
    }

    componentDidUpdate() {
        if (this.props.properties.length !== this.state.properties.length) {
          this.setState({properties: this.props.properties})
        }
      }

    displayList = () => (
        this.state.properties.map((item, i) => <Property {...item} key={i}/>)
    )
    
    sort = (type) => {
        let properties = this.state.properties;
        switch(type){
            case 0:
                properties.sort((a, b) =>  parseFloat(a.sold_price)-parseFloat(b.sold_price))
                break;
            case 1:
                properties.sort((a, b) =>  parseFloat(b.sold_price)-parseFloat(a.sold_price))
                break;
            case 2:
                properties.sort((a, b) => a.location.city.localeCompare(b.location.city))
                break;
            case 3:
                properties.sort((a, b) => b.location.city.localeCompare(a.location.city))
                break;
            default:
                properties.sort((a, b) => a.location.city.localeCompare(b.location.city))
                break;
        }
        this.setState({properties: properties})
    }
    render(){
        return(
            <div>
                <div className="filters">
                    <Button variant="light" onClick={() => this.sort(0)}>Sort by Price (asc.)</Button>
                    <Button variant="light" onClick={() => this.sort(1)}>Sort by Price (desc.)</Button>
                    <Button variant="light" onClick={() => this.sort(2)}>Sort by City (asc.)</Button>
                    <Button variant="light" onClick={() => this.sort(3)}>Sort by City (desc.)</Button>
                </div>

                <Row>
                    {this.displayList()}
                </Row>
            </div>
        )
    }

}

export default PropertiesList;