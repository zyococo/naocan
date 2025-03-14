'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Flower } from 'lucide-react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=1600&auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mainPink/40 to-mainPink/60 backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: 360
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative"
          >
            <Flower className="mx-auto h-20 w-20 text-subPink mb-8" />
            <motion.div
              className="absolute -inset-4 rounded-full bg-white/20 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-handwriting text-5xl md:text-7xl text-textDark mb-6 leading-relaxed"
          >
            家族のカタチは人それぞれ。
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-handwriting text-3xl md:text-5xl text-textDark mb-12 leading-relaxed"
          >
            そばに寄り添う気持ちをカタチに。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block relative group"
          >
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#cta');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block px-12 py-5 bg-subPink text-white rounded-full text-lg font-medium shadow-lg hover:bg-pink-500 transition-all relative z-10"
            >
              最新情報をチェック
            </motion.a>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}