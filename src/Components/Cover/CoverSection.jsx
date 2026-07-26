import { useState } from "react";
import { MailOpen } from "lucide-react";

// import CloudAtas from "../Hooks/CloudAtas";
// import CloudBawah from "../Hooks/CloudBawah";
import AntingAtas from "../Hooks/AntingAtas";
import Ornament from "../Hooks/Ornament";
import { useParams } from "react-router-dom";

const CoverSection = ({ onOpen }) => {

  const [close, setClose] = useState(false);
   const { nama } = useParams();

  const handleOpen = () => {
  // localStorage.setItem("playMusic", "true");
    setClose(true);

    setTimeout(() => {
      onOpen();
    }, 1000);

  };

  return (
    <section
      className={`
    fixed
    inset-0
z-[999]
bg-white/10
backdrop-blur-md
  
    transition-all
    duration-1000
    pb-10
    ${
      close
        ? "-translate-y-full opacity-0"
        : "translate-y-0 opacity-100"
    }
  `}
>

      <div
        className="
       relative z-20 w-full max-w-md  mx-auto pb-10  px-4 pt-5 text-center
        "
      >

    
      {/* <CloudAtas position="top" /> */}
      <AntingAtas position="top"/>
      {/* <CloudBawah position="bottom" /> */}
        <Ornament />
{/* 
        <div className="mt-24"> */}

        

        {/* </div> */}

        <div
          className="
        

          mx-auto

          w-48

          h-[250px]

          overflow-hidden

          rounded-[180px]

          border-4

          border-[#E9C96E]
          "
        >

          <img
            src="https://i.pinimg.com/736x/f7/4a/07/f74a0742272ee4304b536132fa20fb1f.jpg"
            className="
            w-full
            h-full
            object-cover
            "
          />

        </div>

        <div className="   mt-32
    xs:mt-3
    xe:mt-32
    sm:mt-12
    md:mt-16
    lg:mt-20">
            <p
            className="
            font-lobster

            text-[#E9C96E]
            xs:text-xl
            
            text-2xl
            "
          >
            Walimatul Khitan
          </p>

          <h1
            className="
            mt-1

            font-lobster

            text-[#F0D99A]
            xs:text-2xl
            text-4xl
           drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]
            "
          >
            Putra
            Darmawan
          </h1>

          <p
            className="
            text-white

            font-lobster

            text-xl
            "
          >
            Kepada Yth.
          </p>
 
      

          <h2
            className="
            

            text-[#F2DE9C]

           xs:text-xl
            text-xl

            font-lobster
            "
          >
            Bapak / Ibu / Saudara
          </h2>

<h2
            className="
            

            text-white

           text-lg
            xs:text-md
xe:text-1xl
sm:text-4xl
md:text-5xl
      tracking-wide
            font-serif italic
            font-semibold
            "
          >
            {nama}
          </h2>
        </div>

        <button
          onClick={handleOpen}
          className="
          xe:mt-10 md:mt-16 lg:mt-36 xs:mt-8
          
          inline-flex
          font-lobster
          items-center

          gap-3

          rounded-full

          bg-[#D8C07A]

          px-8

          py-4

          font-semibold

          text-[#0B5B59]

          duration-300

          hover:scale-105
          "
        >

          <MailOpen />

          Buka Undangan

        </button>

      </div>

    </section>
  );
};

export default CoverSection;