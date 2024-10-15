import { ICard } from "@/app/cardsData";

export const CardBack: React.FC<ICard> = ({ id }) => {

  return (
    <div
      id={`card-${id}`}
      key={id}
      className="relative w-[130px] h-[186px] font-exocet-heavy select-none drop-shadow-card">

      <div className=" absolute bg-card-layout bg-full bg-no-repeat w-full h-full rounded" />

      <div className="w-full h-full bg-red-900" />
    </div>
  );
};
