
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Wrench, ShoppingBag, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center py-12 md:py-24"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <Smartphone className="h-24 w-24 md:h-32 md:w-32 text-primary mx-auto animate-pulse" />
      </motion.div>
      
      <motion.h1 
        variants={itemVariants} 
        className="text-4xl md:text-6xl font-extrabold mb-6"
      >
        Bem-vindo à <span className="gradient-text">KL Phone</span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants} 
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Sua especialista em iPhones em Manicoré/AM. Oferecemos os melhores aparelhos e assistência técnica de confiança.
      </motion.p>
      
      <motion.div 
        variants={itemVariants} 
        className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center items-center"
      >
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6 w-full md:w-auto">
          <Link to="/produtos">
            <ShoppingBag className="mr-2 h-5 w-5" /> Ver Produtos
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 w-full md:w-auto border-primary text-primary hover:bg-primary/10">
          <Link to="/sobre">
            <Wrench className="mr-2 h-5 w-5" /> Nossos Serviços
          </Link>
        </Button>
      </motion.div>

      <motion.section 
        variants={containerVariants} 
        className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div variants={itemVariants} className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <ShoppingBag className="h-12 w-12 text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">iPhones Selecionados</h3>
          <p className="text-muted-foreground text-sm">Modelos novos e seminovos com garantia e procedência.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Wrench className="h-12 w-12 text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Assistência Especializada</h3>
          <p className="text-muted-foreground text-sm">Reparos rápidos e eficientes para o seu dispositivo Apple.</p>
        </motion.div>
        <motion.div variants={itemVariants} className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Smartphone className="h-12 w-12 text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Atendimento Premium</h3>
          <p className="text-muted-foreground text-sm">Consultoria e suporte para você fazer a melhor escolha.</p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
