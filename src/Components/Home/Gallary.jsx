const images = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  ];
  
  const Gallery = () => {
    return (
      <section id="gallery" className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Community <span className="text-indigo-500">Moments</span>
            </h2>
            <p className="text-gray-400 mt-4">
              A glimpse into our workshops, hackathons, meetups, and memorable
              moments together.
            </p>
          </div>
  
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-800"
              >
                <img
                  src={src}
                  alt="Community event"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
  
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-sm font-semibold">
                    Xavier Tech Byte Society
                  </p>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Gallery;
  