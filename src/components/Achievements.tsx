import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>

        {/* Section Intro */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Demonstrated strong problem-solving ability and competitive
          programming expertise through consistent high-performance
          achievements.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* LeetCode */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-950 p-8 rounded-2xl border border-gray-800 
                       hover:border-yellow-500 
                       hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] 
                       transition text-center"
          >
            <SiLeetcode className="text-yellow-500 text-4xl mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-3">LeetCode Knight</h3>

            <p className="text-gray-400 mb-2">
              Top{' '}
              <span className="text-yellow-400 font-semibold">5% Globally</span>
            </p>

            <p className="text-gray-400 mb-2">
              Peak Rating:{' '}
              <span className="text-white font-semibold">1898</span>
            </p>

            <p className="text-gray-400">
              Solved{' '}
              <span className="text-yellow-400 font-semibold">1150+</span>{' '}
              algorithmic problems across Dynamic Programming, Graphs, Trees,
              and Greedy techniques.
            </p>

            <a
              href="https://leetcode.com/u/Winter_Soldier_2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 text-sm hover:underline mt-4 inline-block"
            >
              View Profile →
            </a>
          </motion.div>

          {/* GFG */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-950 p-8 rounded-2xl border border-gray-800 
                       hover:border-green-500 
                       hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] 
                       transition text-center"
          >
            <SiGeeksforgeeks className="text-green-500 text-4xl mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-3">GeeksforGeeks</h3>

            <p className="text-gray-400 mb-2">
              Solved <span className="text-green-400 font-semibold">400+</span>{' '}
              problems
            </p>

            <p className="text-gray-400">
              Strong foundation in Data Structures, Algorithms, and core
              Computer Science fundamentals.
            </p>

            <a
              href="https://www.geeksforgeeks.org/profile/sachinkumaryadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 text-sm hover:underline mt-4 inline-block"
            >
              View Profile →
            </a>
          </motion.div>

          {/* JEE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-950 p-8 rounded-2xl border border-gray-800 
                       hover:border-indigo-500 
                       hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] 
                       transition text-center"
          >
            <FaTrophy className="text-indigo-500 text-4xl mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-3">JEE Main 2021</h3>

            <p className="text-gray-400 mb-2">
              Secured{' '}
              <span className="text-indigo-400 font-semibold">
                Top 6 Percentile
              </span>
            </p>

            <p className="text-gray-400">
              Among 1.2 million candidates nationwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
