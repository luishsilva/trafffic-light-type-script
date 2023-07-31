import { Component } from "react";

type TrafficLightType = {
  lightColor: string
}

export class ClassTrafficLight extends Component {

  state = {
    lightColor : 'red'
  }

  handleClick = () => {
    switch (this.state.lightColor) {
      case 'red':
        this.setState({ lightColor: 'yellow' });
        break;
      case 'yellow':
        this.setState({ lightColor: 'green' });
          break;
      default:
        this.setState({ lightColor: 'red' });
        break;
    }
  }

  render() {
    const { lightColor } : TrafficLightType = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${lightColor === 'red' ? 'red' : 'black'}`}></div>
          <div className={`circle ${lightColor === 'yellow' ? 'yellow' : 'black'}`}></div>
          <div className={`circle ${lightColor === 'green' ? 'green' : 'black'}`}></div>
        </div>
        <button 
          className="next-state-button"
          onClick={this.handleClick}
        >
          Next State
        </button>
      </div>
    );
  }
}
