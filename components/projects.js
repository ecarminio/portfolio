import React from "react";


const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 p-40">
            <h1 className="font-mono p-8 text-2xl">projects</h1>
            <div className="flex flex-row">
                <div className="flex flex-row gap-12">
                    <div className="flex flex-col border-white border p-8 rounded-xl border-opacity-15 items-center">
                        <div className="w-96 h-96 overflow-hidden">
                            <img src="3b.png" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-center p-4 font-mono">3B Training & Behaviors</p>
                        <a className="font-mono text-sky-500 text-opacity-40 hover:text-sky-500 " href="https://www.3bdogtraining.com//">site link</a>
                    </div>
                    <div className="flex flex-col border-white border p-8 rounded-xl border-opacity-15 items-center">
                        <div className="w-96 h-96 overflow-hidden">
                            <img src="kelsey.png" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-center p-4 font-mono">Kelsey Young Coaching</p>
                        <a className="font-mono text-sky-500 text-opacity-40 hover:text-sky-500 " href="https://www.kelseydyoung.com/">site link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
