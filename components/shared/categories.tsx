'use client';

import { useCategoryStore } from '@/components/shared/store/category';
import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
    className?: string;
  }
  

const cats = [{id: 1, name: 'Kooliriided'}, {id: 2, name: 'Beebiriided'}, {id: 3, name: 'Tüdrukud'}, {id: 4, name: 'Poisid'}, {id: 5, name: 'Pidulikud Kleidid'}]

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
        e.preventDefault();
        const targetId = name.toLowerCase().replace(/\s+/g, '');
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {cats.map(({ name, id }, index) => (
          <a
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer',
              categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
            )}
            href={`/#${name}`}
            onClick={(e) => handleClick(e, name)}
            key={index}>
            <button>{name}</button>
          </a>
        ))}
      </div>
    );
  };
  