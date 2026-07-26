const EventDate = () => {
  return (
    <div className="flex justify-center items-center gap-5">

      <div className="text-right">
        <p className="text-white font-semibold font-lobster">
          Sabtu
        </p>
      </div>

      <div className="px-5 border-x border-[#D8C07A]">
        <h3 className="text-[#F2DE9C] text-4xl font-bold font-lobster">
          17
        </h3>
      </div>

      <div className="text-left">
        <p className="text-white font-semibold font-lobster">
          Desember
        </p>

        <h3 className="text-white text-3xl font-bold font-lobster">
          2027
        </h3>
      </div>

    </div>
  );
};

export default EventDate;