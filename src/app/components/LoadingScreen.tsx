import { motion } from 'motion/react';

export function LoadingScreen() {
  const letters = ['B', 'o', 'o', 'n', 'y', 'a', 'v', 'e', 'e'];

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#C0D2D8' }}
    >
      <div className="relative w-full max-w-2xl px-8">
        {/* Background decorative elements */}
        <motion.div
          className="absolute -top-20 -left-10 w-16 h-16"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-6xl">⭐</div>
        </motion.div>

        <motion.div
          className="absolute -bottom-20 -right-10 w-16 h-16"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: -360, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="text-6xl">✨</div>
        </motion.div>

        {/* Main name with fabric texture letters */}
        <div className="relative flex items-center justify-center gap-2">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ y: -100, opacity: 0, rotate: Math.random() * 40 - 20 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: index * 0.15,
              }}
            >
              <div
                className="text-5xl md:text-7xl lg:text-9xl font-bold relative"
                style={{
                  fontFamily: 'Georgia, serif',
                  color: '#2D3748',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
                  transform: `rotate(${Math.random() * 6 - 3}deg)`,
                }}
              >
                {letter}
                {/* Fabric texture overlay */}
                <div
                  className="absolute inset-0 opacity-30 mix-blend-multiply"
                  style={{
                    background: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 2px,
                      rgba(0,0,0,0.1) 2px,
                      rgba(0,0,0,0.1) 4px
                    )`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative tapes */}
        <motion.div
          className="absolute -top-8 left-1/4 w-32 h-8 bg-pink-300 opacity-70 rounded-sm"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{
            background: 'repeating-linear-gradient(90deg, #F8B4D9, #F8B4D9 10px, #F39EC1 10px, #F39EC1 20px)',
            transform: 'rotate(-15deg)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        />

        <motion.div
          className="absolute -bottom-6 right-1/4 w-40 h-8 bg-yellow-300 opacity-70 rounded-sm"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.7 }}
          transition={{ delay: 2, duration: 0.5 }}
          style={{
            background: 'repeating-linear-gradient(90deg, #FDE68A, #FDE68A 10px, #FCD34D 10px, #FCD34D 20px)',
            transform: 'rotate(12deg)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        />

        {/* Paper clip */}
        <motion.div
          className="absolute -right-4 top-1/2"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ delay: 2.5, type: 'spring', stiffness: 200 }}
        >
          <div className="w-8 h-16 border-4 border-gray-400 rounded-full" style={{ borderRadius: '50% 50% 0 0' }} />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
        >
          <p className="text-xl font-semibold text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
            Creating portfolio...
          </p>
        </motion.div>
      </div>
    </div>
  );
}