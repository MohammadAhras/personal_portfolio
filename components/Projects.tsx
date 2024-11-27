"use client"
import React  from 'react';
import ProjectsCards from './ProjectsCards';

const projectsData = [
  {
    id: 1,
    title: "countdown_Timer",
    description: "Project 1 description is countdown timer",
    image: "/image/01.jpg",
    tag: ["All", "Web"],

  },
  {
    id: 2,
    title: "Static Interactive Resume",
    description: "Project 2 description is Static Interactive Resume",
    image: "/image/03.jpg",
    tag: ["All", "Web"],
   
  },
  {
    id: 3,
    title: "Currency Convertor",
    description: "Project 3 description is currency convertor",
    image: "/image/02.jpg",
    tag: ["All", "Web"],

  },
  {
    id: 4,
    title: "To Do App",
    description: "Project 4 description is To-do App",
    image: "/image/05.jpg",
    tag: ["All", "Web"],

  },
  {
    id: 5,
    title: "Shareable Resume Builder",
    description: "Project 5 description is Shareable Resume Builder",
    image: "/image/04.jpg",
    tag: ["All", "Web"],

  },
  
]

function Projects() {
  return (
 <div id='projects'>
  <div className="flex justify-center items-center py-10">
  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
    My Projects
  </h1>
</div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectsData.map((project) => (
          <ProjectsCards
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
