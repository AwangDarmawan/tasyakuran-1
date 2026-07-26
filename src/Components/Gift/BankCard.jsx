import { Landmark, Copy } from "lucide-react";
import { toast } from "react-toastify";

const BankCard = ({ bank, number, owner }) => {

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number);

      toast.success("Nomor rekening berhasil disalin.", {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });

    } catch (error) {
      toast.error("Gagal menyalin nomor rekening.", {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  return (
    <div
      className="
        rounded-2xl
        border border-[#D8C07A]
        bg-white/5
        backdrop-blur-md
        font-lobster
        p-5
      "
    >
      <div className="flex items-center gap-3">
        <Landmark
          className="text-[#F2DE9C]"
          size={30}
        />

        <h3 className="text-xl font-semibold text-[#F2DE9C]">
          {bank}
        </h3>
      </div>

      <p
        className="
          mt-5
          text-2xl
          font-bold
          text-white
          tracking-widest
        "
      >
        {number}
      </p>

      <p className="mt-2 text-white">
        a.n {owner}
      </p>

      <button
        onClick={handleCopy}
        className="
          mt-6
          w-full
          rounded-xl
          bg-[#D8C07A]
          py-3
          flex
          justify-center
          items-center
          gap-2
          font-semibold
          text-[#0B5B59]
          duration-300
          hover:scale-[1.02]
          hover:bg-[#E8D18E]
          active:scale-95
        "
      >
        <Copy size={18} />
        Salin Nomor Rekening
      </button>
    </div>
  );
};

export default BankCard;