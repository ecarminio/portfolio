export default function Experience() {
    return (
        <div className="container flex items-center justify-center flex-col gap-10 mx-auto font-mono ">
            <h1 className="text-2xl">experience</h1>
            <div className="shadow-lg w-[50%] rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h3 className="text-xl font-bold ">Freelancer</h3>
                        <p className="text-gray-300 o">Self-employeed</p>
                    </div>

                    <div className="flex flex-col md:flex-col justify-between items-end">
                        <p className="text-gray-300 ">2024  - Present</p>
                        <p className="text-gray-300 ">Fort Lee, NJ</p>
                    </div>
                </div>

                <ul className="mt-4 text-gray-300 font-sans list-disc pl-5 ">
                    <li>Design websites and apps</li>
                    <li>Research current trends in web design to inform new projects.</li>
                    <li>Build relationships with clients through frequent communication.</li>
                    <li>Implemented accessibility standards to make websites usable.</li>
                    <li>Implemented SEO best practices to improve website visibility and search engine ranking.</li>
                </ul>
                <div className="flex flex-row gap-4 items-end font-sans pt-6">
                    <div className="flex flex-row text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">Figma</div>
                    <div className="flex flex-row text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">Javascript</div>
                    <div className="flex flex-row text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">HTML</div>
                    <div className="flex flex-row text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">CSS</div>
                    <div className="flex flex-row text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">Wix</div>
                </div>
            </div>


            <div className="shadow-lg w-[50%] rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h3 className="text-xl font-bold ">Undergraduate Researcher</h3>
                        <p className="text-gray-300 o">Kean University</p>
                    </div>

                    <div className="flex flex-col md:flex-col justify-between items-end">
                        <p className="text-gray-300 ">01/2024  - 5/2024</p>
                        <p className="text-gray-300 ">Union, NJ</p>
                    </div>
                </div>

                <ul className="mt-4 text-gray-300 list-disc pl-5 ">
                    <li>Used machine learning models to visually determine the presence of algae blooms on bodies of water.</li>
                    <li>Used high-performance applications to perform calculations required to generate image segmentation predictions.</li>
                    <li>Worked closely with faculty throughout the project cycle.</li>
                    <li>Presented research results at an academic conference.</li>
                </ul>
                <div className="flex flex-row gap-4 items-end pt-6">
                    <div className="flex flex-row font-sans text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">Python</div>
                    <div className="flex flex-row font-sans text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">PyTorch</div>
                    <div className="flex flex-row font-sans text-gray-300 text-opacity-50 hover:text-opacity-100 transition-colors bg-sky-50 bg-opacity-10 px-3 py-1 rounded-3xl border border-opacity-35 border-sky-500">Colab</div>
                </div>
            </div>
            <a href="/eric-carminio-resume.pdf" download className="bg-slate-50 bg-opacity-10 border border-sky-500 hover:bg-sky-500 px-6 py-2 text-white hover:text-black rounded-xl">Download Resume</a>
        </div>
    );
}