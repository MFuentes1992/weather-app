import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/es';
import ForecastItem from './ForecastItem.js';
import {CircularProgress} from '@material-ui/core';
import propTypes from 'prop-types';


class ForecastExtended extends Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: 0.0,
            weatherState: "Clear",
            humidity: 52,
            wind: 3.1
        }        
    }   
     
    render(){
        return(
            <div className="forecastExtended">
                <div className="city-container"><h3 className="city-title">{this.props.city}</h3></div>
                {   this.props.forecast.length === 0 ? <div><CircularProgress /><h3>Fetching data...</h3></div> :          
                    this.props.forecast.map( (forecast_item) => (
                        <ForecastItem weekday={moment.unix(forecast_item.dt).format('ddd')} key={forecast_item.dt} temperature={forecast_item.main.temp} weatherState={forecast_item.weather[0].main} humidity={forecast_item.main.humidity} wind={forecast_item.wind.speed}></ForecastItem>
                    ) )
                }
            </div>
        )
    }
}
ForecastExtended.propTypes = {
    city: propTypes.string.isRequired
}
export default ForecastExtended;