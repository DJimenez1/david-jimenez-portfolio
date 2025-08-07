export default function Skills() {
    return (
      <section id="skills" className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-center">
          {['React', 'Node.js', 'MongoDB', 'Express', 'WebSockets', 'Google Cloud', 'AWS', 'Tailwind CSS', 'Vite'].map(skill => (
            <span key={skill} className="bg-white px-4 py-2 rounded shadow-md text-sm md:text-base">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  