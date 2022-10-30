import React, { Component } from "react";



class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  countFeedback = (event) => {
    this.setState(prevState => {
      return {
      [event.target.name]: prevState[event.target.name] + 1,
       }
   })
  }
  

 render() {
   return (<div>
     <div> Please leave feedback</div>
    <div>
       <button type="button" name="good" onClick={this.countFeedback}>Good</button>
       <button type="button" name="neutral" onClick={this.countFeedback}>Neutral</button>
       <button type="button" name="bad" onClick={this.countFeedback}>Bad</button>
     </div>
     <div>Statistics</div>
     <div>
       <p>Good:<span>{this.state.good}</span></p>
       <p>Neutral:<span>{this.state.neutral}</span></p>
      <p>Bad:<span>{ this.state.bad}</span></p>
     </div>
   </div>
  
   )
   
  }
};
export default App