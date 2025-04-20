import { useEffect, useState } from 'react';

type CountdownTimerProps = {
  title: string;
  targetDate: string;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ title, targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = new Date(targetDate).getTime();
      const difference = eventTime - currentTime;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft('Event Started');
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    
      <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center w-full sm:w-70 text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="text-2xl sm:text-3xl font-bold text-gray-800">{timeLeft}</div>
      </div>
  );
};

export default CountdownTimer;
