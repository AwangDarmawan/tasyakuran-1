import CloudAtas from "../Hooks/CloudAtas";
import CloudBawah from "../Hooks/CloudBawah";
import AntingAtas from "../Hooks/AntingAtas";
import Ornament2 from "../Hooks/Ornament2";

import EventDate from "./EventDate";
import EventLocation from "./EventLocation";
import GoogleMaps from "./GoogleMaps";
// import EventIcon from "./EventIcon";

const AcaraSection = () => {
  return (
    <section className="relative overflow-hidden  border border-transparent bg-[#0B5B59] flex justify-center ">
      <div
        className="
        relative z-20 w-full max-w-md    px-4 py-16 mx-auto text-center
        "
      >
        <CloudAtas position="top" />
      <AntingAtas position="top"/>
      <CloudBawah position="bottom" />
        <Ornament2/>

        <p
          className="
          text-white

          leading-relaxed
          py-10
          xs:text-[11px]
          xe:text-xs
          sm:text-sm
          md:text-base
          font-lobster
          max-w-md
          mx-auto
          md:pt-20
          "
        >
          Dengan segala kerendahan hati kami berharap
          kehadiran Bapak/Ibu/Saudara/i dalam acara
          Tasyakuran Khitan anak kami yang akan
          diselenggarakan pada:
        </p>

        {/* <div className="mt-8">
          <EventIcon />
        </div> */}

        <h2
          className="
          mt-6

          font-lobster

          text-[#F2DE9C]

          xs:text-4xl
          xe:text-5xl
          sm:text-6xl
          
          leading-none
        "
        >
          Walimatul
          <br />
          Khitan
        </h2>

        <div className="mt-10">
          <EventDate />
        </div>

        <div className="mt-10">
          <EventLocation />
        </div>

        <div className="mt-8">
          <GoogleMaps />
        </div>
      </div>
    </section>
  );
};

export default AcaraSection;