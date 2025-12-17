"use client";

import { motion } from "framer-motion";

interface Project {
    title: string;
    year: string;
    description: string;
    image: string;
    techStack: string[];
    liveDemo?: string;
    github?: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Email Campaign Manager With Scheduled Sending",
            year: "2025",
            description:
                "A system system where users can create email campaigns and schedule them to be sent at specific times to a list of recipients. Project to practice message queuing with BullMQ",
            image: "/projects/ecommerce.jpg",
            techStack: [
                "NestJS",
                "TypeScript",
                "PostgreSQL",
                "Redis",
                "Docker",
                "BullMQ",
            ],
            liveDemo: "https://example.com",
            github: "https://github.com/yourusername/project",
        },
        {
            title: "Real-Time Chat Application",
            year: "2024",
            description:
                "A real-time messaging platform with WebSocket support. Project built for my backend developer internship.",
            image: "/projects/chat.jpg",
            techStack: [
                "Node.js",
                "Socket.io",
                "MongoDB",
                "React",
                "TypeScript",
            ],
            liveDemo: "https://example.com",
            github: "https://github.com/yourusername/project",
        },
    ];

    return (
        <section className="py-20 px-4 bg-white dark:bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                        Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        A collection of my recent work and side projects
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group h-full"
                            >
                                <div className="bg-white dark:bg-black/30 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-green-500 dark:hover:border-green-600 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                                    {/* Project Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                                            {"{ }"}
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-green-600 text-white rounded-full">
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-500 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.map(
                                                (tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs px-2 py-1 bg-green-500/10 text-green-800 dark:text-green-300 rounded border border-green-500/20"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 mt-auto">
                                            {project.liveDemo && (
                                                <a
                                                    href={project.liveDemo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 text-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded transition-colors duration-200"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded transition-colors duration-200"
                                                >
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
