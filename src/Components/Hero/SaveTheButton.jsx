import { CalendarDays } from "lucide-react";

const SaveTheButton = () => {
  const handleSaveDate = () => {
    const startDate = "20261009T080000";
    const endDate = "20261009T100000";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Walimatul+Khitan+Ananda+Putra&dates=${startDate}/${endDate}&details=Kami+mengundang+Anda+untuk+menghadiri+Walimatul+Khitan+Ananda+Putra.&location=Lokasi+Acara`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={handleSaveDate}
        className="
          inline-flex
          items-center
          gap-2
          rounded-lg
          bg-[#F6E7BF]
          px-5
          py-3
          text-sm
          font-medium
          text-black
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#EEDBA6]
          active:scale-95
            font-lobster
          xs:px-4
          xs:py-2
          xs:text-xs

          xe:text-sm
        "
      >
        <CalendarDays size={18} />

        <span>17 Agustus 2027</span>
      </button>
    </div>
  );
};

export default SaveTheButton;