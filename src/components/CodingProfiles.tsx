import { motion } from "framer-motion"
import CountUp from "react-countup"

const CodingProfiles = () => {
  return (
    <section id="coding" className="py-20 bg-gray-900 text-white">
      <div className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Competitive Programming
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LeetCode Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="w-16 mx-auto mb-4"
            />

            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              LeetCode
            </h3>

            <p className="text-gray-400 mb-2">
              Knight | Max Rating: <span className="text-white font-semibold">1898</span>
            </p>

            <p className="text-gray-400 mb-6">
              Solved{" "}
              <span className="text-yellow-400 font-bold text-xl">
                <CountUp end={1500} duration={2} />+
              </span>{" "}
              Problems
            </p>

            <a
              href="https://leetcode.com/u/Winter_Soldier_2002/"
              target="_blank"
              className="px-5 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
            >
              View Profile
            </a>
          </motion.div>

          {/* GFG Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GFG"
              className="w-20 mx-auto mb-4"
            />

            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              GeeksforGeeks
            </h3>

            <p className="text-gray-400 mb-6">
              Solved{" "}
              <span className="text-green-400 font-bold text-xl">
                <CountUp end={400} duration={2} />+
              </span>{" "}
              Problems
            </p>

            <a
              href="https://www.geeksforgeeks.org/profile/sachinkumaryadav"
              target="_blank"
              className="px-5 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition"
            >
              View Profile
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default CodingProfiles