// import { students, total } from "./students";
// import { add, multiply } from "./calculator";
import { Entity } from "./classExample";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const api_key = "c0629d95d24c756ee82571475f1ad21e";
//const cityName = document.getElementById("cityName").value;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      city: "",
      description: "",
      humidity: 0,
      minTemp: 0,
      maxTemp: 0,
      wind: 0
    };
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  handleClick(event) {
    event.preventDefault();
    let el = event.target;
    let inputVal = document.getElementById("cityName").value;
    this.setState({ cityNew: inputVal });
    this.grabWeather(inputVal);
  }

  grabWeather(cityname) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${cityname}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          description: json.weather[0].description,
          humidity: json.main.humidity,
          minTemp: json.main.temp_min,
          maxTemp: json.main.temp_max,
          wind: json.wind.speed
        });
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div>
        <div className="header">
          <input
            type="text"
            name="cityname"
            id="cityName"
            placeholder="Enter City"
            className="city-field"
          />
          <a
            href="#"
            className="anchor-click"
            onClick={this.handleClick.bind(this)}
          >
            Show
          </a>
        </div>

        <div className="report-table">
          <h1 className="report-table-hdr">
            Weather report details below! {this.state.city}
          </h1>

          <div>
            <p>
              <strong>{this.state.cityNew}</strong>
            </p>
            <p>{this.Capitalize(this.state.description)}</p>
            <p>Humidity: {this.state.humidity}</p>
            <p>Min Temperature: {this.state.minTemp}</p>
            <p>Max Temperature: {this.state.maxTemp}</p>
            <p>Wind Speed: {this.state.wind}</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//console.log(students, total);
//console.log(add(3, 9));
//console.log(multiply(10, 0));

// class Hobbit extends Entity {
//   constructor(name, height) {
//     super(name, height);
//   }
//
//   greet() {
//     console.log(`Hello! I am ${this.name} from Shire`);
//   }
// }
//
// let Merry = new Entity("praveen", 1.6);
// let Fordo = new Hobbit("Fordo Baggins", 4.6);
// console.log(Merry);
// console.log(Fordo);
// Fordo.greet();
