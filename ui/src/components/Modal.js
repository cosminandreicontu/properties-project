import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import SimpleMap from './Map'
import { GeoAlt, Building } from 'react-bootstrap-icons';


class PropertyModal extends React.Component {

    

    render(){
      const images = this.props.images ? this.props.images.map((item, i) => ({original: item, thumbnail: item})) : []
    return (
      <Modal
        {...this.props}
        size="xl"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
          <h4 style={{color: "red", fontWeight: "bold", marginRight: "10%"}}>{`Price: ${this.props.sold_price} ${this.props.currency}`}</h4>
          <div>
            <span><Building/>{` ${this.props.type} `}</span><br/>
            <span><GeoAlt/> {this.props.location != null ? this.props.location.city:null}</span>
            </div>
            </div>
            <div>
            <ImageGallery items={images} />
            </div>
            <h4>Description</h4>
            <p>
            {this.props.description}
          </p>
          <h4>Location</h4>
          {this.props.location && <SimpleMap data={[{lat: this.props.location.coordinates[1], lng: this.props.location.coordinates[0]}]} center={{lat: this.props.location.coordinates[1], lng: this.props.location.coordinates[0]}} name={this.props.name} size={"map-small"}/>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
    }
  }

  export default PropertyModal;