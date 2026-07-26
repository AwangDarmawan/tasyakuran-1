import CloudAtas from "../Hooks/CloudAtas";
import CloudBawah from "../Hooks/CloudBawah";
import AntingAtas from "../Hooks/AntingAtas";
import Ornament2 from "../Hooks/Ornament2";

import GalleryVideo from "./GalleryVideo";
import GalleryGrid from "./GalleryGrid";


const GallerySection = () => {
  return (
    <section className="relative overflow-hidden  border border-transparent bg-[#0B5B59] flex justify-center">


      <div className="relative z-20 w-full max-w-md    px-4 py-16 mx-auto text-center">

          <CloudAtas position="top" />
      <AntingAtas position="top"/>
      <CloudBawah position="bottom" />
        <Ornament2/>

        <h2
          className="
          text-center

          font-lobster

          text-[#F2DE9C]

          xs:text-4xl
          xe:text-5xl
          sm:text-6xl
        "
        >
          Gallery
        </h2>

        <p
          className="
          text-center
          font-lobster
          text-white

          mt-3

          xs:text-xs
          sm:text-sm
          md:text-base
        "
        >
          Momen bahagia bersama keluarga
        </p>

        <GalleryVideo />

        <GalleryGrid />

      </div>

    </section>
  );
};

export default GallerySection;