import React from "react";
import "./ForeCast.css";

class ForecastView extends React.Component {
  render() {
    if (!this.props.weather) {
      return <div className="forecast view dynamic2">loading</div>;
    }

    console.log(this.props.weather);

    if (this.props.weather) {
      const weatherArr = this.props.weather.list;
      console.log(weatherArr);

      const list = weatherArr.map((iteam) => {
        const weatherDay = new Date(iteam.dt * 1000).getDay();

        const hr = `${new Date(iteam.dt * 1000).getHours()}`.padStart(2, 0);
        const temp = Math.ceil(iteam.main.temp);

        const justefyDay = (weatherDay) => {
          const day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

          const compDay = new Date().getDay();

          if (compDay === weatherDay) {
            return "Today";
          } else {
            return day[weatherDay];
          }
        };

        return (
          <div key={iteam.dt} className="scrollIteam">
            <span>{`${justefyDay(weatherDay)}, ${hr}:00`}</span>
            <span className={temp > 25 ? "orengeRed" : "yellowcolor"}>
              {`${iteam.weather[0].main} ${temp}°C`}
            </span>
          </div>
        );
      });

      return <div className="forecast view scrollBar dynamic2">{list}</div>;
    }
  }
}

export default ForecastView;
