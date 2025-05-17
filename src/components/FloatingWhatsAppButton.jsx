
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5597984611862?text=Olá! Vim pelo site e gostaria de mais informações.";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-xl bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 text-white p-4 h-16 w-16"
        aria-label="Abrir chat no WhatsApp"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-8 w-8" />
        </a>
      </Button>
    </motion.div>
  );
};

export default FloatingWhatsAppButton;
