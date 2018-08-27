import React from "react"


// 2 WAYS 1) COMMENTED : WHEN YOU HAVE MULTIPLE DIVS . 2) WHEN YOU WANT STATELESS FUNCTIONAL COMPONENTS

//FIRST WAY


// class Weather extends React.Component {
//   render(){
//     return(
//       <div>
//
//         {this.props.country && this.props.city && <p>Location: {this.props.country},{this.props.city}</p> }
//         {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
//         {this.props.description && <p>Conditions: {this.props.description}</p>}
//         {this.props.error && <p>Error: {this.props.error}</p>}
//
//       </div>
//     );
//   }
// };

//SECOND WAY
const Weather = props =>(

  <div className = "weather__info">

    {
      props.country && props.city && <p className="weather__key">Location:
        <span className="weather__value"> {props.country},{props.city}</span>
      </p>
    }
    {
      props.temperature && <p className="weather__key">Temperature:
        <span className="weather__value"> {props.temperature}</span>
      </p>
    }
    {
      props.humidity && <p className="weather__key">Humidity:
      <span className="weather__value"> {props.humidity}</span>
      </p>
    }
    {
      props.description && <p className="weather__key">Conditions:
      <span className="weather__value"> {props.description}</span>
      </p>
    }
    {
      props.error && <p className="weather__key">Error:
        <span className="weather__error"> {props.error}</span>
      </p>
    }

  </div>


);


export default Weather;
