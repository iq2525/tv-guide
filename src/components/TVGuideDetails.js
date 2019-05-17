import React, { Component } from "react";
import './TVGuideDetails.scss'
export default class TVGuideDetails extends Component {
  
  renderTVGuideDetails = (tvGuide) => {
    if (!tvGuide){
      return (<div className="instructions">Click the button to get tvGuide data for London</div>)
    }
    
    console.log('11-tvGuide: ', tvGuide)

    return (
      <div>
        <h2 className="heading">TVGuide</h2>
        <div className="show-name">{tvGuide[0].show.name}</div>
      </div>
    )
  }

  
  render() {
    const { tvGuide } = this.props;

    return (
      <div className="tvGuide-details">
        {this.renderTVGuideDetails(tvGuide)}
      </div>
    );
  }
}
