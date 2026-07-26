const GoogleMaps = () => {
  return (
    <div
      className="
      overflow-hidden
      rounded-xl
      border
      border-[#D8C07A]
      shadow-xl
      mb-16
      "
    >
      <iframe
        title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.2735495242267!2d107.23357313845823!3d-6.709033626841739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69a93947d94b9b%3A0x214d3e1d5a8090f5!2sCikalongkulon%2C%20Cianjur%20Regency%2C%20West%20Java!5e1!3m2!1sen!2sid!4v1784898893452!5m2!1sen!2sid"
    
        className="
        w-full

        h-56
        sm:h-72
        md:h-80
        "
        loading="lazy"
      
      />
    </div>
  );
};

export default GoogleMaps;