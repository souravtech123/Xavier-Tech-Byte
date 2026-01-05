
import img3 from "../../assets/🎙️ XTS Unplugged- Episode 1 - Done & Dusted! 🚀From dinosaurs of CS to IBM tales and skill-fir.webp"
import img4 from "../../assets/✨A day to remember ✨Techkriti , 1st of October, the launch of XTS 🚀From inspiring speeches to .webp"
import img5 from "../../assets/✨A day to remember ✨Techkriti , 1st of October, the launch of XTS 🚀From inspiring speeches to  (3).webp"
import img6 from "../../assets/✨A day to remember ✨Techkriti , 1st of October, the launch of XTS 🚀From inspiring speeches to  (2).webp"

const galleryImages = [
 
  img3,
  img4,
  img5,
  img6,
]

const Gallery = () => {
  return (
    <section id="gallery" className="bg-[#0B0F19] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our <span className="text-indigo-500">Gallery</span>
          </h2>
          <p className="text-gray-400 mt-4">
            A glimpse into the moments, events, and memories created by
            Xavier Tech Byte Society.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-800"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-sm font-semibold tracking-wide">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery
