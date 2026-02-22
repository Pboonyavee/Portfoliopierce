import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    description: 'Streamlined checkout process',
    image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXAlMjBsYXB0b3B8ZW58MXx8fHwxNzcxNjY4NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['UI/UX', 'Research'],
    rotate: -3,
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Intuitive financial management',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcxNzIzNDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Mobile', 'Fintech'],
    rotate: 2,
  },
  {
    id: 3,
    title: 'Brand Identity',
    description: 'Complete visual system',
    image: 'https://images.unsplash.com/photo-1728467459756-211f3c738697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcxNzA0NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Branding', 'Visual Design'],
    rotate: -2,
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Scalable component library',
    image: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdvcmtzcGFjZSUyMHRhYmxldCUyMHNrZXRjaHxlbnwxfHx8fDE3NzE3NDQyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Design System', 'Documentation'],
    rotate: 3,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title with decorative tape */}
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
            My Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-10 opacity-70"
            style={{
              background: 'repeating-linear-gradient(45deg, #C4B5FD, #C4B5FD 15px, #A78BFA 15px, #A78BFA 30px)',
              transform: 'translateX(-50%) rotate(-1deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              zIndex: 0,
            }}
          />
        </div>

        {/* Projects grid - Polaroid style */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: project.rotate } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="relative group cursor-pointer"
            >
              {/* Polaroid frame */}
              <div
                className="bg-white p-4 pb-16"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-200 aspect-[4/3]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Polaroid caption */}
                <div className="mt-4 text-center">
                  <h3
                    className="text-xl font-bold text-gray-800 mb-1"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex gap-2 justify-center flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-pink-200 text-gray-700 font-medium"
                        style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Random decorative stickers */}
              {index % 4 === 0 && (
                <div className="absolute -top-4 -right-4 text-4xl">⭐</div>
              )}
              {index % 4 === 1 && (
                <div className="absolute -bottom-6 -left-4 text-3xl">💖</div>
              )}
              {index % 4 === 2 && (
                <div className="absolute -top-6 -left-4 text-3xl">✨</div>
              )}
              {index % 4 === 3 && (
                <div className="absolute -bottom-4 -right-6 text-3xl">🌟</div>
              )}

              {/* Paper clip on some */}
              {index % 2 === 0 && (
                <motion.div
                  className="absolute -top-8 right-8 w-8 h-12 border-3 border-gray-500 rounded-t-full"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              )}

              {/* Washi tape decoration */}
              {index % 3 === 0 && (
                <div
                  className="absolute -bottom-2 left-1/4 w-24 h-6 opacity-80"
                  style={{
                    background: 'repeating-linear-gradient(45deg, #FDE68A, #FDE68A 8px, #FCD34D 8px, #FCD34D 16px)',
                    transform: 'rotate(5deg)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white px-8 py-4 rotate-1" style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.2)' }}>
            <p className="text-lg font-medium text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
              And many more exciting projects! 🎨✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
