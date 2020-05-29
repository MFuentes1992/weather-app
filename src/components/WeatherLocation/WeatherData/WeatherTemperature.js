import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUmbrella, faSun, faCloudSun, faCloudRain, faBolt, faSmog, faSpinner} from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

const getWeatherIcon = weatherState => {
    switch(weatherState){
        case 'Clear':            
            return faSun;            
        case 'Clouds':
            return faCloudSun;            
        case 'Rain':
            return faCloudRain            
        case 'Drizzle':
            return faUmbrella; 
        case 'Thunderstorm':
            return faBolt;  
        case 'Haze':
            return faSmog;  
        case 'Mist':
            return faSmog;  
        case 'Fog':
            return faSmog;          
        default:
            return faSpinner;            
    }
}

const WeatherTemperature = ({ temperature, weatherState }) =>{
    return (
        <div className="weatherTemperature">
            <div className="tempIcon">
                <FontAwesomeIcon icon={getWeatherIcon(weatherState)}></FontAwesomeIcon>
            </div>
            <div className="tempCanonic">{`${temperature} °C`}</div>
        </div>
    );
}
WeatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired
};
export default WeatherTemperature;