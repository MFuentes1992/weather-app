import React, {Component} from 'react';
import Location from './Location/Location.js';
import WeatherData from './WeatherData/WeatherData.js';
import getURLFromCountry from '../../services/getURLFromCountryCode';
import {CircularProgress} from '@material-ui/core';
import propTypes from 'prop-types';
import '../main.css';

class WeatherLocation extends Component {
    constructor(props){
        super(props);        
        this.state ={
            _city: "",
            _temperature: 0,
            _weatherstate: "",
            _humidity: 0,
            _wind: 0,
            _loaded: 0
        }        
    }

    componentDidMount(){
        this.fetchData();
    }   
    
    fetchData(  ){
        const api_weater = getURLFromCountry(this.props.city);
        fetch( api_weater ).then( (resolve) => {            
            return resolve.json();
        }).then( (json) => { 
            if(typeof json.name === 'undefined'){
                this.setState({
                    _city: "",
                    _temperature: 0,
                    _weatherstate: "",
                    _humidity: 0,
                    _wind: 0,
                    _loaded: 0
                });
            }else{
                this.setState({
                    _city: json.name,
                    _temperature: json.main.temp,
                    _weatherstate: json.weather[0].main,
                    _humidity: json.main.humidity,
                    _wind: json.wind.speed,
                    _loaded: 1
                });
            }   

        } );
    }
    render(){
        return(
            <div className="weatherLocation" onClick={this.props.onWeatherLocationClic}>
                <Location city={this.state._city}>
                </Location>
                { this.state._loaded === 1 ?
                        <WeatherData temperature={this.state._temperature} weatherState={this.state._weatherstate} humidity={this.state._humidity} wind={this.state._wind} />  :
                    <div >
                        <CircularProgress />
                    </div>              
                }
            </div>
        )
    }
}
WeatherLocation.propTypes = {
    city: propTypes.string.isRequired,
    onWeatherLocationClic: propTypes.func
}
export default WeatherLocation;