import React from 'react';
import {Image, Button, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Navigation extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: "",
            loginShow: false,
            registerShow: false
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/");
      };


    render() {
        const { user } = this.props.auth;
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Properties Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">All Properties</Nav.Link>
                {this.props.auth.isAuthenticated &&<Nav.Link className="add-link" href="/add"><span>Add Property</span></Nav.Link>}
                </Nav>
                    {this.props.auth.isAuthenticated === true ?
                    <Nav className="avatar-item">
                        <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" roundedCircle />
                        <NavDropdown title={user.name ? user.name.split(" ")[0] : null} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.onLogoutClick}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                        </Nav> 
                    :
                    <Nav>
                        <Link to="/register"><Button variant="light" >Register</Button></Link>
                        <Link to="/login"><Button variant="outline-light" >Log in</Button></Link>
                    </Nav>
                    }
            </Navbar.Collapse>
            
            </Navbar>
        )
    }
}

Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(Navigation));