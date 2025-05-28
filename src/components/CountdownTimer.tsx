"use client";

import type React from "react";

import { useEffect, useState } from "react";

type CountdownTimerProps = {
  title: string;
  targetDate: string;
  icon: React.ReactNode;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  title,
  targetDate,
  icon,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = new Date(targetDate).getTime();
      const difference = eventTime - currentTime;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, expired: false });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center justify-center mb-6">
        <div className="text-blue-600 mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      {timeLeft.expired ? (
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">Event Started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
