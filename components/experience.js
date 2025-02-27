export default function Experience() {
    return (
        <div className="container flex flex-col items-center justify-center gap-10 px-6 md:px-10 mx-auto font-mono">
            <h1 className="text-4xl md:text-6xl text-center">experience</h1>

            {/* Freelancer */}
            <div className="shadow-lg w-full md:w-[75%] lg:w-[50%] rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold">Freelancer</h3>
                        <p className="text-gray-300">Self-employed</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-gray-300">2024 - Present</p>
                        <p className="text-gray-300">Fort Lee, NJ</p>
                    </div>
                </div>

                <ul className="mt-4 text-gray-300 font-sans list-disc pl-5">
                    <li>Design websites and apps</li>
                    <li>Research current trends in web design to inform new projects.</li>
                    <li>Build relationships with clients through frequent communication.</li>
                    <li>Implemented accessibility standards to make websites usable.</li>
                    <li>Implemented SEO best practices to improve website visibility and search engine ranking.</li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-6">
                    {["Figma", "Javascript", "HTML", "CSS", "Wix"].map(skill => (
                        <div key={skill} className="flex flex-row text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* UI/UX Intern */}
            <div className="shadow-lg w-full md:w-[75%] lg:w-[50%] rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold">UI/UX Intern</h3>
                        <p className="text-gray-300">MARCo Health Inc.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-gray-300">02/2024 - Present</p>
                        <p className="text-gray-300">Jersey City, NJ</p>
                    </div>
                </div>

                <ul className="mt-4 text-gray-300 font-sans list-disc pl-5">
                    <li>Evaluated existing app and website to identify areas of UI improvement.</li>
                    <li>Designed user interface layouts using wireframes and prototypes.</li>
                    <li>Created detailed wireframes, storyboards, user flows, and process flows.</li>
                    <li>Developed style guides for branding, typography, and color schemes.</li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-6">
                    {["React", "Tailwind", "Google AI Studio"].map(skill => (
                        <div key={skill} className="flex flex-row text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Undergraduate Researcher */}
            <div className="shadow-lg w-full md:w-[75%] lg:w-[50%] rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold">Undergraduate Researcher</h3>
                        <p className="text-gray-300">Kean University</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-gray-300">01/2024 - 05/2024</p>
                        <p className="text-gray-300">Union, NJ</p>
                    </div>
                </div>

                <ul className="mt-4 text-gray-300 font-sans list-disc pl-5">
                    <li>Used machine learning models to detect algae blooms in bodies of water.</li>
                    <li>Used high-performance applications for image segmentation predictions.</li>
                    <li>Worked closely with faculty throughout the project cycle.</li>
                    <li>Presented research results at an academic conference.</li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-6">
                    {["Python", "PyTorch", "Colab"].map(skill => (
                        <div key={skill} className="flex flex-row text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Download Resume */}
            <a href="/eric-carminio-resume.pdf" download className="bg-slate-50 bg-opacity-10 border border-sky-500 hover:bg-sky-500 px-6 py-2 text-white hover:text-black rounded-xl text-center">
                Download Resume
            </a>
        </div>
    );
}
