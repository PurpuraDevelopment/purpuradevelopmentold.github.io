import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaRobot } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const icons: { [key: string]: JSX.Element } = {
    web: <FaLaptopCode className="text-indigo-500" />,
    ai: <FaRobot className="text-indigo-500" />,
    mobile: <FaMobileAlt className="text-indigo-500" />,
  };

  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4">
        {icons[icon] || <FaLaptopCode className="text-indigo-500" />} {/* Ícono predeterminado */}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {isHovered && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Conocer más
        </motion.button>
      )}
    </motion.div>
  );
};

export default ServiceCard;
