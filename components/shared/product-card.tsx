import { cn } from "@/lib/utils";

import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { Title } from "./title";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: any[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  description,
  className,
}) => {
  return (
    <div className={cn("w-full max-w-[300px]", className)}>
      <Link href={`/product/${id}`}>
        <div className="relative bg-secondary rounded-lg aspect-square p-[2px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={imageUrl}
            alt={name}
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        {description && <p className="text-sm text-gray-400">{description}</p>}

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} €</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
