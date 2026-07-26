import CardCountDown from "./CardCountDown";
import useCountDown from "./useCountDown";

const CountDown = () => {

  const {
    days,
    hours,
    minutes,
    seconds,
  } = useCountDown("2027-08-17");

  return (
    <div className="mt-8 flex justify-center gap-3">

      <CardCountDown
        value={days}
        label="Hari"
      />

      <CardCountDown
        value={hours}
        label="Jam"
      />

      <CardCountDown
        value={minutes}
        label="Menit"
      />

      <CardCountDown
        value={seconds}
        label="Detik"
      />

    </div>
  );
};

export default CountDown;