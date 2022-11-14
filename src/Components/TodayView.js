import React from "react";
import ListedDetails from "./listedDetails";

class TodayView extends React.Component {
  componentDidUpdate() {
    console.log(this.props.weather);
  }

  render() {
    if (!this.props.weather) {
      return <div className="todayView view dynamic">loading</div>;
    }

    if (this.props.weather) {
      const date = new Date();
      const date_Frmt = date.toDateString();
      return (
        <div className="todayView view dynamic columbFlex">
          <div>
            <h3 className="moreElement">
              <span className="material-symbols-outlined redcolor">
                location_on
              </span>
              <span className="yellowcolor">
                {this.props.weather.city.name}
              </span>
            </h3>
            <p>{date_Frmt}</p>
          </div>

          <div className="flex">
            <img
              src={`https://openweathermap.org/img/wn/${this.props.weather.list[1].weather[0].icon}@2x.png`}
              alt={this.props.weather.list[1].main.description}
            />
            <h1 className="yellowcolor">
              {Math.ceil(this.props.weather.list[1].main.temp)}°C
            </h1>
          </div>
          <ListedDetails
            list={this.props.weather.list[1].weather[0]}
            moreDetails={this.props.weather.list[1].main}
          />
        </div>
      );
    }
  }
}

export default TodayView;
