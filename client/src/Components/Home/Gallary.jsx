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
    <section className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-400">Our Gallery</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Moments from hackathons, workshops, meetups, and product-building journeys
            at Xavier Tech Byte Society.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white">
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
