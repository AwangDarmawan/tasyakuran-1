import Left from "../../assets/img/Muter.png";
import Right from "../../assets/img/Muter.png";

const Ornament2 = () => {
  return (
    <>
      <img
        src={Left}
        alt=""
        className="
        absolute
        left-0
        top-14
items-start
       w-20
        xs:w-16
       animate-[ornamentRotate_10s_linear_infinite]
        "
      />

      <img
        src={Right}
        alt=""
        className="
        absolute
         right-0
        top-64
        sm:top-60
        w-20
        xs:w-16
        sm:w-16
        animate-[ornamentRotate_10s_linear_infinite]
        "
      />
    </>
  );
};

export default Ornament2;