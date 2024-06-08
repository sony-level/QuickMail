import React from 'react';
import { motion } from 'framer-motion';

interface EmailDisplayProps {
  from: string;
  subject: string;
  body: string;
}

const EmailDisplay: React.FC<EmailDisplayProps> = ({ from, subject, body }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-fit overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 flex justify-center items-center py-10"
    >
      <div className="w-4/5 md:w-3/4 lg:w-2/3 h-fit bg-white rounded-3xl shadow-xl p-8 overflow-y-auto m-10 transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="mb-6">
          <p className="text-sm opacity-70 font-medium">
            <span className="font-bold">From:</span>{" "}
            <span className="break-words" aria-label="Sender">{from}</span>
          </p>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="mb-6">
          <p className="text-lg opacity-70 font-medium">
            <span className="font-bold">Subject:</span>{" "}
            <span className="break-words" aria-label="Subject">{subject}</span>
          </p>
        </div>
        <hr className="my-6 border-gray-300" />
        <div>
          <p className="text-base opacity-70 font-medium">
            <span className="font-bold">Body:</span>{" "}
            <span className="break-words" aria-label="Body">{body}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EmailDisplay;

