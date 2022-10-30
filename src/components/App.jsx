import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";



class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  countFeedback = (event) => {
 
    this.setState(prevState => {
      return {
        ...this.state,
      [event.target.name]: prevState[event.target.name] + 1,
       }
   })
  }
  
  countTotalFeedback = () => {
    const values = Object.values(this.state);
  
    let total = 0;
    for (const value of values) {
      total += value;
     
    }
    return total;
  }

  countPositiveFeedbackPercentage = () => {
   
    const total = this.state.good + this.state.neutral + this.state.bad;
   const Percentege = Number(((this.state.good * 100) / (total)).toFixed(0));
  
    return Percentege;
}

 render() {
   return (<div>
     <div> Please leave feedback</div>
    <div>
       <button type="button" name="good" onClick={this.countFeedback}>Good</button>
       <button type="button" name="neutral" onClick={this.countFeedback}>Neutral</button>
       <button type="button" name="bad" onClick={this.countFeedback}>Bad</button>
     </div>
 <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage() || 0? this.countPositiveFeedbackPercentage() : 0} />
   </div>
  
   )
   
  }
};
export default App