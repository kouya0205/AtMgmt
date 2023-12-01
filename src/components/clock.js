import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      today: '',
      time: '',
    };
  }

  updateClock() {
    const d = new Date();
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const date = d.getDate().toString().padStart(2, '0');
    const dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = weekday[dayNum];
    const hour = d.getHours().toString().padStart(2, '0');
    const min = d.getMinutes().toString().padStart(2, '0');
    const sec = d.getSeconds().toString().padStart(2, '0');

    const today = `${year}.${month}.${date} ${day}`;
    const time = `${hour}:${min}:${sec}`;

    this.setState({ today, time });
  }

  componentDidMount() {
    this.updateClock();
    this.timerID = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className=" text-[#616e71] text-shadow leading-[1.1] text-center mt-5">
        <p className=" text-[30px]">{this.state.today}</p>
        <p className=" text-[100px] mt-[3%] ">{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
