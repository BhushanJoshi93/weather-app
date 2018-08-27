import React from "react"

//1st way explained in Weather.js
// class Titles extends React.Component {
//   render(){
//
//     //built in react component method. Returns JSX which an JS extension , used to see what the UI looks like.
//
//     return(
//       //returns JSX which is not javascript. so we will have to used Babel which will convert JSX into javascript
//       //return method can only return one DIV . so everything has to be inside it.
//       <div>
//         <h1>Bhushan's Weather Finder</h1>
//         <p> Find out temperature,conditions..</p>
//
//       </div>
//     );
//   }
// };


//2nd way explained in Weather.js
const Titles = () =>(
  <div>
    <h1 className="title-container__title">Bhushan's Weather Finder</h1>
    <h3 className="title-container__subtitle"><i>Find out temperature and conditions.</i></h3>
  </div>
);



export default Titles;
