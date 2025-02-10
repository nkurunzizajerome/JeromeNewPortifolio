import jer from "../assets/jer.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-10 rounded-lg hover:bg-red-500 transition-all duration-300">
      <img 
        src={jer} 
        alt="jer" 
        className="rounded-full h-[300px] w-[300px] shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <h1 className="text-5xl font-bold mt-6 animate-fadeIn">
        Welcome to My Hero Section
      </h1>
      <p className="mt-4 text-xl text-gray-300 text-center max-w-xl">
        I am <span className="font-bold text-white">Jerome</span>, a passionate 
        <span className="font-bold text-red-400"> Software Developer</span> with skills in 
        <span className="font-bold text-blue-400"> JavaScript, React, CSS, and Responsive Web Design.</span> 
        I love building user-friendly and interactive web applications!
      </p>
    </div>
  );
};

export default Hero;
