import CloudAtas from "../Hooks/CloudAtas";
import CloudBawah from "../Hooks/CloudBawah";
import AntingAtas from "../Hooks/AntingAtas";
import Ornament2 from "../Hooks/Ornament2";

import BankCard from "./BankCard";
import AddressCard from "./AddressCard";

const GiftSection = () => {
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

          text-5xl
          "
        >
          Gift
        </h2>

        <p
          className="
          mt-4
          text-center

          text-white

          leading-relaxed
            font-lobster
          xs:text-xs
          sm:text-sm
          md:text-base
          "
        >
          Doa restu Anda merupakan hadiah terindah.
          Namun apabila ingin memberikan tanda kasih,
          dapat melalui rekening berikut.
        </p>

        <div className="mt-10 space-y-6">

          <BankCard
            bank="BCA"
            number="1234567890"
            owner="Bapak Darmawan"
          />

          <BankCard
            bank="Mandiri"
            number="9876543210"
            owner="Ibu Siti"
          />

        </div>

        <AddressCard/>

      </div>

    </section>
  );
};

export default GiftSection;