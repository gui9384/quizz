import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer red">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const CountDown = ({
  isPlaying,
  setIsPlaying, 
  counterTime,
  setTimeEnd}) => {

  const COUNTDOWNTIME = 15;

  


  return (
    <div className="timer-wrapper">
    <CountdownCircleTimer
           isPlaying={isPlaying}
           key={counterTime}
           duration={COUNTDOWNTIME}
           colors={['#0493FC', '#F8CC18', '#A30000', '#A30000']}
           colorsTime={[15, 10, 5, 0]}
           onComplete={() =>{
              setIsPlaying(false)
              setTimeEnd(true)
        }} >
        {renderTime}
    </CountdownCircleTimer> 
        </div>           
  )
}

export default CountDown