'use client';
import { ICard } from "@/app/api/cardsData";
import { useEffect, useState } from "react";
import { Card } from './components/Card';

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
      <div style={{ viewTransitionName: `card-${params.id}` }} className="w-[464px] h-[667px] p-7">
        {card && <Card card={card} id={params.id} />}
      </div>
    </div>
  );
}
