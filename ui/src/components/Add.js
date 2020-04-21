import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

class Add extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            files: [""],
            res: false,
            ok: false
        }
    }

    ImageForm = (i) => <Form.Control type="text" placeholder="Enter image URL" key={i} id={i} value={this.state[i]} onChange={this.onChangeFile} />


    Forms = () => this.state.files.map((item, i) => this.ImageForm(String(i)))

    addImageForm = () => {
        let files = this.state.files
        files.push("")
        this.setState({files: files})
    }

    onChangeFile = (e) => {
        e.preventDefault();
        let files = this.state.files
        files[e.target.id] = e.target.value;
        this.setState({
            files: files
        })
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = () => {

        let body = {
            name: this.state.name,
            description: this.state.description,
            location: {
                city: this.state.city,
                coordinates: [
                    this.state.latitude,
                    this.state.longitude
                ]
            },
            sold_price: this.state.price,
            currency: this.state.currency,
            images: this.state.files,
            type: this.state.type
        }

        fetch("/properties/add",{
            method:  'POST',
            headers:  new Headers({
                    'Content-Type':  'application/json'
            }),
            body:  JSON.stringify(body),
        })
        .then(res  =>  res.json())
        .then(res => {
            this.setState({res: true, ok: true})
        })
        .catch(err => {
            console.log(err)
            this.setState({res: true, ok: false})
        })
    }

    render() {
        return(
            <Form className="add-form">
                <h3>Add New Property</h3>
            <Form.Group controlId="name1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" id="name" value={this.state.name} onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="description1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Enter description" id="description" value={this.state.description} onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="type1">
                <Form.Label>Property Type</Form.Label>
                <Form.Control as="select" id="type" placeholder="type" value={this.state.type} onChange={this.onChange}>
                <option>---Choose a type---</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Office</option>
                <option>Land</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" id="city" value={this.state.city} onChange={this.onChange} />
            </Form.Group>

            <Form.Group controlId="latlng">
                <Form.Label>Coordinates</Form.Label>
                <Row>
                    <Col>
                    <Form.Control placeholder="Latitude" id="latitude" value={this.state.latitude} onChange={this.onChange}/>
                    </Col>
                    <Col>
                    <Form.Control placeholder="Longitude" id="longitude" value={this.state.longitude} onChange={this.onChange} />
                    </Col>
                </Row>
            </Form.Group>


            <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="price" placeholder="Enter price" id="price" value={this.state.price} onChange={this.onChange} />
            </Form.Group>


            <Form.Group controlId="currency">
                <Form.Label>Currency</Form.Label>
                <Form.Control as="select" id="currency" value={this.state.currency} onChange={this.onChange}>
                <option>---Choose a currency---</option>
                <option>USD</option>
                <option>EUR</option>
                <option>RON</option>
                </Form.Control>
            </Form.Group>

                <Form.Label>Add Images</Form.Label>
                {this.Forms()}
                <div className="add-btn-div">
                <Button variant="outline-dark" size="sm" className="add-btn" onClick={this.addImageForm}>Add</Button>
                </div>
                <Button variant="primary" onClick={this.onSubmit}>Submit property</Button>
                {this.state.res && <span className={this.state.ok ? "text-success": "text-danger"}>
                    {this.state.ok
                    ? "Property successfully added!"
                    : "An error has occurred"}
                </span>}
            </Form>
        )
    }
}



export default Add;