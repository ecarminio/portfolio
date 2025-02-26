import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="row-start-3 font-mono flex gap-6 flex-wrap items-center justify-center w-full dark:bg-[#252527] p-8">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} /> contact</a>
        </footer>
    );
}