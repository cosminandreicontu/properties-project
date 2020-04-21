import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import store from "./store";
import {withRouter, Route, Switch} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import UserAccess from './components/UserAccess';
import Add from './components/Add';
import queryString from "query-string";



if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    this.props.history.push("/login");
  }
}




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      propertiesList: properties
    }
  }

  componentDidMount() {

    if (this.props.location){
    const query = queryString.parse(this.props.location.search);
    if (query.token) {
      const decoded = jwt_decode(query.token);
      window.localStorage.setItem("jwtToken", query.token);
      setAuthToken(decoded.token);
      store.dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        this.props.history.push("/login");
      }
      this.props.history.push("/");
   }
  }

    fetch("/properties/all")
    .then(res => res.json())
    .then(res => this.setState({propertiesList: res})
  )
}

  render(){
  return (
    <div className="App">
      <Navigation/>
      <Route exact path="/" render={ () => <Homepage properties={this.state.propertiesList}/> } />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/login" component={LoginForm} />
      <Switch>
        <UserAccess exact path="/add" component={Add} />
      </Switch>
      
    </div>
  );
  }
}

const properties = [
  {

    id: "528471d3-f8d9-4905-ab91-08d858e49abe",
 
    name: "Los Angeles Empire",
 
    description: "Nice view and amazing garden",
 
    location: {
 
      type: "Point",
 
      coordinates: [-73.766493, 42.8777632],
      city: "Bucharest"
 
    },
 
    sold_price: "9000000",
 
    currency: "USD",
 
    images: [
          "https://image.shutterstock.com/image-photo/sun-bursting-through-clouds-over-600w-1044441313.jpg",
          "https://image.shutterstock.com/image-photo/orange-sunset-above-city-aerial-260nw-1092462017.jpg",
          "https://image.shutterstock.com/image-photo/sun-rising-above-traditional-british-260nw-1341394274.jpg"
    ],
 
     type: "house"
 
 },
 {

   id: "528471d3-f8d9-4905-ab91-08d858e49abe",

   name: "Los Angeles Empire",

   description: "Nice view and amazing garden",

   location: {

   type: "Point",

       coordinates: [-73.766493, 41.3777632],
       city: "Bucharest"

   },

   sold_price: "1000000",

   currency: "USD",

   images: [

         "https://image.shutterstock.com/image-photo/sun-bursting-through-clouds-over-600w-1044441313.jpg",
         "https://image.shutterstock.com/image-photo/orange-sunset-above-city-aerial-260nw-1092462017.jpg",
         "https://image.shutterstock.com/image-photo/sun-rising-above-traditional-british-260nw-1341394274.jpg"

    ],

    type: "house"

},
{

  id: "528471d3-f8d9-4905-ab91-08d858e49abe",

  name: "Los Angeles Empire",

  description: "Nice view and amazing garden",

  location: {

  type: "Point",

      coordinates: [-74.766493, 41.8777632],
      city: "Paris"

  },

  sold_price: "1000000",

  currency: "USD",

  images: [

        "https://image.shutterstock.com/image-photo/sun-bursting-through-clouds-over-600w-1044441313.jpg",
        "https://image.shutterstock.com/image-photo/orange-sunset-above-city-aerial-260nw-1092462017.jpg",
        "https://image.shutterstock.com/image-photo/sun-rising-above-traditional-british-260nw-1341394274.jpg"

   ],

   type: "house"

},
{

  id: "528471d3-f8d9-4905-ab91-08d858e49abe",

  name: "Los Angeles Empire",

  description: "Nice view and amazing garden",

  location: {

  type: "Point",

      coordinates: [-75.766493, 41.8777632],
      city: "New York"

  },

  sold_price: "1000000",

  currency: "USD",

  images: [

        "https://image.shutterstock.com/image-photo/sun-bursting-through-clouds-over-600w-1044441313.jpg",
        "https://image.shutterstock.com/image-photo/orange-sunset-above-city-aerial-260nw-1092462017.jpg",
        "https://image.shutterstock.com/image-photo/sun-rising-above-traditional-british-260nw-1341394274.jpg"

   ],

   type: "house"

},
{

  id: "528471d3-f8d9-4905-ab91-08d858e49abe",

  name: "Los Angeles Empire",

  description: "Nice view and amazing garden",

  location: {

  type: "Point",

      coordinates: [-72.766493, 41.8777632],
      city: "Iasi"

  },

  sold_price: "1000000",

  currency: "USD",

  images: [

        "https://image.shutterstock.com/image-photo/sun-bursting-through-clouds-over-600w-1044441313.jpg",
        "https://image.shutterstock.com/image-photo/orange-sunset-above-city-aerial-260nw-1092462017.jpg",
        "https://image.shutterstock.com/image-photo/sun-rising-above-traditional-british-260nw-1341394274.jpg"

   ],

   type: "house"

},
{

  id: "528471d3-f8d9-4905-ab91-08d858e49abe",

  name: "Los Angeles Empire",

  description: "Nice view and amazing garden",

  location: {

  type: "Point",

      coordinates: [-71.766493, 41.8777632],
      city: "Madrid"

  },

  sold_price: "30000",

  currency: "USD",

  images: [

        "https://image.shutterstock.com/image-photo/sun-bursting-through-clouds-over-600w-1044441313.jpg",
        "https://image.shutterstock.com/image-photo/orange-sunset-above-city-aerial-260nw-1092462017.jpg",
        "https://image.shutterstock.com/image-photo/sun-rising-above-traditional-british-260nw-1341394274.jpg"

   ],

   type: "house"

},
{

  id: "528471d3-f8d9-4905-ab91-08d858e49abe",

  name: "Los Angeles Empire",

  description: "Nice view and amazing garden",

  location: {

  type: "Point",

      coordinates: [-76.766493, 41.8777632],
      city: "Madrid"

  },

  sold_price: "1000000",

  currency: "USD",

  images: [

        "https://image.shutterstock.com/image-photo/sun-bursting-through-clouds-over-600w-1044441313.jpg",
        "https://image.shutterstock.com/image-photo/orange-sunset-above-city-aerial-260nw-1092462017.jpg",
        "https://image.shutterstock.com/image-photo/sun-rising-above-traditional-british-260nw-1341394274.jpg"

   ],

   type: "house"

},
{

  id: "528471d3-f8d9-4905-ab91-08d858e49abe",

  name: "Los Angeles Empire",

  description: "Nice view and amazing garden",

  location: {

  type: "Point",

      coordinates: [-77.766493, 41.8777632],
      city: "Madrid"

  },

  sold_price: "1000000",

  currency: "USD",

  images: [

        "https://image.shutterstock.com/image-photo/sun-bursting-through-clouds-over-600w-1044441313.jpg",
        "https://image.shutterstock.com/image-photo/orange-sunset-above-city-aerial-260nw-1092462017.jpg",
        "https://image.shutterstock.com/image-photo/sun-rising-above-traditional-british-260nw-1341394274.jpg"

   ],

   type: "house"

},
];

export default withRouter(App);
