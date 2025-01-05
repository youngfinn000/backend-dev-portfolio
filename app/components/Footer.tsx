import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center space-x-6">
        <Link href="https://github.com/youngfinn000" target="_blank" rel="noopener noreferrer">
          <Github className="w-8 h-8 hover:text-blue-400 transition-colors" />
        </Link>
        <Link href="https://www.linkedin.com/in/laureano-falcon" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-8 h-8 hover:text-blue-400 transition-colors" />
        </Link>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} Laureano Martin. All rights reserved.</p>
    </footer>
  )
}

export default Footer

