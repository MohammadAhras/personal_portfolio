"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define types for the TAB_DATA array
interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MS OFFICE</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>TypeScript</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Matriculation: Science</li>
        <li>Intermediate: Pre-Medical</li>
        <li>Graduation: Bachlor Of Arts</li>
        <li>Masters: M.A Economics</li>
        <li>Governor House initiative Artificial Intelligence Course</li>
      </ul>
    ),
  },
];

const About: React.FC = () => {
  const [tab, setTab] = useState<string>("skills"); 
  const [ isPendng , startTransition] = useTransition(); 


  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/about.jpg" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ccb9e5]">
            I’m a student of GIAIC, persuing a course in Artificial intelligence,Web3.0 and Metaverse. Passionate about technology
            and constantly learning new skills to stay up-to-date with the latest innovations.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
             <h2>Skills</h2>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
             <h2> Education </h2>
            </TabButton>
          </div>
          <div className="mt-8">
            {/* Display the content based on the selected tab */}
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
