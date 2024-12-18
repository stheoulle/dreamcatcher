const Gallery = () => {
    const images = [
      { src: "/images/group.png", title: "Group picture Virtous" },
      { src: "/images/oe.jpg", title: "Odd eye group picture" },

      { src: "/images/gah.jpg", title: "Gahyun Justice comeback" },
      { src: "/images/siy.png", title: "Album 3" },
      { src: "/images/center.png", title: "versus logo" },
      { src: "/images/bv.jpg", title: "Bon voyage group picture" },
      { src: "/images/yoo.jpg", title: "Yoohyeon" },
      { src: "/images/last.jpg", title: "Justice group picture" },
      { src: "/images/wistle.webp", title: "Wistle group picture" },
      



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
                className="w-full h-70 object-cover transform hover:scale-105 transition-transform"
              />
              <p className="mt-2 text-lg font-medium">{img.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Gallery;
  