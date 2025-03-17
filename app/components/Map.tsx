'use client';

import { motion } from 'framer-motion';
import { Clock, ExternalLink, MapPin, Navigation, Phone } from 'lucide-react';
import { ReactNode } from 'react';

interface InfoContent {
  title: string;
  hours: string;
}

interface ContactInfo {
  icon: ReactNode;
  label: string;
  type: 'text' | 'hours';
  content: string[] | InfoContent[];
  action?: {
    href: string;
    label: string;
  };
}

export default function Map() {
  const mapUrl = "https://www.google.com/maps/place/%E3%81%AA%E3%81%8A%E3%81%8B%E3%82%93+naocan/@34.6578914,135.5633284,17z/data=!3m1!4b1!4m6!3m5!1s0x6000df6d158e535f:0x4148b8bcac00a5a!8m2!3d34.6578914!4d135.5633284!16s%2Fg%2F11pc99ny9x";

  const handleMapClick = () => {
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="h-5 w-5 text-subPink" />,
      label: "住所",
      type: "text",
      content: [
        "〒544-0003",
        "大阪府大阪市生野区小路東6丁目7−27"
      ]
    },
    {
      icon: <Phone className="h-5 w-5 text-subPink" />,
      label: "電話番号",
      type: "text",
      content: ["090-7882-2827"],
      action: {
        href: "tel:090-7882-2827",
        label: "電話をかける"
      }
    },
    {
      icon: <Clock className="h-5 w-5 text-subPink" />,
      label: "営業時間",
      type: "hours",
      content: [
        { title: "自動販売機", hours: "24時間営業" },
        { title: "実店舗", hours: "営業時間未定" }
      ]
    }
  ];

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 md:px-6 lg:px-8">
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
            <Navigation className="h-8 w-8 text-subPink" />
          </motion.div>
          <h2 className="font-handwriting text-4xl text-textDark mb-4">店舗案内</h2>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="h-6 w-6 text-subPink" />
            <p className="text-lg text-textDark">大阪市内</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-4 md:p-8 rounded-2xl shadow-lg h-full mx-2 sm:mx-0"
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-subPink/5 to-mainPink/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <h3 className="flex items-center gap-2 text-lg font-medium text-textDark mb-4">
                      {info.icon}
                      <span>{info.label}</span>
                    </h3>
                    <div className="space-y-2 text-textDark/80">
                      {info.type === "text" ? (
                        (info.content as string[]).map((item, i) => (
                          <p key={i} className="flex items-center gap-2">
                            {item}
                            {info.action && (
                              <a
                                href={info.action.href}
                                className="text-subPink hover:text-pink-600 transition-colors text-sm ml-2"
                              >
                                {info.action.label}
                              </a>
                            )}
                          </p>
                        ))
                      ) : (
                        (info.content as InfoContent[]).map((item, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <div>
                              <p className="text-textDark font-medium">{item.title}</p>
                              <p className="text-textDark/80">{item.hours}</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer h-[300px] md:h-full w-full mx-2 sm:mx-0"
            onClick={handleMapClick}
          >
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-subPink/5 to-mainPink/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8928528839384!2d135.56332839999998!3d34.6578914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000df6d158e535f%3A0x4148b8bcac00a5a!2z44Gq44GK44GL44KTIG5hb2Nhbg!5e0!3m2!1sja!2sjp!4v1710146433099!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <motion.div
              className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-textDark px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Google マップで開く</span>
              <ExternalLink className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}