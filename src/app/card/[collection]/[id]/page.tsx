'use client';
import { ICard } from "@/app/api/cardsData";
import { useEffect, useState } from "react";
import { Card } from './components/Card';
import { CardLoading } from "@/app/components/CardLoading";
import { Link } from "next-view-transitions";

const fetchCard = async (id: string): Promise<ICard> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/card/${id}`);

  const data = await response.json();
  return data;
};

export default function CardPage({ params }: any) {
  const [card, setCard] = useState<ICard>();

  useEffect(() => {
    const fetchCardData = async () => {
      const cardData = await fetchCard(params.id);
      setCard(cardData);
    };

    fetchCardData();
  }, []);

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
