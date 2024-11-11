import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="team-member bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400">{role}</p>
        <motion.button
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Menos info' : 'Más info'}
        </motion.button>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-gray-300"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
