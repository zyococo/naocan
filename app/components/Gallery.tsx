'use client';

import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      url: '/images/img1.png',
      title: '亡き母のために',
      category: '仏花アレンジメント',
    },
    {
      url: '/images/img2.png',
      title: 'お祝いの花として',
      category: 'ギフトアレンジメント',
    },
    {
      url: '/images/img3.png',
      title: '想いを込めて',
      category: 'プリザーブドフラワー',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-paleBeige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-mainPink/20"
          >
            <Camera className="h-8 w-8 text-subPink" />
          </motion.div>
          <h2 className="font-handwriting text-4xl text-textDark mb-4">Gallery</h2>
          <p className="text-lg text-textDark">心を込めて作り上げた作品たち</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative h-full"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-xs text-subPink font-medium mb-1">{image.category}</p>
                    <h3 className="text-lg font-medium text-textDark">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/naokan.buddhaflower/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-subPink hover:text-pink-600 transition-colors"
          >
            <ImageIcon className="h-5 w-5" />
            <span>Instagram でもっと見る</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}