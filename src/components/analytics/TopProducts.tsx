import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface Product {
  name: string;
  sales: number;
  growth: number;
  image: string;
}

const topProducts: Product[] = [
  {
    name: "Wireless Earbuds",
    sales: 1234,
    growth: 25,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "Smart Watch",
    sales: 856,
    growth: 18,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "Phone Case",
    sales: 654,
    growth: 12,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

export function TopProducts() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingBag className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h3 className="font-semibold dark:text-white">Top Products</h3>
      </div>
      <div className="space-y-4">
        {topProducts.map((product) => (
          <div key={product.name} className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium dark:text-white">{product.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{product.sales} sales</p>
            </div>
            <div className="flex items-center text-green-500 text-sm">
              <span>+{product.growth}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}