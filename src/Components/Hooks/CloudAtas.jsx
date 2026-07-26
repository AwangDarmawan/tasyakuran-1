// import Cloud from "../../assets/img/Cloud.png";


const CloudAtas = ({ position = "top" }) => {
  const positionClass =
    position === "top" ? "top-0" : "bottom-0";

  return (
    <>

       {/* Background Cloud Kiri */}
      {/* ======================= */}
     
      {/* Kiri */}
      <img
        src={"https://by.galipat-story.com/wp-content/uploads/2023/03/4-2-e1673456821826.png"}
        alt=""
        className={`
          absolute
          ${positionClass}
          left-0
          w-1/2
          object-contain
          pointer-events-none
          select-none
          z-20
          scale-x-[-1]
        `}
      />

      {/* Kanan */}
      <img
        src={"https://by.galipat-story.com/wp-content/uploads/2023/03/4-2-e1673456821826.png"}
        alt=""
        className={`
          absolute
          ${positionClass}
          right-0
          w-1/2
          object-contain
          pointer-events-none
          select-none
          z-20
        `}
      />
    </>
  );
};

export default CloudAtas;