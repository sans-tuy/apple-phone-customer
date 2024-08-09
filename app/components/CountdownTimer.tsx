import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const dest = new Date("Aug 25, 2024 10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = dest - now;

      // Check if the countdown has reached zero or negative
      if (diff <= 0) {
        clearInterval(interval); // Stop the countdown
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 }); // Reset to zero
        return; // Exit the function
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: hours < 10 ? Number(`0${hours}`) : hours,
        minutes: minutes < 10 ? Number(`0${minutes}`) : minutes,
        seconds: seconds < 10 ? Number(`0${seconds}`) : seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start justify-center w-full gap-4 count-down-main">
      <div className="timer w-16">
        <div>
          <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-indigo-600 text-center">
            {timeLeft.hours}
          </h3>
        </div>
        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">
          hours
        </p>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div className="timer w-16">
        <div>
          <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-indigo-600 text-center">
            {timeLeft.minutes}
          </h3>
        </div>
        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">
          minutes
        </p>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div className="timer w-16">
        <div>
          <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-indigo-600 text-center">
            {timeLeft.seconds}
          </h3>
        </div>
        <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">
          seconds
        </p>
      </div>
    </div>
  );
}
