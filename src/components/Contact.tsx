import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gray-950 text-white relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
        >
          Let’s Connect
        </motion.h2>

        {/* Subtext */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Open to software engineering opportunities. Let’s build something
          meaningful together.
        </p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-900/60 backdrop-blur-md 
                     border border-gray-800 rounded-3xl 
                     p-10 md:p-14 shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Email */}
            <a
              href="mailto:sachinkumaryadavnita@gmail.com"
              className="flex-1 px-6 py-4 rounded-xl bg-indigo-600 
                         hover:bg-indigo-700 
                         hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] 
                         transition flex items-center justify-center gap-3 text-lg font-medium"
            >
              <MdEmail size={20} />
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sachin-kumar-8b8441226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-4 rounded-xl bg-[#0A66C2] 
                         hover:bg-[#004182] 
                         hover:shadow-[0_0_25px_rgba(10,102,194,0.6)] 
                         transition flex items-center justify-center gap-3 text-lg font-medium"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sachinkumaryadavsky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-4 rounded-xl bg-gray-800 
                         hover:bg-gray-700 
                         hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] 
                         transition flex items-center justify-center gap-3 text-lg font-medium"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
