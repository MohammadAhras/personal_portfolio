import React from 'react';
import { CodeBracketIcon , EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type ProjectsCardsProps = {
  imgUrl: string;
  title: string;
  description: string;
};

const ProjectsCards: React.FC<ProjectsCardsProps> = ({ imgUrl, title, description }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
    <div
      className="h-52 md:h-72 w-full rounded-t-xl relative group"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#11071F] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        <Link
          href="/"
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#937bb5] hover:border-white group/link"
        >
          <CodeBracketIcon className="h-10 w-10 text-[#937bb5] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
        </Link>
        <Link
          href="/"
          className="h-14 w-14 border-2 relative rounded-full border-[#937bb5] hover:border-white group/link"
        >
          <EyeIcon className="h-10 w-10 text-[#937bb5] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
        </Link>
      </div>
    </div>
    <div className="text-white rounded-b-xl mt-3 bg-[#11071F] py-6 px-4">
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-[#ADB7BE]">{description}</p>
    </div>
  </div>
);
};


export default ProjectsCards;
