

export default function Nav() {
    return (
        <nav className="flex w-full  sticky items-center justify-between border-b p-4 gap-14 shadow-xl bg-[#252527] border-gray-300 top-0">
            <a className="flex items-center font-mono" href="">
                <p className="text-3xl text-sky-300 ">Eric Carminio</p>
            </a>
            <a className="flex items-center font-mono" href="">
                <p className=" text-sky-300 ">contact</p>
            </a>
        </nav>
    );
}