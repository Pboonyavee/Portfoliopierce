import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Palette, Smartphone, Layout, Users, Lightbulb, Zap } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Visual Design',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator'],
    color: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    icon: Smartphone,
    title: 'Prototyping',
    items: ['Interactive Prototypes', 'Micro-interactions', 'Animation'],
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Layout,
    title: 'UI Design',
    items: ['Responsive Design', 'Design Systems', 'Component Libraries'],
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Users,
    title: 'User Research',
    items: ['User Interviews', 'Usability Testing', 'Personas'],
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    items: ['UX Strategy', 'Information Architecture', 'User Flows'],
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Zap,
    title: 'Collaboration',
    items: ['Cross-functional Teams', 'Workshops', 'Stakeholder Management'],
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title with tape decoration */}
        <div className="mb-16 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold inline-block relative z-10"
            style={{
              fontFamily: 'Georgia, serif',
              color: '#2D3748',
            }}
          >
            Skills & Tools
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-80 h-8 opacity-70"
            style={{
              background: 'repeating-linear-gradient(90deg, #BFDBFE, #BFDBFE 12px, #93C5FD 12px, #93C5FD 24px)',
              transform: 'translateX(-50%) rotate(1deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              zIndex: 0,
            }}
          />
        </div>

        {/* Skills grid - Sticky note style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const rotations = [-2, 1, -1, 2, -1.5, 1.5];
            const rotation = rotations[index % rotations.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="relative group cursor-pointer"
              >
                {/* Sticky note */}
                <div
                  className={`${skill.color} p-6 h-full min-h-[280px] relative`}
                  style={{
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* Tape at top */}
                  <div
                    className="absolute -top-3 left-1/3 w-20 h-6 bg-white/40"
                    style={{
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    }}
                  />

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 bg-white rounded-full ${skill.iconColor}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-4 text-center"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {skill.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-gray-700">✦</span>
                        <span className="text-gray-800 font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Random corner fold effect on some cards */}
                  {index % 3 === 0 && (
                    <div
                      className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] opacity-30"
                      style={{
                        borderBottomColor: '#000',
                      }}
                    />
                  )}
                </div>

                {/* Small decorative elements */}
                {index % 2 === 0 && (
                  <motion.div
                    className="absolute -bottom-3 -right-3 text-3xl"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-block bg-white px-10 py-6 -rotate-1 max-w-2xl"
            style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
          >
            <p
              className="text-xl text-gray-700 italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <p className="text-sm text-gray-500 mt-2">- Steve Jobs</p>
            <div className="mt-4 flex justify-center gap-2">
              <span className="text-2xl">💭</span>
              <span className="text-2xl">✨</span>
              <span className="text-2xl">💡</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
