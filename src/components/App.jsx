import React, { Component } from "react";

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";



class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  countFeedback = (options) => {
 
  this.setState((prevState) => {
   
      return {
        ...this.state,
      [options]: prevState[options] + 1,
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
   return (
     <div>
       <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.countFeedback}></FeedbackOptions>
    
 <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage() || 0? this.countPositiveFeedbackPercentage() : 0} />
   </div>
  
   )
   
  }
};
export default App;