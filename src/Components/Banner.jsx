import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Discover Trusted Services",
    description:
      "Explore honest reviews from real users. Find services you can trust—fast, easy, and reliably with ReviewHub.",
    image: "https://i.ibb.co/5hRDzvZ5/trusted.jpg",
  },
  {
    title: "Share Your Experience",
    description:
      "Let your voice be heard. Share feedback on services you've used and help others make better choices.",
    image: "https://i.ibb.co/m5gLJf1s/share-exp.jpg",
  },
  {
    title: "Grow with Feedback",
    description:
      "Add your services, collect reviews, and improve. ReviewHub empowers service providers to grow through insight.",
    image: "https://i.ibb.co/TM6Pj1Lt/feedback.jpg",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[80vh] relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center roboto text-center px-4">
            <h2 className="text-5xl md:text-6xl text-green-600 roboto font-bold drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-green-200 max-w-2xl mt-4 drop-shadow-md">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
