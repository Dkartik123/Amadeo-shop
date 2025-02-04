import { cn } from '@/lib/utils';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/index';
import { Container } from './container';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Amadeo</h1>
            <p className="text-sm text-gray-400 leading-3">Alati parim valik</p>
          </div>
        </div>
        {/* Правая часть */}
        <div className="flex items-center gap-3">
            <Button variant="outline" className='flex items-center gap-2'>
                <User size={14} className="my-auto"/>   
                Logi sisse
                </Button>
                <div>
                    <Button className="group relative">
                        <b>25€</b>
                        <span className="h-full w-[1px] bgwhite/30 mx-3"/>
                        <div className="flex items-center gap-2 transition duration-300 group-hover:opacity-100 opacity-0">
                            <ShoppingCart className='h-6 w-6 relative' strokeWidth={2}/>
                            <b>3</b>
                        </div>
                        <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
                    </Button>
                </div>
        </div>
      </Container>
    </header>
  );
};
