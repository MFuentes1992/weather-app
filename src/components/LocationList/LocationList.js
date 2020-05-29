import  React, { Component } from 'react';
import WeatherLocation from '../WeatherLocation/WeatherLocation.js';
import PropTypes from 'prop-types';
import {Carousel} from 'react-bootstrap';
class LocationList extends Component{
    constructor(props){
        super(props);
        this.wrapper = React.createRef();
    }
    render(){
        return(
            <div className="LocationList" ref={this.wrapper}>
                <Carousel onSlid={this.props.handleOnSlid} interval={10000  }>
                {   this.props.cities === null ? <h3>No location found</h3> :              
                    this.props.cities.map( (_city) => (                        
                        <Carousel.Item  key={_city + 1}>
                        <WeatherLocation 
                            key={_city} 
                            city={_city} 
                            onWeatherLocationClic={()=>this.props.onSelectedLocation(_city)} />
                         </Carousel.Item>
                    ) )
                   
                }
                </Carousel>
            </div>
        )
    }
}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}
export default LocationList;