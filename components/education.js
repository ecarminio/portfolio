export default function Education() {
    return (
        <div className="container flex items-center justify-center flex-col gap-6 mx-auto font-mono pt-20 px-6">
            <h1 className="text-2xl p-6 text-center">education</h1>

            {/* Cards Container */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
                
                {/* Palm Beach State College */}
                <div className="shadow-lg w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-sky-500 bg-opacity-10 hover:bg-opacity-30 rounded-lg p-6 border-sky-500 border border-opacity-30 text-center">
                    <div className="flex flex-col items-center">
                        <img className="max-w-[200px]" src="https://www.pbsc.edu/_resources/images/logo.svg" alt="Palm Beach State College Logo" />
                        <p className="text-lg font-mono pb-2 text-gray-300">Associates</p>
                        <p className="font-mono text-gray-300">General Studies</p>
                        <p className="text-gray-300">Graduated 2020</p>
                    </div>
                </div>

                {/* Kean University */}
                <div className="shadow-lg w-full sm:w-[80%] md:w-[45%] lg:w-[30%] rounded-lg p-6 bg-sky-500 hover:bg-opacity-30 bg-opacity-10 border-sky-500 border border-opacity-30 text-center">
                    <div className="flex flex-col items-center">
                        <img className="max-w-[200px] pt-2" src="https://www.kean.edu/themes/custom/kean/logo.svg" alt="Kean University Logo" />
                        <p className="text-lg font-mono pb-2 pt-4 text-gray-300">Bachelors</p>
                        <p className="font-mono text-gray-300">Computer Science</p>
                        <p className="text-gray-300">2023 - Present</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
