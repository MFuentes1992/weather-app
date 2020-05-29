import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import propTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) =>{
    return(
        <div className="weatherExtraInfo">
            <div>
                <span>{`Humedad - ${humidity}%`}</span>
            </div>
            <div>
                <span>{`Vientos - ${wind} m/s W`}</span>
            </div>
        </div>
    );
}
WeatherExtraInfo.propTypes = {
    humidity: propTypes.number.isRequired,
    wind: propTypes.number.isRequired
}
export default WeatherExtraInfo;