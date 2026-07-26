import TSVD from "../../assets/VD/tsvd.mp4"
const GalleryVideo = () => {
  return (
    <div className="mt-10">

      <div
        className="
        overflow-hidden

        rounded-2xl

        border
        border-[#D8C07A]

        shadow-xl
        "
      >

        <video
          controls
          muted
          className="
          w-full

          xs:h-48
          xe:h-56
          sm:h-64
          md:h-72
          lg:h-80
          
          object-cover
          "
        >
      
  <source
    src={TSVD}
    type="video/mp4"
  />

        </video>

      </div>

    </div>
  );
};

export default GalleryVideo;