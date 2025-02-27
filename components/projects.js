import React from "react";

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 p-10 md:p-20 lg:p-40">
            <h1 className=" font-mono pt-10 pb-20 text-4xl md:text-6xl">projects</h1>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex flex-col border-white border p-6 md:p-8 rounded-xl border-opacity-15 items-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden">
                        <img src="3b.png" className="w-full h-full object-cover" alt="3B Training & Behaviors" />
                    </div>
                    <p className="text-center p-4 font-mono">3B Training & Behavior</p>
                    <a className="font-mono text-sky-500 text-opacity-40 hover:text-sky-500" href="https://www.3bdogtraining.com/">site link</a>
                </div>
                <div className="flex flex-col border-white border p-6 md:p-8 rounded-xl border-opacity-15 items-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden">
                        <img src="kelsey.png" className="w-full h-full object-cover" alt="Kelsey Young Coaching" />
                    </div>
                    <p className="text-center p-4 font-mono">Kelsey Young Coaching</p>
                    <a className="font-mono text-sky-500 text-opacity-40 hover:text-sky-500" href="https://www.kelseydyoung.com/">site link</a>
                </div>

            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex flex-col border-white border p-6 md:p-8 rounded-xl border-opacity-15 items-center">
                    <div className="w-64 h-64 md:w-96 md:h-96 overflow-hidden">
                        <img src="chatbot.png" className="w-full h-full object-cover" alt="Kelsey Young Coaching" />
                    </div>
                    <p className="text-center p-4 font-mono">Chat Bot</p>
                    <a className="font-mono text-sky-500 text-opacity-40 hover:text-sky-500" href="https://github.com/ecarminio/chatbot/">site link</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;