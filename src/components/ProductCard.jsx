
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShoppingCart, Battery, Package } from 'lucide-react';

const ProductCard = ({ product }) => {
  const whatsappLink = `https://wa.me/5597984611862?text=Olá! Tenho interesse no ${product.name} ${product.storage}. Poderia me passar mais informações?`;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const getBatteryColor = (health) => {
    if (!health) return 'text-primary';
    const percentage = parseInt(health);
    if (percentage >= 90) return 'text-green-500';
    if (percentage >= 80) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getProductImage = (product) => {
    const imageMap = {
      'iPhone 8 Plus': 'https://storage.googleapis.com/hostinger-horizons-assets-prod/50586ce6-e2d6-43a8-b37b-6809d153835a/60651a91812b49cd3ead8e988f1aa3c9.webp',
      'iPhone 11': 'https://storage.googleapis.com/hostinger-horizons-assets-prod/50586ce6-e2d6-43a8-b37b-6809d153835a/67f019510a92182de5f59132d3a93912.webp',
      'iPhone 12': 'https://storage.googleapis.com/hostinger-horizons-assets-prod/50586ce6-e2d6-43a8-b37b-6809d153835a/29fc4c30a5bba29f97e866272ba649b1.png',
      'iPhone 12 Pro': 'https://storage.googleapis.com/hostinger-horizons-assets-prod/50586ce6-e2d6-43a8-b37b-6809d153835a/e359749bd1c67140114882a9b4401e84.webp',
      'iPhone 12 Pro Max': 'https://storage.googleapis.com/hostinger-horizons-assets-prod/50586ce6-e2d6-43a8-b37b-6809d153835a/5de8883315ae2af8a2263bbcb1c6c3c5.webp',
      'iPhone 13': 'https://storage.googleapis.com/hostinger-horizons-assets-prod/50586ce6-e2d6-43a8-b37b-6809d153835a/4fee35ee13d95fdd4d31e8bcd02fc36b.jpg',
      'iPhone 13 Pro Max': 'https://storage.googleapis.com/hostinger-horizons-assets-prod/50586ce6-e2d6-43a8-b37b-6809d153835a/a4aabbf115283d8dc60bc46bb32228e6.jpg',
      'iPhone 14': 'https://storage.googleapis.com/hostinger-horizons-assets-prod/50586ce6-e2d6-43a8-b37b-6809d153835a/dfa7a71e50c4cc4b1066b8dd0340c82f.jpg'
    };

    const baseModel = Object.keys(imageMap).find(model => product.name.startsWith(model));
    return imageMap[baseModel] || imageMap['iPhone 14'];
  };

  return (
    <motion.div variants={cardVariants} className="h-full">
      <Card className="flex flex-col h-full hover:shadow-primary/20 transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-square w-full overflow-hidden rounded-t-xl relative bg-white">
            <img  
              className="object-contain w-full h-full transition-transform duration-500 hover:scale-105 p-4"
              alt={`${product.name} ${product.storage}`}
              src={getProductImage(product)}
              style={{
                maxHeight: '100%',
                width: 'auto',
                margin: '0 auto'
              }}
            />
            {product.type === 'new' && (
              <div className="absolute top-2 right-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Novo
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl gradient-text">{product.name}</CardTitle>
            {product.type === 'used' && product.batteryHealth && (
              <div className={`flex items-center ${getBatteryColor(product.batteryHealth)}`}>
                <Battery className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">{product.batteryHealth}</span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-primary">{product.price}</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {product.storage}
              </span>
              {product.quantity && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                  {product.quantity} unidade{product.quantity > 1 ? 's' : ''}
                </span>
              )}
            </div>
            {product.warranty && (
              <CardDescription className="text-sm text-accent font-medium">
                {product.warranty}
              </CardDescription>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button asChild className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-2 h-4 w-4" /> Tenho Interesse
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
