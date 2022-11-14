import React from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import TodayView from "./Components/TodayView";
import MoredetailsView from "./Components/MoredetailsView";
import ForecastView from "./Components/ForecastView";

import "./App.css";

const KEY = "5730cc01c2bc94a9298c7f9965da4ec1";
const End_Point = "http://api.openweathermap.org/geo/1.0/direct?";
const END_POINT = "http://api.openweathermap.org/data/2.5/forecast?";

class App extends React.Component {
  state = { weatherData: null };

  onSearchSubmit = (term) => {
    let finalEndPoint1 = `${End_Point}q=${term}&limit=1&appid=${KEY}`;

    axios.get(finalEndPoint1).then((res) => {
      console.log(res.data);
      this.onFindWeath(res.data[0]);
    });
  };

  onFindWeath = async (res) => {
    console.log(res);

    let finalEndPoint = `${END_POINT}lat=${res.lat}&lon=${res.lon}&units=metric&appid=${KEY}`;

    const response = await axios.get(finalEndPoint);
    console.log(response);
    this.setState({ weatherData: response.data });
  };

  onClick = ({ latitude, longitude }) => {
    const btnCoord = { lat: latitude, lon: longitude };
    console.log(btnCoord);
    this.onFindWeath(btnCoord);
  };

  render() {
    return (
      <div className="container">
        <div className="grid">
          <SearchBar
            onBtnClick={this.onClick}
            onFormSubmit={this.onSearchSubmit}
          />
          <TodayView weather={this.state.weatherData} />
          <MoredetailsView weather={this.state.weatherData} />
          <ForecastView weather={this.state.weatherData} />
        </div>
      </div>
    );
  }
}

export default App;
