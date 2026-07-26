import Left from "../../assets/Img/Muter.png";
import Right from "../../assets/Img/Muter.png";

const Ornament = () => {
  return (
    <>

      <img
        src={Left}
        alt=""
        className="
        absolute
        left-2
        top-80
        w-24
        xs:w-16
       animate-[ornamentRotate_10s_linear_infinite]
        "
      />

      <img
        src={Right}
        alt=""
        className="
        absolute
        right-2
        top-80
        w-24
        xs:w-16
        animate-[ornamentRotate_10s_linear_infinite]
        "
      />
    </>
  );
};

export default Ornament;