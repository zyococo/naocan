'use client';

import { motion } from 'framer-motion';
import { Flower2, Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-mainPink py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00C2E8]/20 to-[#00C2E8]/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-gradient-to-br from-[#00C2E8] to-[#00A6E8] p-3 rounded-xl">
                        <Truck className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-medium text-textDark">Woltでお届け</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-xl text-textDark/80">
                        関西圏限定で、Woltによる配達サービスを提供しています。
                      </p>
                      <p className="text-xl text-textDark/80">
                        Woltアプリを通じて、配達員パートナーが素早くお花をお届けします。
                      </p>
                      <motion.a
                        href="https://wolt.com/ja/jpn/osaka/venue/preserved-flower-shop-naocan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-[#00C2E8] text-white rounded-full hover:bg-[#00A6E8] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="mr-2">Woltで注文する</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>

                  <div className="relative h-full w-full aspect-square md:aspect-auto md:h-[320px]">
                    <img
                      src="https://newscast.jp/attachments/LNNW4D4fTJaOExScS7j0.png"
                      alt="Wolt Delivery"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00C2E8]/10 to-transparent mix-blend-overlay" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center mt-16 mb-8"
          >
            <Flower2 className="h-6 w-6 text-subPink" />
            <span className="font-handwriting text-xl text-textDark ml-2">なおかん</span>
          </motion.div>

          <div className="text-center">
            <p className="text-textDark/60">
              © {new Date().getFullYear()} なおかん. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}