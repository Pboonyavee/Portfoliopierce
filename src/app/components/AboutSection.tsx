import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Title with tape decoration */}
          <div className="mb-12 relative inline-block">
            <motion.h2
              className="text-5xl md:text-6xl font-bold relative z-10"
              style={{
                fontFamily: 'Georgia, serif',
                color: '#2D3748',
              }}
            >
              About Me
            </motion.h2>
            <div
              className="absolute -top-2 -left-4 w-full h-12 opacity-70"
              style={{
                background: 'repeating-linear-gradient(90deg, #FFD93D, #FFD93D 15px, #FFC700 15px, #FFC700 30px)',
                transform: 'rotate(-1deg)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                zIndex: 0,
              }}
            />
          </div>

          {/* Content container - scrapbook style */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Photo collage style */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              {/* Main polaroid */}
              <div
                className="bg-white p-4 rotate-2 inline-block"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
              >
                <div className="w-full h-64 bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 mb-3" />
                <p className="text-sm text-center text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                  Designing with passion ✨
                </p>
              </div>

              {/* Small decorative polaroid */}
              <motion.div
                className="absolute -bottom-8 -right-8 bg-white p-2 -rotate-6"
                animate={{ rotate: [-6, -4, -6] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.25)' }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-200 to-pink-200" />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 text-3xl">⭐</div>
              <div className="absolute bottom-1/3 -left-6 text-2xl">💡</div>
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Text on sticky notes style */}
              <div
                className="bg-yellow-100 p-6 rotate-1 relative"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              >
                <div
                  className="absolute -top-3 left-1/4 w-16 h-6 opacity-50"
                  style={{
                    background: 'repeating-linear-gradient(90deg, transparent, transparent 3px, #888 3px, #888 6px)',
                  }}
                />
                <p className="text-lg text-gray-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Hi! I'm Boonyavee, a passionate UX Designer dedicated to creating meaningful and delightful digital experiences. With a keen eye for detail and a user-centered approach, I transform complex problems into elegant solutions.
                </p>
              </div>

              <div
                className="bg-pink-100 p-6 -rotate-1 relative"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              >
                <div
                  className="absolute -top-3 right-1/4 w-16 h-6 opacity-50"
                  style={{
                    background: 'repeating-linear-gradient(90deg, transparent, transparent 3px, #888 3px, #888 6px)',
                  }}
                />
                <p className="text-lg text-gray-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  I believe great design is not just about aesthetics—it's about empathy, research, and continuous iteration. Every project is an opportunity to learn and grow.
                </p>
              </div>

              <div
                className="bg-blue-100 p-6 rotate-2 relative"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              >
                <div
                  className="absolute -top-3 left-1/3 w-16 h-6 opacity-50"
                  style={{
                    background: 'repeating-linear-gradient(90deg, transparent, transparent 3px, #888 3px, #888 6px)',
                  }}
                />
                <p className="text-lg text-gray-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  When I'm not designing, you'll find me exploring new coffee shops, sketching ideas in my journal, or staying updated with the latest design trends.
                </p>
              </div>

              {/* Small decorative stickers */}
              <div className="flex gap-4 justify-center pt-4">
                <span className="text-3xl">🎨</span>
                <span className="text-3xl">☕</span>
                <span className="text-3xl">📱</span>
                <span className="text-3xl">✏️</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
