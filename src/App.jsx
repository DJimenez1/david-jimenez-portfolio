import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Function App",
    description:
      "Social matchmaking and communication platform with real-time chat, voice calls, and party queue system. Built with React, Node.js, WebSockets, and MongoDB, and deployed using Railway, Vercel, and Google Cloud media storage.",
    links: [
      { label: "Live Demo", href: "https://functionapp.dev" },
      { label: "Video Walkthrough", href: "/Function_App_Video_Walkthrough.mp4" },
    ],
  },
  {
    title: "NLP Chatbot",
    description:
      "AI-powered university assistant deployed with AWS EC2 and S3. Built using Python, React.js, and Django.",
    links: [
      { label: "Code", href: "https://github.com/cindyweng18/ccnychatbot" },
      { label: "Summary", href: "/CCNY_Chatbot_Slides3.pdf" },
    ],
  },
  {
    title: "GradSchoolZero",
    description:
      "Graduate school management system with custom user roles. Built using React.js and MongoDB.",
    links: [
      { label: "Code", href: "https://github.com/CityDevsCCNY/GradSchoolZero" },
      { label: "Summary", href: "https://github.com/CityDevsCCNY/GradSchoolZero/blob/main/Phase%20Reports/Group_R_Phase_1_Report.pdf" },
    ],
  },
  {
    title: "CPU Design",
    description:
      "32-bit MIPS processor structurally implemented in VHDL. Validated using comprehensive testbenches to execute real machine code instructions for academic simulation.",
    links: [
      { label: "Code", href: "/Group03_Lab07_CCEF.zip" },
      { label: "Summary", href: "/Group03_Lab07_CCEF.pdf" },
    ],
  },
];

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.classList.add("ready");
    };
  
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);  

  if (!isLoaded) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="relative min-h-screen text-white px-4 py-10 bg-fixed">
      <div className="absolute inset-0 bg-[url('/freenaturestock-701.jpeg')] md:bg-[url('/freenaturestock-701.jpeg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-5xl font-bold mb-2 text-center"
        >
          David Jimenez
        </motion.h1>
        <p className="text-gray-200 text-lg mb-4 text-center">Full-Stack Developer</p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="mailto:djimenezahhs@gmail.com">
            <Mail className="w-5 h-5 hover:text-green-300" />
          </a>
          <a href="https://github.com/DJimenez1" target="_blank">
            <Github className="w-5 h-5 hover:text-green-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-jimenez-b863a7228/"
            target="_blank"
          >
            <Linkedin className="w-5 h-5 hover:text-green-300" />
          </a>
        </div>
        <div className="text-center mb-12">
          <a href="/David_Jimenez_Resume.pdf" download>
            <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-xl">
              Download Resume
            </Button>
          </a>
        </div>

        <div className="flex justify-center">
          <div className="grid gap-6 md:grid-cols-2 w-full px-4 md:px-0 md:w-[90%] lg:w-[70%] xl:w-[60%]">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full hover:scale-[1.01] transition-transform w-full bg-white/5 border border-white/20">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-xl text-white font-semibold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-gray-100 mb-4 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a href={link.href} key={link.label} target="_blank">
                          <Button variant="secondary" className="text-white bg-green-700 hover:bg-green-800">
                            {link.label}
                          </Button>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center backdrop-blur-sm bg-black/40 p-4 rounded-md mx-auto max-w-xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <p className="text-gray-100 text-sm">
            React • Node.js • Python • C++ • Java • Express • MongoDB • Django • WebSockets • TailwindCSS • Vercel • Railway • Google Cloud • AWS • VHDL
            <br />
            (PyTorch, TensorFlow, Keras, NumPy)
          </p>
        </motion.div>

        <footer className="mt-20 text-sm text-center text-gray-300">
          © 2025 David Jimenez. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
