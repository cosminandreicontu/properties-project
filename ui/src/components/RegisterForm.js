import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class RegisterForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/");
        }
      }

      UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
            };
        this.props.registerUser(newUser, this.props.history); 
    };
        

    render() {
        const { errors } = this.state;
        return(
            <Form>
                <h3>Register</h3>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" id="name" value={this.state.name} onChange={this.onChange} />
                <span className="text-danger">{errors.name}</span>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email" value={this.state.email} onChange={this.onChange}/>
                <span className="text-danger">{errors.email}</span>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id="password" value={this.state.password} onChange={this.onChange}/>
                <span className="text-danger">{errors.password}</span>
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" id="password2"  value={this.state.password2} onChange={this.onChange}/>
                <span className="text-danger">{errors.password2}</span>
            </Form.Group>
            <Button variant="primary" onClick={this.onSubmit}>
                Register
            </Button>
                <Form.Text className="text-primary">
                Already have an account? <Link to="/login">Log in</Link>
                </Form.Text>
            </Form>
        )
    }
}

RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(RegisterForm));