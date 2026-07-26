
import AntingAtas from "../Hooks/AntingAtas";
import CloudAtas from "../Hooks/CloudAtas";
import CloudBawah from "../Hooks/CloudBawah";
import Ornament2 from "../Hooks/Ornament2";
import Masjid from "../../assets/Img/masjid.png"
const AyatSection = () => {
  return (
 
     <section className="relative overflow-hidden  border border-transparent bg-[#0B5B59] flex justify-center">


      <div className="relative z-20 w-full max-w-md    px-4 py-16 mx-auto text-center">
        <CloudAtas position="top"/>
        <AntingAtas position="top"/>
        <CloudBawah position="bawah"/>
        <Ornament2 />

        {/* <Mosque /> */}
         <div className="flex justify-center">

      <img
        src={Masjid}
        alt="Mosque"

        className="
        xs:w-40
        xe:w-48
        sm:w-48
        md:w-72
        lg:w-80
        
        drop-shadow-xl
        "
      />

    </div>

        <div className="mt-10 text-center">

          <h2
            className="
            

            text-[#F2DE9C]

            xs:text-3xl
            xe:text-4xl
            md:text-5xl
            font-lobster
            leading-snug
            "
          >
            Rasulullah SAW.
            <br />
            bersabda :
          </h2>

          <p
            className="
            mt-8

            text-white

            leading-8

            xs:text-xs
            sm:text-sm
            md:text-lg
            font-lobster
            max-w-xl
            mx-auto
            "
          >
            “Nabi Ibrahim as. berkhitan pada usia 80
            (delapan puluh) tahun dengan menggunakan
            qadum.”
          </p>

          <p
            className="
            mt-4

            italic

            text-[#F2DE9C]
            font-lobster
            font-semibold
            xs:text-md
            md:text-xl
            "
          >
            (HR Muslim).
          </p>

        </div>
      </div>
    </section>
  );
};

export default AyatSection;