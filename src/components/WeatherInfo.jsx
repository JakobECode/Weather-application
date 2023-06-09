import React from 'react';
import Loading from './Loading';

const WeatherInfo = ({loadingData, showData, weather, forecast}) => {
    // tilldelningar datum

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl_1 = "";
    var iconUrl_2 = "";
    var iconUrl_3 = "";
    var iconUrl_4 = "";
    var iconUrl_5 = "";

    var forecastDate_1 = "";
    var forecastDate_2 = "";
    var forecastDate_3 = "";
    var forecastDate_4 = "";
    var forecastDate_5 = "";

    if(loadingData){
        return  <Loading />;
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        iconUrl_1 = url + forecast.list[3].weather[0].icon + ".png";
        iconUrl_2 = url + forecast.list[12].weather[0].icon + ".png";
        iconUrl_3 = url + forecast.list[21].weather[0].icon + ".png";
        iconUrl_4 = url + forecast.list[30].weather[0].icon + ".png";
        iconUrl_5 = url + forecast.list[39].weather[0].icon + ".png";

        forecastDate_1 = new Date(forecast.list[3].dt_txt).toLocaleDateString('en-GB');
        forecastDate_2 = new Date(forecast.list[12].dt_txt).toLocaleDateString('en-GB');
        forecastDate_3 = new Date(forecast.list[21].dt_txt).toLocaleDateString('en-GB');
        forecastDate_4 = new Date(forecast.list[30].dt_txt).toLocaleDateString('en-GB');
        forecastDate_5 = new Date(forecast.list[39].dt_txt).toLocaleDateString('en-GB');

    }

    return (
        <div className="mt-5">
        {
            showData === true ? (
                <div className="container">
                    <div className="card mb-3 mx-auto bg-dark text-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <h3 className="card-title">{weather.name}</h3>
                                <p className="card-date">{date}</p>
                                <h1 className="card-temp">{(weather.main.temp).toFixed(1)}ºC</h1>
                                <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                <img src="https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5 className="card-text">Max temp: {(weather.main.temp_max).toFixed(1)}ºC</h5>
                                    <h5 className="card-text">Minimum temp: {(weather.main.temp_min).toFixed(1)}ºC</h5>
                                    <h5 className="card-text">Feels like: {(weather.main.feels_like).toFixed(1)}ºC</h5>
                                    <h5 className="card-text">Humidity: {weather.main.humidity}%</h5>
                                    <h5 className="card-text">Wind speed: {weather.wind.speed}m/s</h5>
                                </div>
                                <hr/>

                                <div className="row mt-4">
                                    <div className="col">
                                        <p>{forecastDate_1}</p>
                                        <p className="description"><img src={iconUrl_1} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[3].main.temp).toFixed(1)}ºC</p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate_2}</p>
                                        <p className="description"><img src={iconUrl_2} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[12].main.temp).toFixed(1)}ºC</p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate_3}</p>
                                        <p className="description"><img src={iconUrl_3} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[21].main.temp).toFixed(1)}ºC</p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate_4}</p>
                                        <p className="description"><img src={iconUrl_4} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[30].main.temp).toFixed(1)}ºC</p>
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate_5}</p>
                                        <p className="description"><img src={iconUrl_5} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[39].main.temp).toFixed(1)}ºC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ):(
                    <h2 className="text-light">No data</h2>
                )
            }
        </div>
    );
}

export default WeatherInfo;