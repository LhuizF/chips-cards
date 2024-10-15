'use client';

import { ICard } from "@/app/cardsData";
import { Card } from './components/Card';
import { CardLoading } from "@/app/components/CardLoading";
import { Link } from "next-view-transitions";
import { dracomaniaCards } from '@/app/cardsData';

const getCardById = (id: number): ICard | undefined =>
  dracomaniaCards.find((card) => card.id === id);

export default function CardPage({ params }: { params: { id: string; }; }) {
  const card = getCardById(parseInt(params.id));

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Link href="/" className="absolute top-4 left-4 py-2.5 px-6 text-sm rounded-full bg-gray-700 text-white cursor-pointer font-semibold
      text-center shadow-xs transition-all duration-500 hover:bg-gray-900">
        Voltar
      </Link>
      <div style={{ viewTransitionName: `card-${params.id}` }} className="w-[464px] h-[667px]">
        {card ? <Card {...card} /> : <CardLoading width={464} height={667} />}
      </div>
    </div>
  );
}
