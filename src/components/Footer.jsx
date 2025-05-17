
import React from 'react';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: 'https://instagram.com/klphonemanicore' },
  ];

  const contactInfo = {
    whatsapp: '(97) 98461-1862',
    address: 'Av. Getúlio Vargas 505, Centro – Manicoré/AM',
    hours: 'Segunda a sábado, das 8h às 18h',
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="bg-secondary text-secondary-foreground py-12"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4 gradient-text">KL Phone</h3>
          <p className="text-sm text-muted-foreground">Especialistas em iPhones. Venda e Assistência Técnica.</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4">Contato & Localização</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="w-4 h-4 mr-2 text-accent" />
              {contactInfo.whatsapp}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <MapPin className="w-4 h-4 mr-2 text-accent" />
              {contactInfo.address}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Clock className="w-4 h-4 mr-2 text-accent" />
              {contactInfo.hours}
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div 
        variants={itemVariants}
        className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t border-border/20"
      >
        © {new Date().getFullYear()} KL Phone. Todos os direitos reservados.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
