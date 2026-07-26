import { ArrowRight, BadgePercent } from "lucide-react";
import Ornament2 from "./Hooks/Ornament2";




const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden min-h-screen bg-[#0B5B59] flex justify-center">


      <div className="relative z-20 w-full max-w-md    px-4 py-10 text-center">
        
        <Ornament2/>
        {/* Title */}


        {/* Divider */}

        <div className="my-10 flex items-center gap-4">

          <div className="h-px flex-1 bg-[#D8C07A]/30 " />

          <BadgePercent
            size={24}
            className="text-[#F2DE9C] animate-pulse"
          />

          <div className="h-px flex-1 bg-[#D8C07A]/30" />

        </div>

        {/* Promo */}

        <div
          className="
          rounded-3xl

          border
          border-[#D8C07A]

          bg-white/5

          backdrop-blur-md

          p-6
          "
        >
          <h3
            className="
            font-lobster

            text-[#F2DE9C]
animate-pulse
            text-3xl
            "
          >
            🎉 Promo Spesial
          </h3>

          <p
            className="
            mt-3
            font-lobster
            text-white
            "
          >
            Diskon hingga
          </p>

          <h2
            className="
            mt-2

            text-5xl

            font-black
            font-lobster
            text-[#F2DE9C]
            "
          >
            60%
          </h2>

          <p
            className="
            mt-4

            text-white
                font-lobster
            leading-7
            "
          >
            untuk seluruh template
            <br />
            website undangan digital.
          </p>

          <a
            href="https://web-4dadigital.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="
            mt-8

            inline-flex

            items-center
            gap-3

            rounded-full
            font-lobster
            bg-[#D8C07A]

            px-8
            py-4

            font-semibold

            text-[#0B5B59]

            duration-300

            hover:scale-105
            "
          >
            Lihat Template

            <ArrowRight size={20} />
          </a>
        </div>

        {/* Copyright */}

        <div className="mt-12">

          <h3
            className="
            font-lobster

            text-[#F2DE9C]

            text-3xl
            "
          >
            4daDigital
          </h3>

          <p
            className="
            mt-2

            text-white/70

            text-sm
            "
          >
            © 2026 4daDigital
          </p>

          <p
            className="
            text-white/50

            text-xs
            "
          >
            All Rights Reserved
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;