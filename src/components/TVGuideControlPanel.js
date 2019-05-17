import React, { Component } from "react";
import './TVGuideControlPanel.scss'
export default class TVGuideControlPanel extends Component {
  render() {
    const { fetching, onUpdateTVGuide, error } = this.props;
    
    return (
      <div className="tvGuide-control-panel">
        {fetching ? (
          <button className="update-button" disabled={true}>Fetching...</button>
        ) : (
          <button className="update-button" onClick={onUpdateTVGuide}>Update TVGuide</button>
        )}

        {error && 
          <div className="error-message">
            Error - something not working!
          </div>
        }
      </div>
    );
  }
}