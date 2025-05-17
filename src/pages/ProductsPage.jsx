
import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { Smartphone, Battery, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const usedProducts = [
  {
    id: 1,
    name: 'iPhone 8 Plus',
    storage: '256GB',
    batteryHealth: '100%',
    price: 'R$ 1.290',
    type: 'used',
    quantity: 1,
    imageName: 'iPhone 8 Plus in Space Gray color on white background'
  },
  {
    id: 2,
    name: 'iPhone 11',
    storage: '64GB',
    batteryHealth: '93%',
    price: 'R$ 1.790',
    type: 'used',
    quantity: 2,
    imageName: 'iPhone 11 in black color showing dual camera system'
  },
  {
    id: 3,
    name: 'iPhone 11',
    storage: '128GB',
    batteryHealth: '90% a 100%',
    price: 'R$ 1.990 a R$ 2.090',
    type: 'used',
    quantity: 6,
    imageName: 'iPhone 11 in white color showing dual camera system'
  },
  {
    id: 4,
    name: 'iPhone 12',
    storage: '64GB',
    batteryHealth: '84%',
    price: 'R$ 2.090',
    type: 'used',
    quantity: 2,
    imageName: 'iPhone 12 in blue color showing camera system'
  },
  {
    id: 5,
    name: 'iPhone 12',
    storage: '128GB',
    batteryHealth: '92% a 100%',
    price: 'R$ 2.390 a R$ 2.490',
    type: 'used',
    quantity: 4,
    imageName: 'iPhone 12 in white color showing camera system'
  },
  {
    id: 6,
    name: 'iPhone 12 Pro',
    storage: '128GB',
    batteryHealth: '90% a 92%',
    price: 'R$ 2.890',
    type: 'used',
    quantity: 2,
    imageName: 'iPhone 12 Pro in graphite color showing triple camera system'
  },
  {
    id: 7,
    name: 'iPhone 12 Pro Max',
    storage: '128GB',
    batteryHealth: '89%',
    price: 'R$ 3.190',
    type: 'used',
    quantity: 1,
    imageName: 'iPhone 12 Pro Max in pacific blue color showing triple camera system'
  },
  {
    id: 8,
    name: 'iPhone 13',
    storage: '128GB',
    batteryHealth: '82% a 94%',
    price: 'R$ 2.690 a R$ 2.890',
    type: 'used',
    quantity: 5,
    imageName: 'iPhone 13 in midnight color showing diagonal camera system'
  },
  {
    id: 9,
    name: 'iPhone 13 Pro Max',
    storage: '128GB',
    batteryHealth: '85% a 91%',
    price: 'R$ 3.890',
    type: 'used',
    quantity: 6,
    imageName: 'iPhone 13 Pro Max in sierra blue color showing triple camera system'
  },
  {
    id: 10,
    name: 'iPhone 14',
    storage: '128GB',
    batteryHealth: '92%',
    price: 'R$ 3.190',
    type: 'used',
    quantity: 1,
    warranty: 'Garantia Apple até Agosto/2025',
    imageName: 'iPhone 14 in purple color showing dual camera system'
  }
];

const newProducts = [
  {
    id: 11,
    name: 'iPhone 11',
    storage: '64GB',
    price: 'R$ 2.590',
    type: 'new',
    imageName: 'New iPhone 11 in black color retail package'
  },
  {
    id: 12,
    name: 'iPhone 11',
    storage: '128GB',
    price: 'R$ 2.990',
    type: 'new',
    imageName: 'New iPhone 11 in white color retail package'
  },
  {
    id: 13,
    name: 'iPhone 12',
    storage: '128GB',
    price: 'R$ 3.290',
    type: 'new',
    imageName: 'New iPhone 12 in blue color retail package'
  },
  {
    id: 14,
    name: 'iPhone 13',
    storage: '128GB',
    price: 'R$ 3.690',
    type: 'new',
    imageName: 'New iPhone 13 in midnight color retail package'
  },
  {
    id: 15,
    name: 'iPhone 14',
    storage: '128GB',
    price: 'R$ 4.290',
    type: 'new',
    imageName: 'New iPhone 14 in blue color retail package'
  },
  {
    id: 16,
    name: 'iPhone 15',
    storage: '128GB',
    price: 'R$ 4.790',
    type: 'new',
    imageName: 'New iPhone 15 in natural titanium color retail package'
  },
  {
    id: 17,
    name: 'iPhone 16',
    storage: '128GB',
    price: 'R$ 5.390',
    type: 'new',
    imageName: 'New iPhone 16 in black color retail package'
  },
  {
    id: 18,
    name: 'iPhone 16 Plus',
    storage: '128GB',
    price: 'R$ 6.590',
    type: 'new',
    imageName: 'New iPhone 16 Plus in blue color retail package'
  },
  {
    id: 19,
    name: 'iPhone 16 Pro',
    storage: '128GB',
    price: 'R$ 6.790',
    type: 'new',
    imageName: 'New iPhone 16 Pro in titanium color retail package'
  },
  {
    id: 20,
    name: 'iPhone 16 Pro Max',
    storage: '256GB',
    price: 'R$ 7.590',
    type: 'new',
    imageName: 'New iPhone 16 Pro Max in natural titanium color retail package'
  },
  {
    id: 21,
    name: 'iPhone 16 Pro Max',
    storage: '512GB',
    price: 'R$ 9.090',
    type: 'new',
    imageName: 'New iPhone 16 Pro Max in black titanium color retail package'
  }
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('used');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const products = activeCategory === 'used' ? usedProducts : newProducts;

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-8"
    >
      <motion.div 
        className="flex flex-col items-center justify-center mb-12 space-y-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <Smartphone className="h-10 w-10 text-primary mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">Catálogo de iPhones</h1>
        </div>

        <div className="flex space-x-4">
          <Button
            variant={activeCategory === 'used' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('used')}
            className={`flex items-center ${activeCategory === 'used' ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
          >
            <Battery className="mr-2 h-5 w-5" />
            📲 Seminovos
          </Button>
          <Button
            variant={activeCategory === 'new' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('new')}
            className={`flex items-center ${activeCategory === 'new' ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
          >
            <Package className="mr-2 h-5 w-5" />
            📦 Lacrados
          </Button>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsPage;
