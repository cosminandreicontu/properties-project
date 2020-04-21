import React from 'react';
import {Container} from 'react-bootstrap';
import Title from './Title';
import SimpleMap from './Map';
import PropertiesList from './PropertiesList';
import {withRouter} from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: this.props.properties
        };
    }

    
    render() {

        const locations = this.props.properties.map(item => ({
            lat: item.location.coordinates[1], 
            lng: item.location.coordinates[0],
            name: item.name,
            price: `${item.sold_price} ${item.currency}`,
            ...item
        }))
        return(
            <Container fluid="xl">

                <Title/>

                <h3 id="map">Map View</h3>
                <SimpleMap data={locations} name={this.props.name} size={"map-large"} zoom={7}/>

                <hr/>

                <h3 id="list">List View</h3>
                <PropertiesList  properties={this.props.properties}/>

            </Container>
        )
    }
}

export default withRouter(Homepage);