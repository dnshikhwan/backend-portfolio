"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
    type: "command" | "output";
    content: string;
}

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<TerminalLine[]>([
        { type: "output", content: "Welcome to Ahmad's Terminal Portfolio! Type 'help' to see available commands." }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const commands: { [key: string]: () => string } = {
        help: () => `Available commands:
  help      - Show this help message
  about     - Learn more about me
  skills    - View my technical skills
  experience - View my work experience
  education - View my education
  contact   - Get my contact information
  projects  - View my projects
  clear     - Clear the terminal
  github    - Open my GitHub profile
  linkedin  - Open my LinkedIn profile`,

        about: () => `Hi! I'm Ahmad Danish Ikhwan, a Backend Engineer passionate about building scalable and efficient server-side applications.

I specialize in Node.js and Python ecosystems, with a focus on creating robust APIs and microservices. I love solving complex problems and learning new technologies.`,

        skills: () => `Technical Skills:
  Languages    : TypeScript, JavaScript, Python
  Frameworks   : NestJS, ExpressJS
  Databases    : PostgreSQL, MongoDB, Redis
  Tools        : Docker, Git, Prisma
  Runtime      : Node.js`,

        experience: () => `Work Experience:

Junior Application Developer
HPCS Sdn Bhd
May 2021 - Aug 2021`,

        education: () => `Education:

Bachelor of Computer Science
University Name
2018 - 2022`,

        contact: () => `Contact Information:
  Email    : your.email@example.com
  GitHub   : github.com/yourusername
  LinkedIn : linkedin.com/in/yourprofile

Type 'github' or 'linkedin' to open directly!`,

        projects: () => `Projects:
  Coming soon! Check back later or visit my GitHub.`,

        clear: () => "CLEAR",

        github: () => {
            window.open("https://github.com/yourusername", "_blank");
            return "Opening GitHub profile...";
        },

        linkedin: () => {
            window.open("https://linkedin.com/in/yourprofile", "_blank");
            return "Opening LinkedIn profile...";
        },
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = input.trim();

        if (!trimmedInput) return;

        const newHistory: TerminalLine[] = [
            ...history,
            { type: "command", content: `$ ${trimmedInput}` }
        ];

        const command = trimmedInput.toLowerCase();

        if (command === "clear") {
            setHistory([]);
        } else if (commands[command]) {
            const output = commands[command]();
            if (output !== "CLEAR") {
                newHistory.push({ type: "output", content: output });
                setHistory(newHistory);
            }
        } else {
            newHistory.push({
                type: "output",
                content: `Command not found: ${trimmedInput}. Type 'help' for available commands.`
            });
            setHistory(newHistory);
        }

        setInput("");
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                        Interactive Terminal
                    </h2>

                    <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
                                terminal
                            </span>
                        </div>

                        <div
                            ref={terminalRef}
                            className="p-4 font-mono text-sm h-96 overflow-y-auto"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((line, index) => (
                                <div key={index} className="mb-2">
                                    {line.type === "command" ? (
                                        <div className="text-green-600 dark:text-green-500">
                                            {line.content}
                                        </div>
                                    ) : (
                                        <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                                            {line.content}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <form onSubmit={handleSubmit} className="flex items-center">
                                <span className="text-green-600 dark:text-green-500 mr-2">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
                                    autoFocus
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                            </form>
                        </div>
                    </div>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                        Click anywhere in the terminal to start typing
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
