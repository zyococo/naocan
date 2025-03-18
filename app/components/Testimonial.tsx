'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Quote, Star } from 'lucide-react';

export default function Testimonial() {
  const testimonials = [
    {
      text: '大切な方への贈り物として購入しました。想像以上に素敵なアレンジメントで、とても喜んでいただけました。',
      name: 'K.S様',
      rating: 5,
    },
    {
      text: '24時間いつでも購入できる自動販売機がとても便利！プリザーブドフラワーなので長く楽しめるのもいい点！',
      name: 'M.T様',
      rating: 5,
    },
    {
      text: '仏花として使用していますが、美しさが長持ちするので本当に助かっています！いたむことなく長持ちします！',
      name: 'Y.N様',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-paleBeige/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-subPink/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <MessageCircle className="h-8 w-8 text-subPink" />
          </motion.div>
          <h2 className="font-handwriting text-4xl text-textDark mb-4">お客様の声</h2>
          <p className="text-lg text-textDark">たくさんの笑顔に出会えました</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-subPink/5 to-mainPink/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                <Quote className="h-8 w-8 text-subPink mb-6" />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-textDark mb-6 leading-relaxed">{testimonial.text}</p>
                <p className="text-right text-subPink font-medium">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}