
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock, Info, Users, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  const contactDetails = {
    whatsapp: '(97) 98461-1862',
    whatsappLink: 'https://wa.me/5597984611862',
    instagram: '@klphonemanicore',
    instagramLink: 'https://instagram.com/klphonemanicore',
    address: 'Av. Getúlio Vargas 505, Centro – Manicoré/AM',
    hours: 'Segunda a sábado, das 8h às 18h',
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  
  const listItemStagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="py-12"
    >
      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <Info className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">Sobre a KL Phone</h1>
        <p className="text-lg text-muted-foreground mt-2">Conheça mais sobre nossa loja e serviços.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          className="bg-card p-8 rounded-xl shadow-xl"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
            <Users className="mr-3 h-7 w-7" /> Nossa Missão
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Na KL Phone, nossa missão é fornecer aos nossos clientes em Manicoré e região acesso fácil e confiável a produtos Apple de alta qualidade, juntamente com um serviço de assistência técnica especializado e ágil. Buscamos sempre a satisfação total, oferecendo transparência, garantia e um atendimento personalizado.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Acreditamos que a tecnologia deve simplificar a vida, e estamos aqui para garantir que seu iPhone funcione perfeitamente, seja ele novo ou seminovo.
          </p>
        </motion.div>

        <motion.div 
          className="bg-card p-8 rounded-xl shadow-xl"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center">
            <ShieldCheck className="mr-3 h-7 w-7" /> Por que Escolher a KL Phone?
          </h2>
          <motion.ul className="space-y-3 text-muted-foreground" variants={listItemStagger}>
            {[
              "Especialistas em iPhones: Conhecimento profundo dos produtos Apple.",
              "Produtos com Garantia: Tranquilidade na sua compra e serviço.",
              "Atendimento Personalizado: Entendemos sua necessidade.",
              "Localização Central: Fácil acesso em Manicoré.",
              "Preços Competitivos: O melhor custo-benefício da região."
            ].map((text, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 bg-card p-8 rounded-xl shadow-xl"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 gradient-text">Informações de Contato</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={listItemStagger}>
          <motion.div variants={itemVariants} className="flex items-start p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Phone className="h-8 w-8 text-accent mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-foreground">WhatsApp</h3>
              <a href={contactDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {contactDetails.whatsapp}
              </a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Instagram className="h-8 w-8 text-accent mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-foreground">Instagram</h3>
              <a href={contactDetails.instagramLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {contactDetails.instagram}
              </a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <MapPin className="h-8 w-8 text-accent mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-foreground">Endereço</h3>
              <p className="text-muted-foreground">{contactDetails.address}</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Clock className="h-8 w-8 text-accent mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-foreground">Horário de Funcionamento</h3>
              <p className="text-muted-foreground">{contactDetails.hours}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
