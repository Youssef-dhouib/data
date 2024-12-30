import React from 'react';
import { Check } from 'lucide-react';

interface Feature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  yearlyPrice: number;
  features: Feature[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, yearlyPrice, features, isPopular }: PricingCardProps) {
  return (
    <div className={`relative rounded-2xl border ${isPopular ? 'border-blue-600 shadow-lg' : 'border-gray-200'} p-8 shadow-sm`}>
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-1 text-center text-sm font-medium text-white">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600">/month</span>
          <p className="mt-1 text-sm text-gray-500">${yearlyPrice}/year</p>
        </div>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`h-5 w-5 ${feature.included ? 'text-blue-600' : 'text-gray-300'}`} />
            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full rounded-lg ${isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} px-4 py-2.5 text-sm font-semibold text-white shadow-sm`}>
        Get started
      </button>
      <p className="mt-2 text-center text-sm text-gray-500">7 days free trial</p>
    </div>
  );
}