import CloudAtas from "../Hooks/CloudAtas";
import Ornament from "../Hooks/Ornament";

import CloudBawah from "../Hooks/CloudBawah";
import AntingAtas from "../Hooks/AntingAtas";

const ClosingSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#0B5B59] flex justify-center">


      <div className="relative z-20 w-full max-w-md    px-4 py-10 text-center">

      <CloudAtas position="top" />
      <AntingAtas position="top"/>
      <CloudBawah position="bottom" />
        <Ornament />

          <div className="relative mx-auto w-80 xs:w-60 xs:h-[300px] h-[390px]">

      <div className="
      rounded-[200px]
      overflow-hidden
      border-[3px]
      border-[#EAD28C]
      h-full
      ">

        <img
          src={"https://i.pinimg.com/736x/f7/4a/07/f74a0742272ee4304b536132fa20fb1f.jpg"}
          alt=""
          className="
          w-full
          h-full
          object-cover
          "
        />

      </div>

    </div>

          <div className="mt-8">
          <p
            className="
          text-white
            font-lobster

           
            text-xl
            "
          >
            Merupakan suatu kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan
          memberikan doa terbaik untuk putra kami.
          </p>

          <h1
            className="
           

                font-lobster
        text-[#F0D99A]

        xs:text-5xl
        xe:text-5xl
        md:text-5xl
            text-xl

            leading-none
            mt-2
            drop-shadow-lg
            "
          >
            Putra{" "}
            {/* <span className="text-[#E9C96E]"> */}
              Darmawan
            {/* </span> */}
          </h1>
        </div>

      </div>

    </section>
  );
};

export default ClosingSection;