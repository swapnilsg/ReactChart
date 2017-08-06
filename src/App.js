import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import  $ from 'jquery';
class App extends Component {
  constructor(props){
    super(props);
    this.state ={revenue:0,hours:0,jobs:0 }
  }
  componentDidMount(){
    let path = document.querySelectorAll('.figure path');
    let percentage = this.props.revenue/100;
    let hoursPer = this.props.hours/100;
    let jobsPer = this.props.jobs/100;
    let val =1;
    path.forEach((index)=>{
      let temp;
      let length = index.getTotalLength();
      console.log("testtts",index,);
      // Clear any previous transition
      index.style.transition = index.style.WebkitTransition ='none';
      // Set up the starting positions
      index.style.strokeDasharray = length + ' ' + length;
      index.style.strokeDashoffset = length * (1 - percentage);

      index.getBoundingClientRect();

      index.style.transition = index.style.WebkitTransition ='stroke-dashoffset 5s ease-in-out';

      index.style.strokeDashoffset = '0';
      //let currentPathLength = length;
    //   setInterval(()=>{
    //     if (currentPathLength <= length * (1 - percentage)) {
    //        clearInterval();
    //     return;
    //   }
    //   let percentText = 100 - Math.round(parseFloat(currentPathLength)/length * 100);
    //   index.style.strokeDashoffset = currentPathLength;
    //   currentPathLength -= 2;
    //   this.setState({revenue:percentText});
    // });
    });
  }
  render() {
    return (
      <div className="figure">
      	<svg version="1.1" id="Layer_1" x="250px" y="250px" width="1000px" height="1000px">
      		<path className="path" fill="none" stroke="#000000" strokeWidth="10"  strokeMiterlimit="10" d="M150,250a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"/>
          <path className="path" fill="none" stroke="#000000" strokeWidth="10" strokeMiterlimit="10" d="M400,250a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"/>
          <path className="path" fill="none" stroke="#000000" strokeWidth="10" strokeMiterlimit="10" d="M650,250a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"/>
      	</svg>
      	<p className="revenue">{this.state.revenue}%</p>
        <p className="hours">{this.state.hours}%</p>
        <p className="jobs">{this.state.jobs}%</p>
      </div>
    );
  }
}

class Chart extends Component {
  render(){
    return(
      <div>
      <App revenue='60' hours='50' jobs='80'/>
      </div>
    );
  }
}

export default Chart;
