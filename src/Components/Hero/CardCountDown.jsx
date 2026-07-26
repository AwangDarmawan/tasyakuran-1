const CardCountDown = ({ value, label }) => {
  return (
    <div
      className="
      w-16
      h-16

      rounded-lg

      bg-[#F8E7BB]
        font-lobster
      flex
      flex-col
      items-center
      justify-center

      shadow-lg
      "
    >
      <h3 className="font-bold text-xl">
        {value}
      </h3>

      <p className="text-xs">
        {label}
      </p>
    </div>
  );
};

export default CardCountDown;