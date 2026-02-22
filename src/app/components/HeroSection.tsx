import { motion } from 'motion/react';
import { Star, Sparkles, Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Decorative stars scattered around */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Star className="w-8 h-8 fill-yellow-400 text-yellow-500" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles className="w-10 h-10 text-pink-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart className="w-8 h-8 fill-red-400 text-red-500" />
      </motion.div>

      {/* Main content container - Scrapbook style */}
      <div className="relative max-w-4xl w-full">
        {/* Background paper */}
        <motion.div
          className="relative bg-white rounded-lg p-12 md:p-20"
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
        >
          {/* Decorative washi tape on corners */}
          <div
            className="absolute -top-4 left-20 w-32 h-8 opacity-80"
            style={{
              background: 'repeating-linear-gradient(45deg, #FF6B9D, #FF6B9D 10px, #FF8FB3 10px, #FF8FB3 20px)',
              transform: 'rotate(-12deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          />

          <div
            className="absolute -bottom-4 right-20 w-40 h-8 opacity-80"
            style={{
              background: 'repeating-linear-gradient(45deg, #A5D8FF, #A5D8FF 10px, #74C0FC 10px, #74C0FC 20px)',
              transform: 'rotate(8deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          />

          {/* Paper clip decoration */}
          <motion.div
            className="absolute -right-6 top-12 w-12 h-20 border-4 border-gray-500 rounded-t-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            {/* Small label sticker */}
            <motion.div
              className="inline-block mb-6 px-6 py-2 bg-yellow-200 rotate-2"
              whileHover={{ rotate: -2, scale: 1.05 }}
              style={{
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              }}
            >
              <p className="text-sm font-medium text-gray-700">Hello! 👋</p>
            </motion.div>

            {/* Name with mixed typography - scrapbook style */}
            <div className="mb-6">
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-2"
                style={{
                  fontFamily: 'Georgia, serif',
                  color: '#2D3748',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Boonyavee
              </motion.h1>
              <motion.h2
                className="text-4xl md:text-6xl font-bold"
                style={{
                  fontFamily: 'Georgia, serif',
                  color: '#4A5568',
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Thanabumrung
              </motion.h2>
            </div>

            {/* Role badge */}
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
            >
              <div
                className="px-8 py-3 bg-gradient-to-r from-pink-200 to-purple-200 -rotate-1"
                style={{
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                  borderRadius: '4px',
                }}
              >
                <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                  UX Designer
                </p>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Crafting delightful experiences through thoughtful design
            </motion.p>

            {/* Small polaroid-style photo placeholder */}
            <motion.div
              className="mt-12 inline-block bg-white p-3 -rotate-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              style={{
                boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
              }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 mb-2" />
              <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                Design with ♡
              </p>
            </motion.div>
          </motion.div>

          {/* Small stickers scattered */}
          <motion.div
            className="absolute top-8 left-8 text-3xl"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-12 text-2xl"
            animate={{ rotate: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💖
          </motion.div>

          <motion.div
            className="absolute top-20 right-16 text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </motion.div>

        {/* Additional scattered elements around the main card */}
        <motion.div
          className="absolute -bottom-12 -left-8 bg-pink-100 px-4 py-2 rotate-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          }}
        >
          <p className="text-sm font-medium text-gray-700">Est. 2026</p>
        </motion.div>
      </div>
    </section>
  );
}
