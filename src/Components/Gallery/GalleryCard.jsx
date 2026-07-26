const GalleryCard = ({ image }) => {
  return (
    <div
      className="
      overflow-hidden

      rounded-xl

      border
      border-[#D8C07A]

      shadow-lg

      group
      "
    >
      <img
        src={image}
        alt="Gallery"

        className="
        w-full

        aspect-square

        object-cover

        duration-500

        group-hover:scale-110
        "
      />
    </div>
  );
};

export default GalleryCard;