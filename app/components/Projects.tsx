import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'E-commerce API',
    description: 'RESTful API for an e-commerce platform',
    technologies: [
      { name: 'Node.js', logo: '/nodejs-logo.png' },
      { name: 'Express', logo: '/express-logo.png' },
      { name: 'MongoDB', logo: '/mongodb-logo.png' },
    ],
  },
  {
    title: 'Real-time Chat Server',
    description: 'Scalable WebSocket server for real-time chat applications',
    technologies: [ 
      { name: 'Go', logo: '/go-logo.png' },
      { name: 'WebSocket', logo: '/websocket-logo.png' },
      { name: 'Redis', logo: '/redis-logo.png' },
    ],
  },
  // Add more projects as needed
]

const Projects = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-4">
              {project.technologies.map((tech, techIndex) => (
                <Link key={techIndex} href={tech.url} target="_blank" rel="noopener noreferrer">
                  <Image src={tech.logo} alt={tech.name} width={40} height={40} className="hover:opacity-80 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

