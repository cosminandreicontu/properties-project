import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'react-image-gallery/styles/css/image-gallery.css';
import { GeoAlt, Building, Eye } from 'react-bootstrap-icons';
import PropertyModal from './Modal';
 



class Property extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div className="property">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.images != null ? this.props.images[0] : placeholder} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        
                        </Card.Text>
                        <div style={{paddingBottom: "1rem"}}>
                            <span><Building/>{` ${this.props.type} `}</span><br/>
                            <span><GeoAlt/> {this.props.location.city} </span><br/>
                            <span><Eye/> {this.props._id}</span>
                        </div>
                        <h4>{this.props.sold_price +" " +this.props.currency}</h4>
                        <Button variant="primary" onClick={() => this.setState({modalShow: true})}>View Property</Button>
                    </Card.Body>
                </Card>
                <PropertyModal
                    {...this.props}
                    show={this.state.modalShow}
                    onHide={() => this.setState({modalShow: false})}
                />
            </div>
        )
    }
}

const placeholder = "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg";



export default Property;