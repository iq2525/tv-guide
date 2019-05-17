import React, { Component } from "react";
import './WeatherDetails.scss'
export default class WeatherDetails extends Component {
  
  renderWeatherDetails = (weather) => {
    if (!weather){
      return (<div className="instructions">Click the button to get weather data for London</div>)
    }
    
    // const { name: cityName, weather: weatherConditions } = weather
    // const weatherConditionsList = weatherConditions.map((weatherCondition) => {
    //   return (<div 
    //             className="weather-condition"
    //             key={weatherCondition.id}>
    //               {weatherCondition.description}
    //           </div>)
    // })

    console.log('weather: ', weather[0].show.id)

    return (
      <div>
        {/* <h2 className="heading">Weather for {cityName}</h2> */}
        <h2 className="heading">Weather</h2>
        <div>{weather[0].show.id}</div>
      </div>
    )
  }

  
  render() {
    const { weather } = this.props;

    return (
      <div className="weather-details">
        {this.renderWeatherDetails(weather)}
      </div>
    );
  }
}
