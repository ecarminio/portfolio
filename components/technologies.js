import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function Technologies() {
    return (
        <div className="flex flex-col items-center  justify-center gap-4 h-fit p-40">
            <h2 className="text-center text-2xl font-mono p-10">technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="p-4">
                    <RiTailwindCssFill className="text-7xl text-sky-400" />
                </div>
                <div className="p-4">
                    <SiMysql className="text-7xl" />
                </div>
                <div className="p-4">
                    <SiMongodb className="text-7xl text-cyan-500" />
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </div>
                <div className="p-4">
                    <FaPhp className="text-7xl text-indigo-400" />
                </div>
            </div>
        </div>
    );
}
