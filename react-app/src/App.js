import React from "react";
import Form from "./Form";
import WeatherDetails from './WeatherDetails'
const Api_key = "4c3a901b6e084392";
var weather_data;
var lat;
var long; var city;

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      WeatherReports: []      
    };
  }
  getWeather = async (place) => {
    // console.log(place);
    city=place.city;
    lat=place.latLng.lat;
    long=place.latLng.lng;
    const data = await fetch(`http://api.wunderground.com/api/${Api_key}/forecast7day/q/${lat},${long}.json`);
    weather_data = await data.json();
    // console.log(weather_data)
    if(lat && long){
      let report = {location: city, report:weather_data.forecast.simpleforecast.forecastday};        
        this.setState({  
          WeatherReports: this.state.WeatherReports.length !==0 ?[report,...this.state.WeatherReports] : [report]         
         })
    }  
  }  
  render() {
    // console.log(this.weatherReport)
    return (
      <div>
        <h2 className='title'>weather app</h2>
        <Form getWeather={this.getWeather}/>
        <WeatherDetails         
            WeatherReports={this.state.WeatherReports}                    
        />
      </div>
    );
  }
}

export default Weather;
