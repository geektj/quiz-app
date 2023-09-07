import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../App.scss';

export const Timer = () => {
  const initialTime = 30 * 60; // 30 minutes in seconds
  const [seconds, setSeconds] = useState(initialTime);
  const navigate = useNavigate();

  useEffect(() => {
    const updateTimer = () => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        navigate('/reports');
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer">
      Time Left : {minutes}:
      {remainingSeconds} minutes
    </div>
  );
};
