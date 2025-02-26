

export default function Nav() {
    return (
        <nav className="flex w-full  sticky items-center justify-between border-b p-4 gap-14 shadow-xl bg-[#252527] border-gray-300 top-0">
            <a className="flex items-center font-mono" href="">
                <p className="text-3xl text-sky-300 ">Eric Carminio</p>
            </a>
            <a href="/eric-carminio-resume.pdf" download className="bg-slate-50 bg-opacity-10 border border-sky-500 hover:bg-sky-500 px-6 py-2 text-white hover:text-black font-mono rounded-xl">Download Resume</a>
        </nav>
    );
}