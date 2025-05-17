
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Smartphone, Menu, X, ShoppingCart, Info, FolderHeart as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://wa.me/5597984611862?text=Olá! Gostaria de solicitar um orçamento.";

  const navItems = [
    { name: 'Início', path: '/', icon: <HomeIcon className="w-5 h-5 mr-2" /> },
    { name: 'Produtos', path: '/produtos', icon: <ShoppingCart className="w-5 h-5 mr-2" /> },
    { name: 'Sobre Nós', path: '/sobre', icon: <Info className="w-5 h-5 mr-2" /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="bg-background/80 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">KL Phone</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center
                   ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted/50 hover:text-primary'}`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
            <Button asChild variant="default" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center
                   ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted/50 hover:text-primary'}`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
            <Button asChild variant="default" className="w-full mt-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
