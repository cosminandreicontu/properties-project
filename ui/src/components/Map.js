import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Marker.css';
import PropertyModal from './Modal';



class SimpleMap extends Component {


  static defaultProps = {
    center: {
      lat: 45.92,
      lng: 24.43
    },
    zoom: 18
  };

  
  render() {
    const Markers = this.props.data && this.props.data.map((item, i) => (
      <Marker
            lat={item.lat}
            lng={item.lng}
            color="red"
            {...item}
            single={this.props.data.length===1?true:false}
            key={i}
          />
    ))

    return (
      
      <div className={this.props.size}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          distanceToMouse={distanceToMouse}
        >

          {Markers}
      
        </GoogleMapReact>
      </div>
    );
  }

}

const distanceToMouse = (pt, mousePos, markerProps) => {

  // pt can be undefined in some cases
  // don't know why this happens
  if (pt && mousePos) {
    return Math.sqrt(
      (pt.x - mousePos.x) * (pt.x - mousePos.x) +
        (pt.y - mousePos.y) * (pt.y - mousePos.y)
    );
  }
};


class Marker extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalShow: false
    }
  }

  render(){
  const { color} = this.props;
  return (
    <div>
    <div className="marker" onClick={() => !this.props.single?this.setState({modalShow: true}):null}
      style={{ backgroundColor: color, cursor: 'pointer'}}
      />
      <PropertyModal
                    {...this.props}
                    show={this.state.modalShow}
                    onHide={() => this.setState({modalShow: false})}
                />
                </div>
  );
  }
};


export default SimpleMap;