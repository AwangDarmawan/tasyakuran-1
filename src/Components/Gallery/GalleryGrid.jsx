import GalleryCard from "./GalleryCard";

const photos = [
  "https://i.pinimg.com/736x/0a/7c/0d/0a7c0df8c4befcf388ce7aa31ee5aa5d.jpg",
  "https://i.pinimg.com/736x/0d/ac/52/0dac52745e6c3a929a26c493719dfe0c.jpg",
  "https://i.pinimg.com/1200x/7c/12/56/7c1256e5285d2df301aae06dda54e53c.jpg",
  "https://picsum.photos/500?4",
  "https://picsum.photos/500?5",
  "https://picsum.photos/500?6",
];

const GalleryGrid = () => {
  return (
    <div
      className="
      mt-10

      grid

      grid-cols-2
      sm:grid-cols-3

      gap-4
      "
    >
      {photos.map((item, index) => (
        <GalleryCard
          key={index}
          image={item}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;