import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl h-11', className)}>
            <div className="flex items-center font-bold px-5">
                <ArrowUpDown size={16} className="mr-2" />
                <span>Sorteeri:</span>
                <span className='text-primary ml-2'>populaarsus</span>
            </div>
        </div>
    )
}