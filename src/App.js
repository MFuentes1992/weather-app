import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList/LocationList.js';
import {Navbar, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFlask, faSubscript} from '@fortawesome/free-solid-svg-icons';
import {Container, Col, Row} from 'react-bootstrap';
import ForecastExtended from './components/ForecastExtended/ForecastExtended.js';
import {forecastURL, apiKey} from './Const/conts.js';
import moment from 'moment';
import 'moment/locale/es';
import 'bootstrap/dist/css/bootstrap.min.css';

const cities = [
  "Curitiba",
  "Los Angeles",
  "Ciudad Universitaria, MX"
]
 let citySelected = cities[0];

 var newForeCast = null;
 var forecast_url = "";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      citySelected: citySelected,
      forecast: [],
      cities: cities
    }
    this.onSelectedLocation = this.onSelectedLocation.bind(this);
    this.handleOnSlid = this.handleOnSlid.bind(this);    
    this.SearchCity = this.SearchCity.bind(this);
  }

  componentDidMount(){    
    this.fetch_data();
  }

  fetch_data(){ 
    forecast_url = forecastURL + '?q=' + this.state.citySelected + '&appid=' + apiKey + '&units=metric';          
    fetch(forecast_url).then(
        data => (data.json())
    ).then(
        (forecast_data) => {
            
            newForeCast = forecast_data.list.filter( item =>
                moment.unix(item.dt).utc().hour() === 18
            );
            console.log(forecast_url);
            this.setState({
              forecast: newForeCast
            })
    });
  }

  FecthDataFromSearch(country){
    forecast_url = forecastURL + '?q=' + country + '&appid=' + apiKey + '&units=metric';          
    fetch(forecast_url).then(
        data => (data.json())
    ).then(
        (forecast_data) => {          
          forecast_data.list.length > 0 ?
            newForeCast = forecast_data.list.filter( item =>
                moment.unix(item.dt).utc().hour() === 18
            ) : newForeCast = [];
            console.log(forecast_url);
            this.setState({
              forecast: newForeCast
            })
    });
  }

  SearchCity(){
    if(document.getElementById('search-city').value.length === 0){
      this.setState({
        citySelected: citySelected,
        cities: cities
      });
    }else{
      this.setState({
        citySelected: document.getElementById('search-city').value,
        cities: [document.getElementById('search-city').value]
      });
      this.FecthDataFromSearch(document.getElementById('search-city').value);
    }    
  }

  render(){
    return (
      <div className="App">  
          <Navbar bg="light" expand="lg" className="justify-content-between">
            <Navbar.Brand href="#home"><h1 className="header-title">Weather - Daily</h1></Navbar.Brand>                    
            <Form inline>
              <Form.Group controlId="search-city">
                <Form.Control type="text" placeholder="Search"  className="mr-sm-2" />
              </Form.Group>
              <Button variant="outline-success" onClick={this.SearchCity}>Search</Button>
            </Form>
          </Navbar>
          <Container fluid className="pdt-2">          
            <LocationList cities={this.state.cities} handleOnSlid={this.handleOnSlid} onSelectedLocation={this.onSelectedLocation}/>          
            <Col lg={12} md={12} sm={12} >
              <ForecastExtended forecast={this.state.forecast} city={this.state.citySelected}></ForecastExtended>
            </Col>
          </Container>
          <div className="Footer">
            <Row>
              <Col xl={6} lg={6} md={6} sm={12} className="footer-left">
                <h1 className="footer-header-title">Weather - Daily</h1>
                <strong>- MarkCraft Labs</strong>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faFlask}></FontAwesomeIcon>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} className="footer-middle">
                <p>Develop for experimental &nbsp;&nbsp;<FontAwesomeIcon icon={faSubscript}></FontAwesomeIcon>&nbsp;&nbsp; and research purposes <strong>@MarkCraft Labs</strong> 2020</p>
              </Col>              
            </Row>
          </div>                                        
      </div>
    )
  }

  onSelectedLocation(cityName) {
    this.setState({
      citySelected: cityName
    });
    this.fetch_data();
  }

  handleOnSlid(SelectedIndex){
    this.onSelectedLocation(cities[SelectedIndex]);
  }

}

export default App;
