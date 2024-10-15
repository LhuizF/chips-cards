'use client';

import { Card } from "./components/Card";
import { CardBack } from "./components/CardBack";
import { useGame } from "./hooks/useGame";

export default function Home() {
  const { userCards } = useGame();

  return (
    <div className="flex flex-col mx-8 py-4 h-screen">
      <div className="bg-red-400 flex flex-1">

      </div>

      <div className="m-2 flex flex-wrap gap-2 justify-center max-h-[65%]">
        {userCards.map((card) => card.isUserCard ? <Card key={card.id} {...card} /> : <CardBack key={card.id} {...card} />)}
      </div >
    </div>
  );
}
