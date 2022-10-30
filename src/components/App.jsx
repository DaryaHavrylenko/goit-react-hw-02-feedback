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
     <div>Statistics</div>
     <div>
       <p>Good:<span>{this.state.good}</span></p>
       <p>Neutral:<span>{this.state.neutral}</span></p>
       <p>Bad:<span>{this.state.bad}</span></p>
       <p>Total:<span>{this.countTotalFeedback()}</span></p>
       <p>Positive Feedback:<span>{this.countPositiveFeedbackPercentage() || 0? this.countPositiveFeedbackPercentage() : 0}%</span></p>
     </div>
   </div>
  
   )
   
  }
};
export default App