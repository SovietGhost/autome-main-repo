interface CountdownProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    black?: boolean;
  }
  
  const CountdownTimer = ({
    days,
    hours,
    minutes,
    seconds,
    black,
  }: CountdownProps) => (
    <div
      className={`flex justify-between text-center ${black ? "text-black" : "text-white"}`}
    >
      <div>
        <div className="text-2xl font-bold">{days}</div>
        <div className="text-xs">Days</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{hours}</div>
        <div className="text-xs">Hours</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{minutes}</div>
        <div className="text-xs">Minutes</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{seconds}</div>
        <div className="text-xs">Seconds</div>
      </div>
    </div>
  );
  
  export default CountdownTimer;