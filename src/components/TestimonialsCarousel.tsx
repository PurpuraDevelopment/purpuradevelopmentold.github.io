import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Juan Pérez',
    role: 'CEO de Innovatech',
    photo: '/images/team/juan.jpg',
    text: 'Purpura Development transformó nuestras ideas en una plataforma funcional y hermosa. ¡Totalmente recomendados!',
  },
  {
    name: 'María González',
    role: 'Gerente de Marketing',
    photo: '/images/team/maria.jpg',
    text: 'El equipo es increíblemente profesional y siempre está dispuesto a escuchar nuestras necesidades.',
  },
  {
    name: 'Sofía Fernández',
    role: 'Freelancer',
    photo: '/images/team/sofia.png',
    text: '¡Excelente trabajo! Mi sitio web ahora es rápido y atractivo, justo lo que necesitaba.',
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden rounded-lg shadow-xl">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={testimonials[currentIndex].photo}
            alt={testimonials[currentIndex].name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-75"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</h3>
            <p className="text-sm">{testimonials[currentIndex].role}</p>
            <p className="text-lg italic mb-4 text-gray-200">"{testimonials[currentIndex].text}"</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-purpureus">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-purpureus">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
