export default function Nav() {
    return (
        <nav className="flex w-full sticky flex-col md:flex-row items-center justify-between border-b p-4 gap-4 md:gap-14 shadow-xl bg-[#252527] border-gray-300 top-0">
            <a className="flex items-center font-mono" href="">
                <p className="text-2xl md:text-3xl text-sky-300">Eric Carminio</p>
            </a>
            <a href="/eric-carminio-resume.pdf" download className="hidden md:block w-full md:w-auto bg-slate-50 bg-opacity-10 border border-sky-500 hover:bg-sky-500 px-4 py-2 md:px-6 md:py-2 text-white hover:text-black font-mono rounded-xl text-center">Download Resume</a>
        </nav>
    );
}


