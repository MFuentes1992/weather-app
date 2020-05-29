import React, {Component} from 'react';
import WeatherData from '../WeatherLocation/WeatherData/WeatherData.js';
import propTypes from 'prop-types'
class ForecastItem extends Component{
    render(){
        return(
            <div className="forecast-item-container">
                <div className="card-white-face">
                    <div className="weekday"><strong>{this.props.weekday}</strong></div>
                    <WeatherData temperature={this.props.temperature} weatherState={this.props.weatherState} humidity={this.props.humidity} wind={this.props.wind}></WeatherData>
                </div>                
            </div>
        )
    }
}
ForecastItem.propTypes = {
    weekday: propTypes.string.isRequired,
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired,
    humidity: propTypes.number.isRequired,
    wind: propTypes.number.isRequired
}
export default ForecastItem;