import React, { Component } from 'react';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      timerId: null,
    };
  }

  startTimer = () => {
    if (this.state.timerId) return; 

    const timerId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    },1000);

    this.setState({ timerId });
  };

  stopTimer = () => {
    clearInterval(this.state.timerId);
    this.setState({ timerId: null });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Timer: {this.state.timer}</h1>
        <div>
          <button
            className="bg-blue-700 text-white font-medium py-2 px-4 rounded mr-2 uppercase hover:bg-blue-900"
            onClick={this.startTimer}
          >
            Start Timer
          </button>
          <button
            className="bg-red-700 text-white font-medium py-2 px-4 rounded uppercase hover:bg-red-900"
            onClick={this.stopTimer}
          >
            Stop Timer
          </button>
        </div>
      </div>
    );
  }
}

export default TimerComponent;
