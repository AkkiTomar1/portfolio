const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center bg-white/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 relative group">
    {/* Colored blob/shadow behind icon */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-linear-to-br from-indigo-400 via-purple-400 to-pink-300 opacity-20 rounded-full blur-2xl z-0 group-hover:opacity-40 transition-all"></div>
    <span className="z-10 mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-linear-to-br from-indigo-400 via-purple-400 to-pink-300 shadow-lg group-hover:scale-110 transition-transform">
      <Icon className="text-4xl text-white drop-shadow-md" />
    </span>
    <h4 className="z-10 text-xl font-bold  mb-2 mt-3 bg-linear-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
      {title}
    </h4>
    <p className="z-10 text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;
