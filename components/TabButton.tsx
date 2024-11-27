import React from "react";
import { motion } from 'framer-motion';


interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode; 
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-bold hover:text-emerald-600 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-emerald-600 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
