import CloudAtas from "../Hooks/CloudAtas";
import CloudBawah from "../Hooks/CloudBawah";
import Ornament2 from "../Hooks/Ornament2";
// import HangingStar from "./HangingStar";
import DataOrtu from "./DataOrtu";

const AssalamualikumSection = () => {
  return (
 <section className="relative overflow-hidden  border border-transparent bg-[#0B5B59] flex justify-center">


      <div className="relative z-20 w-full max-w-md    px-4 py-16 mx-auto text-center">
    {/* Cloud */}
    <CloudAtas position="top" />
    <CloudBawah position="bottom" />

    {/* Ornament */}
    <Ornament2 />

    {/* Bismillah */}
    {/* <img
      src={}
      alt=""
      className="
        mx-auto

        w-40
        xs:w-32
        xe:w-36
        sm:w-44
        md:w-52
      "
    /> */}

    {/* Judul */}
    <h2
      className="
        mt-10

       
        text-[#EFD99A]

        leading-tight
        font-lobster
        xs:text-xl
        xe:text-2xl
        sm:text-1xl
      "
    >
      Assalamu'alaikum Wr.
      
      Wb.
    </h2>

    {/* Deskripsi */}
    <p
      className="
        mt-4
        py-9
        text-white
        font-lobster
        leading-relaxed

        xs:text-xs
        xe:text-lg
        sm:text-base

        max-w-md
        mx-auto
      "
    >
      Dengan memohon rahmat dan ridho Allah Subhanahu
      Wa Ta'ala, insyaAllah kami akan menyelenggarakan
      acara Tasyakuran Khitan anak kami:
    </p>

    {/* Foto */}
    <div className="mt-10 flex justify-center">
      <div
        className="
          overflow-hidden
          border-2
          border-[#E9CB83]

          rounded-full

          xs:w-40
          xs:h-56

          xe:w-44
          xe:h-60

          sm:w-52
          sm:h-72

          md:w-60
          md:h-80
        "
      >
        <img
          src="https://i.pinimg.com/736x/f7/4a/07/f74a0742272ee4304b536132fa20fb1f.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Data Orang Tua */}
    <div className="mt-10">
      <DataOrtu />
    </div>
  </div>
</section>
       
   
  );
};

export default AssalamualikumSection;