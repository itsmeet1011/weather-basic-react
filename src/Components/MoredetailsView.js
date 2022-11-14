import React from "react";

class MoredetailsView extends React.Component {
  // console.log(props.weather.city);
  // const time={props.weather.city};
  // const humidity={props.weather.list[1].main.humidity};
  // const wind={props.weather.list[1].main.speed}
  render() {
    if (!this.props.weather) {
      return <div className="more view dynamic1">loading</div>;
    }

    if (this.props.weather) {
      const time = this.props.weather.city;
      const humidity = this.props.weather.list[1].main.humidity;
      const wind = this.props.weather.list[1].wind.speed;

      const sunrise = new Date(1000 * time.sunrise);
      const sunset = new Date(1000 * time.sunset);

      const riseHR = `${sunrise.getHours()}`.padStart(2, 0);
      const riseMin = `${sunrise.getSeconds()}`.padStart(2, 0);
      const setHR = `${sunset.getHours()}`.padStart(2, 0);
      const setMin = `${sunrise.getSeconds()}`.padStart(2, 0);

      return (
        <div className="more view dynamic1">
          <ul className="list columbFlex">
            <li>
              <span className="moreElementEx">
                <span className="moreElement ">
                  <span className="material-symbols-outlined redcolor">
                    wb_twilight
                  </span>
                  Sunrise
                </span>
                {`${riseHR}:${riseMin}`}
              </span>
            </li>
            <li>
              <span className="moreElementEx">
                <span className="moreElement">
                  <span className="material-symbols-outlined orengeRed">
                    sunny_snowing
                  </span>
                  Sunset
                </span>
                {`
                    ${setHR}:${setMin}`}
              </span>
            </li>
            <li>
              <span className="moreElementEx">
                <span className="moreElement">
                  <span className="material-symbols-outlined graycolor">
                    air
                  </span>
                  Wind
                </span>
                {`${wind} Kmph`}
              </span>
            </li>
            <li>
              <span className="moreElementEx">
                <span className="moreElement">
                  <span className="material-symbols-outlined bluecolor">
                    water_drop
                  </span>
                  Humidity
                </span>
                {`${humidity} %`}
              </span>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default MoredetailsView;
