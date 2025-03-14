'use client';

import { motion } from 'framer-motion';
import { Building2, Flower2, ShoppingBag, Store } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: '神社・仏閣での店頭販売',
      description: '関西圏の神社・仏閣で、心を込めて作られたプリザーブドフラワーをご提供しています。',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: <Store className="h-12 w-12" />,
      title: '世界初！？プリザーブド専用自販機',
      description: '24時間365日、お好きな時間に高品質なプリザーブド仏花をお求めいただけます。',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <ShoppingBag className="h-12 w-12" />,
      title: 'フローリストなおかんの全てを展示',
      description: '当店の作品やサービスを一堂に展示。プリザーブドフラワーの魅力をご覧いただけます。',
      gradient: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-paleBeige to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-mainPink/20"
          >
            <Flower2 className="h-8 w-8 text-subPink" />
          </motion.div>
          <h2 className="font-handwriting text-4xl text-textDark mb-4">About Us</h2>
          <p className="text-lg text-textDark">唯一無二のフローリスト</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                }} />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${highlight.gradient}`} />
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${highlight.gradient} text-white`}>
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-textDark mb-4">{highlight.title}</h3>
                <p className="text-textDark/80">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}