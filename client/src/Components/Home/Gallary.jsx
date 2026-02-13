import React from "react";
import img1 from "../../assets/Gallary/image1.jpg";
import img2 from "../../assets/Gallary/image2.jpg";
import img3 from "../../assets/Gallary/image3.jpg";
import img4 from "../../assets/Gallary/image4.jpg" ;
import img5 from "../../assets/Gallary/image5.jpg" ;
import img6 from "../../assets/Gallary/image6.jpg"


const galleryImages = [
  { id: 1, src: img1, title: "Hackathon Moments" },
  { id: 2, src: img2, title: "Workshop Sessions" },
  { id: 3, src: img3, title: "Team Collaboration" },
  { id: 4, src: img4 , title: "Tech Meetup" },
  { id: 5, src: img5, title: "Product Build Day" },
  { id: 6, src: img6, title: "Community Gathering" },
];

const Gallery = () => {
  return (
    <section className="bg-white py-24 px-6">
    <div className="max-w-7xl mx-auto">
  
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          Gallery
        </span>
        <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
          Our Gallery
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Moments from hackathons, workshops, meetups, and product-building journeys
          at Xavier Tech Byte Society.
        </p>
      </div>
  
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:shadow-xl transition"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
  
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  </section>
  
  );
};

export default Gallery;
