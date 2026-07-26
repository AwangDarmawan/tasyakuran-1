import Anting from "../../assets/img/Anting.png";

const AntingAtas = ({ position = "top" }) => {
  const positionClass =
    position === "top" ? "top-0" : "bottom-0";

  return (
    <>

       {/* Background Anting Kiri */}
      {/* ======================= */}
     
      {/* Kiri */}
      <img
        src={Anting}
        alt=""
        className={`
          absolute
          ${positionClass}
          left-0
          w-16
          object-contain
          pointer-events-none
          select-none
          z-10
          scale-x-[-1]
          animate-pulse
        `}
      />

      {/* Kanan */}
      <img
        src={Anting}
        alt=""
        className={`
          absolute
          ${positionClass}
          right-0
          w-16
          object-contain
          pointer-events-none
          select-none
          animate-pulse
          z-10
        `}
      />
    </>
  );
};

export default AntingAtas;