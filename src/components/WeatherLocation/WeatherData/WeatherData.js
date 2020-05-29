import React from 'react';
import WeatherTemperature from './WeatherTemperature.js';
import WeatherExtraInfo from './WeatherExtraInfo.js';
import {Col, Row} from 'react-bootstrap';
import propTypes from 'prop-types';

const WeatherData = ({temperature, weatherState, humidity, wind}) => {
    return (
        <div className="weatherData">
            <Row>
                <Col lg={12} md={12} sm={12} >
                    <WeatherTemperature temperature={temperature} weatherState={weatherState} ></WeatherTemperature>
                    <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
                </Col>
            </Row>
        </div>
    );
}


WeatherData.propTypes = {
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired,
    humidity:  propTypes.number.isRequired,
    wind:   propTypes.number.isRequired
}
export default WeatherData;