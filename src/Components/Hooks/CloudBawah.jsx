import Cloud from "../../assets/img/CloudB.png";

const CloudBawah = ({ position = "top" }) => {
  const positionClass =
    position === "top" ? "top-0" : "bottom-0";

  return (
    <>
      {/* Kiri */}
      <img
        src={Cloud}
        alt=""
        className={`
          absolute
          ${positionClass}
          left-0
          w-1/2
          object-contain
          pointer-events-none
          select-none
          z-10
          scale-x-[-1]
        `}
      />

      {/* Kanan */}
      <img
        src={Cloud}
        alt=""
        className={`
          absolute
          ${positionClass}
          right-0
          w-1/2
          object-contain
          pointer-events-none
          select-none
          z-10
        `}
      />
    </>
  );
};

export default CloudBawah;