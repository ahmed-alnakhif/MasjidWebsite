import React from "react";
import "./PrayerTimes.css";

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
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
  }

  render() {
    var { isLoaded, items } = this.state;
    console.log(items);

    if (!isLoaded) {
      return <div> Loading... </div>;
    } else {
      let date;
      let FajrTime, DhurTime, AsrTime, MagribTime, IshaTime;
      {
        items.map(item => (
          <li key={item.id}>
            {(date = item.date)}
            {(FajrTime = item.Fajr)} {(DhurTime = item.Zuhr)} {(AsrTime = item.Asr)} {(MagribTime = item.Magrib)} {(IshaTime = item.Isha)}
          </li>
        ));
      }
      return (
        <div>
          <div className="time-div">
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
          </div>
        </div>
      );
    }
  }
}
