
export default function Education() {
    return (
        <div className="container flex items-center justify-center flex-col gap-6 mx-auto font-mono pt-20 ">
            <h1 className="text-2xl p-10">education</h1>
            <div className="flex flex-row gap-6 justify-center">
                <div className="shadow-lg w-[20%] bg-sky-500 bg-opacity-10 hover:bg-opacity-30 rounded-lg p-6 border-sky-500 border border-opacity-30">
                    <div className="flex flex-col  justify-between items-center">
                        <img width={600} src="https://www.pbsc.edu/_resources/images/logo.svg" alt="Palm Beach State College Logo" />
                        <p className="text-lg font-mono pb-2 text-gray-300">Associates</p>
                        <p className=" font-mono text-gray-300">General Studies</p>
                        <p className="text-gray-300">Graduated 2020</p>
                    </div>
                </div>
                <div className="shadow-lg w-[20%] rounded-lg p-6  bg-sky-500 hover:bg-opacity-30 bg-opacity-10 border-sky-500 border border-opacity-30">
                    <div className="flex flex-col justify-between items-center ">
                        <img width={600} src="https://www.kean.edu/themes/custom/kean/logo.svg" alt="Kean University Logo" className=" pt-2" />
                        <p className="text-lg font-mono pb-2 pt-4 text-gray-300">Bachelors</p>
                        <p className="font-mono text-gray-300">Computer Science</p>
                        <p className="text-gray-300 ">2023  - Present</p>
                    </div>
                </div>

            </div>
        </div>
    );
}


