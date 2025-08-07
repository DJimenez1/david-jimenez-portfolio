export default function Projects() {
    return (
      <section id="projects" className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Function App</h3>
            <p className="text-gray-600">A social matchmaking and communication app with real-time messaging and voice calling features.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">NLP Chatbot</h3>
            <p className="text-gray-600">A natural language processing chatbot deployed with AWS and Flask for student support services.</p>
          </div>
        </div>
      </section>
    );
  }
  