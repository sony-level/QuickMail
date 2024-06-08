import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

interface MailBoxProps {
  email: string;
  subject: string;
  message: string;
  time: string;
}

const MailBox: React.FC<MailBoxProps> = ({ email, subject, message, time }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mailbox-container hover:bg-[#007ACC] hover:bg-opacity-10 hover:cursor-pointer border border-gray-300 rounded-lg shadow-md h-fit m-5 p-4 transition duration-300 ease-in-out"
    >
      <div className="flex items-center gap-2 mb-2">
        <Image src="/email-icon.png" alt="Email Icon" width={20} height={20} />
        <span className="text-xs opacity-80 font-semibold">{email}</span>
      </div>
      <p className="text-md font-semibold text-gray-800">{subject}</p>
      <div className="w-full flex justify-between items-center mt-2">
        <span className="text-sm text-gray-600">{message}</span>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </motion.div>
  );
};

export default MailBox;

