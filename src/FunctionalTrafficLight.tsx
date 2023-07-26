import { useState } from "react";

export const FunctionalTrafficLight = () => {
  
  const [lightColor, setLightColor] = useState<string>('red');

  const handleClick = () => {
    switch (lightColor) {
      case 'red':
        setLightColor('green')
        break;
      case 'green':
          setLightColor('yellow')
          break;
      default:
        setLightColor('red')
        break;
    }
  }


  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${lightColor === 'red' ? 'red' : 'black'}`}></div>
        <div className={`circle ${lightColor === 'green' ? 'green' : 'black'}`}></div>
        <div className={`circle ${lightColor === 'yellow' ? 'yellow' : 'black'}`}></div>
      </div>
      <button 
        className="next-state-button"
        onClick={handleClick}
      >
        Next State
      </button>
    </div>
  );
};



