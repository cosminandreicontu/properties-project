import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import GButton from './GButton'

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/");
        }
      }
    
      UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/");
        }
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
        const userData = {
              email: this.state.email,
              password: this.state.password
            };
        this.props.loginUser(userData);
      };

    render() {
        const { errors } = this.state;
        return(
            <Form>
            <h3>Log In</h3>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email" value={this.state.email} onChange={this.onChange} />
                <span className="text-danger">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id="password" value={this.state.password} onChange={this.onChange} />
                <span className="text-danger">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
            </Form.Group>
            <Button variant="primary" onClick={this.onSubmit}>
                Login
            </Button>
                <Form.Text className="text-primary">
                Don't have an account? <Link to="/register">Register</Link>
                </Form.Text>
                <GButton/>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(LoginForm);