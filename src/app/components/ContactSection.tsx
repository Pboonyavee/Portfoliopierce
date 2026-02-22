import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Twitter, Heart } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@boonyavee.design',
      href: 'mailto:hello@boonyavee.design',
      color: 'bg-pink-100',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/boonyavee-thanabumrung',
      href: '#',
      color: 'bg-blue-100',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@boonyavee',
      href: '#',
      color: 'bg-purple-100',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@boonyavee_ux',
      href: '#',
      color: 'bg-cyan-100',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
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
            Let's Connect!
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-72 h-8 opacity-70"
            style={{
              background: 'repeating-linear-gradient(45deg, #FED7E2, #FED7E2 10px, #FBB6CE 10px, #FBB6CE 20px)',
              transform: 'translateX(-50%) rotate(-1.5deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              zIndex: 0,
            }}
          />
        </div>

        {/* Contact content - Scrapbook style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Main card */}
          <div
            className="bg-white p-8 md:p-12 rounded-lg relative"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            {/* Decorative tapes */}
            <div
              className="absolute -top-4 left-1/4 w-32 h-8 opacity-80"
              style={{
                background: 'repeating-linear-gradient(90deg, #A5F3FC, #A5F3FC 12px, #67E8F9 12px, #67E8F9 24px)',
                transform: 'rotate(-8deg)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              }}
            />

            <div
              className="absolute -top-4 right-1/4 w-32 h-8 opacity-80"
              style={{
                background: 'repeating-linear-gradient(90deg, #FDE68A, #FDE68A 12px, #FCD34D 12px, #FCD34D 24px)',
                transform: 'rotate(8deg)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              }}
            />

            {/* Content */}
            <div className="text-center mb-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-700 mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                I'm always excited to collaborate on new projects or just chat about design! 
                Feel free to reach out through any of these channels:
              </motion.p>
            </div>

            {/* Contact links grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                    className={`${link.color} p-6 rounded-lg flex items-center gap-4 group cursor-pointer`}
                    style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                  >
                    <div className="p-3 bg-white rounded-full">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-gray-600 mb-1">{link.label}</p>
                      <p className="text-gray-800 font-medium break-all">{link.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Call to action note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="relative"
            >
              <div
                className="bg-yellow-100 p-6 rotate-1 inline-block w-full"
                style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.15)' }}
              >
                <div
                  className="absolute -top-3 left-1/3 w-16 h-6 bg-gray-400/30"
                  style={{
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                />
                <p className="text-center text-lg text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                  <strong>Currently available</strong> for freelance projects and full-time opportunities! 🎨
                </p>
              </div>
            </motion.div>

            {/* Decorative stickers */}
            <motion.div
              className="absolute -top-6 -right-4 text-4xl"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💌
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-4 text-3xl"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✉️
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📬
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span style={{ fontFamily: 'Georgia, serif' }}>Made with</span>
            <Heart className="w-5 h-5 fill-red-400 text-red-500" />
            <span style={{ fontFamily: 'Georgia, serif' }}>by Boonyavee Thanabumrung</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">© 2026 All rights reserved</p>
          
          {/* Small decorative elements */}
          <div className="flex justify-center gap-3 mt-6">
            <span className="text-2xl">🌸</span>
            <span className="text-2xl">✨</span>
            <span className="text-2xl">🎨</span>
            <span className="text-2xl">💫</span>
            <span className="text-2xl">🌟</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
