"use client";

import { motion } from "framer-motion";

interface TimelineItem {
    year: string;
    title: string;
    organization: string;
    description: string;
    type: "education" | "work" | "achievement";
}

export default function JourneyRoadmap() {
    const timeline: TimelineItem[] = [
        {
            year: "2026",
            title: "Graduated Software Engineering",
            organization: "Moscow Aviation Institute",
            description: "Successfully completed my Bachelor's degree, mastering TypeScript, Node.js, Python, and modern backend technologies through hands-on projects and self-learning.",
            type: "education"
        },
        {
            year: "2024",
            title: "Backend Developer Internship",
            organization: "2-Month Internship",
            description: "Developed an AI-powered real-time chat application using Express.js, TypeScript, WebSocket, and integrated AI features for intelligent conversations and automated responses.",
            type: "work"
        },
        {
            year: "2022",
            title: "Scholarship to Moscow Aviation Institute",
            organization: "Russia",
            description: "Awarded scholarship to study Software Engineering in Moscow. Immersed myself in learning full backend stack including NestJS, ExpressJS, PostgreSQL, MongoDB, Redis, and Docker.",
            type: "achievement"
        },
        {
            year: "2021",
            title: "Junior Application Developer",
            organization: "HPCS Sdn Bhd",
            description: "Gained professional experience in application development, working with modern frameworks and databases in a real-world environment.",
            type: "work"
        },
        {
            year: "2020",
            title: "Straight As in SPM",
            organization: "MRSM Bentong",
            description: "Achieved excellent results in SPM examination, paving the way for scholarship opportunities and higher education.",
            type: "achievement"
        },
        {
            year: "2019",
            title: "2nd Place - Young Founder Summit Asia",
            organization: "Beijing, China",
            description: "Represented Malaysia and secured 2nd place at the Young Founder Summit Asia in Beijing, showcasing entrepreneurial and technical skills.",
            type: "achievement"
        },
        {
            year: "2016",
            title: "Discovered Programming",
            organization: "MRSM Bentong",
            description: "Started my journey at MRSM Bentong where I first discovered programming, igniting my passion for technology and software development.",
            type: "education"
        }
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case "education":
                return "bg-green-500 dark:bg-green-600";
            case "work":
                return "bg-blue-500 dark:bg-blue-600";
            case "achievement":
                return "bg-green-600 dark:bg-green-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <section className="py-20 px-4 bg-white dark:bg-[#1A1A1A]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                        My Journey
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        From discovering programming to becoming a backend engineer
                    </p>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-900/30 transform md:-translate-x-1/2" />

                        {/* Timeline items */}
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center ${
                                        index % 2 === 0
                                            ? "md:flex-row-reverse"
                                            : "md:flex-row"
                                    } flex-row`}
                                >
                                    {/* Content card */}
                                    <motion.div
                                        className={`w-full md:w-5/12 ${
                                            index % 2 === 0 ? "md:text-right" : "md:text-left"
                                        } ml-16 md:ml-0`}
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="bg-white/50 dark:bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-600 hover:shadow-xl transition-all duration-300">
                                            <motion.div
                                                className={`mb-3 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <span className="text-sm font-semibold text-green-600 dark:text-green-500">
                                                    {item.year}
                                                </span>
                                            </motion.div>
                                            <motion.h3
                                                className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {item.title}
                                            </motion.h3>
                                            <motion.p
                                                className="text-green-600 dark:text-green-400 font-semibold mb-3"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {item.organization}
                                            </motion.p>
                                            <motion.p
                                                className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                {item.description}
                                            </motion.p>
                                        </div>
                                    </motion.div>

                                    {/* Timeline dot */}
                                    <motion.div
                                        className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    >
                                        <motion.div
                                            className={`w-4 h-4 rounded-full ${getTypeColor(
                                                item.type
                                            )} border-4 border-white dark:border-[#1A1A1A] shadow-lg ring-2 ring-green-500/20`}
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        />
                                    </motion.div>

                                    {/* Spacer for alternating layout on desktop */}
                                    <div className="hidden md:block w-5/12" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 flex flex-wrap justify-center gap-6"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-600" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Education
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-600" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Work Experience
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-600 dark:bg-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Achievements
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
