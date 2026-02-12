import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <p className="text-gray-400 mb-10">
          I'm open to SDE opportunities and collaborations.
          Feel free to reach out 👇
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          {/* Email */}
          <a
            href="mailto:sachinkumaryadavnita@gmail.com"
            className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 
                       hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] 
                       transition flex items-center justify-center gap-2"
          >
            <MdEmail size={18} />
            Email Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sachin-kumar-8b8441226"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0A66C2] rounded-xl 
                       hover:bg-[#004182] 
                       hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] 
                       transition flex items-center justify-center gap-2"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sachinkumaryadavsky"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 rounded-xl 
                       hover:bg-gray-700 
                       hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] 
                       transition flex items-center justify-center gap-2"
          >
            <FaGithub size={18} />
            GitHub
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact