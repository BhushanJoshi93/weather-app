// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

import React from "react"
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "1c8b4f08cab20b6c51e658d4faa1b547"


class App extends React.Component {

//state

      state = {
        //state is something like what happens when data changes or user interacts at some point
        //it is an object which contains key value pairs
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      }




//get Weather
  getWeather = async(e) =>{
    e.preventDefault();

    //e.preventDefault stops the page  from reloading
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //asyn await is used for writing asyncrhonous code
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);


    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country:data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    }
    else {
      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please Enter the Values."
    });
  }


  }




  render(){

    //built in react component method. Returns JSX which an JS extension , used to see what the UI looks like.

    return(
      //returns JSX which is not javascript. so we will have to used Babel which will convert JSX into javascript
      //return method can only return one DIV . so everything has to be inside it.

      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">

                <div className="col-xs-5 title-container">
                  <Titles/>
                </div>

                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }
};





export default App;
