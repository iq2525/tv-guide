import React, { Component } from "react";
import "./App.scss";
import TVGuideDetails from "./components/TVGuideDetails.js";
import TVGuideControlPanel from "./components/TVGuideControlPanel.js";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, tvGuide, onUpdateTVGuide, error } = this.props;
    
    return (
      <div className="App">
        <header className="header">
          
          <h1 className="title">
            Welcome to the TVGuide App
          </h1>
        </header>

        <TVGuideDetails 
          fetching={fetching}
          tvGuide={tvGuide}
          error={error}
        />

        <TVGuideControlPanel
          fetching={fetching}
          onUpdateTVGuide={onUpdateTVGuide}
          error={error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    tvGuide: state.tvGuide,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateTVGuide: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);