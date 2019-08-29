//PrayerTimes and Clock component
import React from "react";
import "./PrayerTimes.css";

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://157.245.0.21:3000/get_times"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });

      this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"],
   d = new Date();
    this.setState({
        day: d.getDate().toLocaleString(),
        month: monthNames[d.getMonth()],
        year: d.getFullYear(),
        hour : new Date().getHours().toLocaleString(),
        minute : new Date().getMinutes().toLocaleString(),
        second : new Date().getSeconds().toLocaleString(),
    });
  }

  render() {
    var { isLoaded, items } = this.state;
    console.log(items);
    console.log(this.state.year)


    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      let date;
      let FajrTime, DhurTime, AsrTime, MagribTime, IshaTime;
      {
        items.map(item => (
          <li key={item.id}>
            {(date = item.date)}
            {(FajrTime = item.Fajr)} {(DhurTime = item.Zuhr)}{" "}
            {(AsrTime = item.Asr)} {(MagribTime = item.Magrib)}{" "}
            {(IshaTime = item.Isha)}
          </li>
        ));
      }
      return (
        <div className="time-div" style={{ zIndex: "3" }}>
          <ul>
            <li>
              <div className="text">Fajr</div>
              <div className="time">{FajrTime}</div>
            </li>
            <li>
              <div className="text">Dhur</div>
              <div className="time">{DhurTime}</div>
            </li>
            <li>
              <div className="text">Asr</div>
              <div className="time">{AsrTime}</div>
            </li>
            <li>
              <div className="text">Magrib</div>
              <div className="time">{MagribTime}</div>
            </li>
            <li>
              <div className="text">Isha</div>
              <div className="time">{IshaTime}</div>
            </li>
          </ul>
          <div class="clock">
            <div class="date">{this.state.month} {this.state.day}, {this.state.year} </div>
            <div class="time">
              <span class="hour">{this.state.hour}</span>:<span class="minute">{this.state.minute}</span>:
              <span class="second">{this.state.second}</span>
             
            </div>
          </div>
        </div>
      );
    }
  }
}
