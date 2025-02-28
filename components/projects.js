import React from "react";

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 p-10 md:p-20 lg:p-40">
            <h1 className="font-mono pt-10 pb-20 text-4xl md:text-6xl">projects</h1>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <ProjectCard className="" title="3B Training & Behavior" url="https://www.3bdogtraining.com/" />
                <ProjectCard title="Kelsey Young Coaching" url="https://www.kelseydyoung.com/" />
                <ProjectCard title="Chat Bot" url="chatbot.png" />
            </div>
        </div>
    );
};

const ProjectCard = ({ title, url }) => {
    return (
        <a href={url} className="flex flex-col items-center border border-white border-opacity-15 rounded-xl p-4">
            <div className="relative w-[300px] h-[300px] overflow-hidden  border-white border-opacity-15 rounded-xl ">
                <iframe
                    className="absolute top-0 left-0 w-[1200px] h-[1200px] scale-[0.25] rounded-xl  transform origin-top-left"
                    src={url}
                    title={title}
                    style={{ scroll: "none" }}
                ></iframe>
            </div>
            <p className="text-center p-2 font-mono">{title}</p>
        </a>
    );
};

export default Projects;
