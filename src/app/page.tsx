import Image from "next/image";
import { ICard } from "@/app/api/cards/cardsData";
import { Card } from "./components/Card";

const fetchCards = async (): Promise<ICard[]> => {
  const response = await fetch(`${process.env.URL_API}/cards`, {
    cache: "no-cache",
  });

  const data = await response.json();
  return data;
};

export default async function Home() {
  const cards = await fetchCards();

  return (
    <div className="flex justify-center m-8">
      <div className="m-2 grid grid-cols-8 gap-2">
        {cards.map((card) =>
          <Card key={card.id} {...card} />
        )}
      </div >
    </div>
  );
}
