'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail, QrCode } from 'lucide-react';

export default function CtaSection() {
  const socialLinks = [
    {
      icon: (
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-2xl p-4 sm:p-5 transition-transform"
          >
            <Mail className="w-full h-full text-white" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ),
      name: 'メール',
      href: 'mailto:naokan.buddhaflower@icloud.com',
      description: 'お問い合わせはこちら',
    },
    {
      icon: (
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-[#06C755] rounded-2xl p-4 sm:p-5 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.95 8.17L15.217 14.883C15.15 15.233 14.867 15.4 14.567 15.283L12.133 14.1L10.95 15.233C10.883 15.3 10.8 15.35 10.717 15.367L10.817 12.883L15.033 9.017C15.133 8.933 15.017 8.883 14.9 8.967L9.617 12.367L7.217 11.567C6.883 11.467 6.867 11.133 7.283 10.983L16.283 7.583C16.567 7.483 16.833 7.733 16.95 8.17Z" />
            </svg>
          </motion.div>
          <div className="absolute inset-0 bg-[#06C755]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ),
      name: 'LINE',
      href: 'https://page.line.me/994limqd',
      description: '友だち追加で最新情報',
    },
    {
      icon: (
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 rounded-2xl p-4 sm:p-5 transition-transform"
          >
            <Instagram className="w-full h-full text-white" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-orange-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ),
      name: 'Instagram',
      href: 'https://www.instagram.com/naokan.buddhaflower/',
      description: '作品やイベント情報',
    },
  ];

  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accentGreen via-accentGreen/95 to-accentGreen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting text-4xl sm:text-5xl text-white mb-6">
            最新情報をお届けします
          </h2>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">
            SNSでフォローして、新作やお得な情報をいち早くキャッチ！
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className="mt-4 text-textDark font-medium text-lg">
                    {social.name}
                  </span>
                  <span className="mt-1 text-textDark/60 text-sm">
                    {social.description}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 p-8 bg-gradient-to-br from-[#06C755]/10 via-transparent to-transparent rounded-2xl"
            >
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <QrCode className="w-6 h-6 text-[#06C755]" />
                  <span className="text-textDark font-medium">LINE QRコード</span>
                </div>
                <p className="text-textDark/80 max-w-xs">
                  QRコードを読み取って、LINEの友だち追加ができます。最新情報をお届けします！
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-4">
                  <img
                    src="https://qr-official.line.me/gs/M_994limqd_GW.png"
                    alt="LINE QR Code"
                    className="w-32 h-32"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#06C755]/20 to-[#06C755]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}