import React from 'react';
import { Category } from '../../types';
import { CATEGORY_COLORS } from '../../constants';

interface BadgeProps {
  category: Category;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ category, className = '', size = 'sm' }) => {
  const colorClass = CATEGORY_COLORS[category] || "bg-gray-100 text-gray-800";
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';
  
  return (
    <span className={`inline-flex items-center rounded-md font-bold tracking-wider uppercase ${colorClass} ${sizeClass} ${className}`}>
      {category}
    </span>
  );
};