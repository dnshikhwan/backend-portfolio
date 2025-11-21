"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaNodeJs, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import {
    SiPostgresql,
    SiNestjs,
    SiExpress,
    SiTypescript,
    SiRedis,
    SiMongodb,
    SiPrisma,
} from "react-icons/si";

export default function HeroSection() {
    const fullName = "Ahmad Danish Ikhwan";
    const [displayedName, setDisplayedName] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted && currentIndex < fullName.length) {
            const timeout = setTimeout(() => {
                setDisplayedName((prev) => prev + fullName[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullName, isMounted]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 dark:opacity-10 opacity-0" />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:invert-0 invert" />
            </div>

            <div className="relative z-10 max-w-4xl w-full mx-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-lg"
                >
                    <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.div
                            className="w-3 h-3 rounded-full bg-red-500"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        />
                        <motion.div
                            className="w-3 h-3 rounded-full bg-yellow-500"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        />
                        <motion.div
                            className="w-3 h-3 rounded-full bg-green-500"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        />
                    </motion.div>
                    <div className="font-mono">
                        <motion.p
                            className="text-green-600 dark:text-green-500"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            $ whoami
                        </motion.p>
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            {displayedName}
                            <span className="animate-pulse">|</span>
                        </motion.h1>
                        <motion.p
                            className="text-gray-600 dark:text-gray-400 mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Backend Engineer
                        </motion.p>
                        <motion.p
                            className="text-green-600 dark:text-green-500 mt-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            $ skills
                        </motion.p>
                        <div className="relative overflow-hidden mt-2">
                            <div className="flex gap-2 animate-scroll">
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiTypescript className="text-lg" />
                                    TypeScript
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <FaNodeJs className="text-lg" />
                                    Node.js
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <FaPython className="text-lg" />
                                    Python
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiNestjs className="text-lg" />
                                    NestJS
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiExpress className="text-lg" />
                                    ExpressJS
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiPostgresql className="text-lg" />
                                    PostgreSQL
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiMongodb className="text-lg" />
                                    MongoDB
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiRedis className="text-lg" />
                                    Redis
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiPrisma className="text-lg" />
                                    Prisma
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <FaDocker className="text-lg" />
                                    Docker
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <FaGitAlt className="text-lg" />
                                    Git
                                </span>
                                {/* Duplicate set for seamless loop */}
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiTypescript className="text-lg" />
                                    TypeScript
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <FaNodeJs className="text-lg" />
                                    Node.js
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <FaPython className="text-lg" />
                                    Python
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiNestjs className="text-lg" />
                                    NestJS
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiExpress className="text-lg" />
                                    ExpressJS
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiPostgresql className="text-lg" />
                                    PostgreSQL
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiMongodb className="text-lg" />
                                    MongoDB
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiRedis className="text-lg" />
                                    Redis
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <SiPrisma className="text-lg" />
                                    Prisma
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <FaDocker className="text-lg" />
                                    Docker
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded-md border border-green-500/20 whitespace-nowrap flex items-center gap-2">
                                    <FaGitAlt className="text-lg" />
                                    Git
                                </span>
                            </div>
                        </div>
                        <motion.p
                            className="text-green-600 dark:text-green-500 mt-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                        >
                            $ cat experience.txt
                        </motion.p>
                        <motion.div
                            className="mt-2 space-y-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                            whileHover={{ x: 5 }}
                        >
                            <div className="text-gray-800 dark:text-gray-200">
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                                    Junior Application Developer
                                </span>
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">
                                <span>HPCS Sdn Bhd</span>
                                <span className="mx-2">•</span>
                                <span>May 2021 - Aug 2021</span>
                            </div>
                        </motion.div>
                        <motion.p
                            className="text-green-600 dark:text-green-500 mt-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                        >
                            $ cat education.txt
                        </motion.p>
                        <motion.div
                            className="mt-2 space-y-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            whileHover={{ x: 5 }}
                        >
                            <div className="text-gray-800 dark:text-gray-200">
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                                    Bachelor of Software Engineering
                                </span>
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">
                                <span>Moscow Aviation Institute</span>
                                <span className="mx-2">•</span>
                                <span>2022 - 2026</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
