import React, { useEffect, useRef, useState } from "react";
import "./../App.css";
const Timer = () => {
  const [hours, setHours] = useState(1);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      if (hours === 0 && min === 0 && sec === 0) {
        clearInterval(interval.current);
      } else if (sec > 0) {
        setSec((prevSec) => prevSec - 1);
      } else if (min > 0) {
        setMin((prevMin) => prevMin - 1);
        setSec(59);
      } else if (hours > 0) {
        setHours((prevHours) => prevHours - 1);
        setMin(60);
        setSec(59);
      }
    }, 1000);

    return () => clearInterval(interval.current);
  }, [hours, min, sec]);

  return (
    <div className="timer">
      <div>{hours < 10 ? `0${hours}` : hours}</div>
      <div>{min < 10 ? `0${min}` : min}</div>
      <div>{sec < 10 ? `0${sec}` : sec}</div>
    </div>
  );
};

export default Timer;
