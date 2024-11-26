const Gallery = () => {
    const images = [
      { src: "/images/dreamcatcher1.jpg", title: "Album 1" },
      { src: "/images/dreamcatcher2.jpg", title: "Album 2" },
      { src: "/images/dreamcatcher3.jpg", title: "Album 3" },
    ];
  
    return (
      <section className="py-20 bg-white text-center" id="gallery">
        <h2 className="text-3xl font-bold mb-8">Galerie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform"
              />
              <p className="mt-2 text-lg font-medium">{img.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Gallery;
  