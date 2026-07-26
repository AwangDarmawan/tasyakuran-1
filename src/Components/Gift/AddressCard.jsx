import { MapPinned, Copy } from "lucide-react";

const AddressCard = () => {
  return (
    <div
      className="
      mt-10

      rounded-2xl
 
      border
      border-[#D8C07A]

      bg-white/5

      backdrop-blur-md
      font-lobster
      p-5
      "
    >

      <div className="flex items-center gap-3">

        <MapPinned
          className="text-[#F2DE9C]"
        />

        <h3
          className="
          text-xl

          text-[#F2DE9C]

          font-semibold
          "
        >
          Kirim Hadiah
        </h3>

      </div>

      <p className="mt-5 text-white">
        Awang Darmawan
      </p>

      <p className="mt-2 text-white leading-relaxed">
        Jl. Raya Cikalongkulon No.123,
        Cianjur,
        Jawa Barat
      </p>

      <button
        className="
        mt-6

        w-full

        rounded-xl

        bg-[#D8C07A]

        py-3

        text-[#0B5B59]

        font-semibold

        flex
        justify-center
        items-center
        gap-2
        "
      >
        <Copy size={18}/>
        Salin Alamat
      </button>

    </div>
  );
};

export default AddressCard;