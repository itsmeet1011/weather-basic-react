import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onBtnClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        this.props.onBtnClick(position.coords);
      },
      (err) => {
        console.log(err.message);
      }
    );
  };

  onFormSubmited = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="searchBox">
        <div className="searchCon">
          <form onSubmit={this.onFormSubmited} className="searchInputForm">
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              className="searchInput bar"
              type="text"
              name=""
              placeholder="Search"
            />
          </form>

          <button onClick={this.onBtnClick} className="searchButton btn">
            <ion-icon name="location-outline"></ion-icon>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
