import Image from "next/image";
import { ICard } from "@/app/api/cardsData";
import { Card } from "./components/Card";

const fetchCards = async (): Promise<ICard[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cards`);

  const data = await response.json();
  return data;
};

export default async function Home() {
  const cards = await fetchCards();

  return (
    <div className="flex flex-col mx-8 py-4 h-screen">
      <div className="bg-red-400 flex flex-1">

      </div>

      <div className="m-2 flex flex-wrap gap-2 justify-center">
        {cards.map((card) =>
          <Card key={card.id} {...card} />
        )}
      </div >
    </div>
  );
}
