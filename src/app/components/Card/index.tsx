import Image from "next/image";
import { ICard } from "@/app/api/cards/cardsData";
import './styles.css';

export const Card: React.FC<ICard> = ({ id, name, magic, power, fire }) => {
  return (
    <div className="relative w-[160px] h-[230px] p-2 font-exocet-heavy select-none" key={id}>
      <img
        src="/images/layout.png"
        className="w-full h-full absolute top-0 left-0 z-10 rounded"
        alt="Card"
      />

      <div className="relative top-0 flex flex-col h-full">
        <div className="bg-card-header bg-cover bg-top bg-no-repeat w-full z-10 h-14 relative -top-1 left-2">
          <div className="absolute top-[9px] right-[11px] flex justify-center w-4">
            <span className="text-white text-border">{id}</span>
          </div>
          <div className="absolute top-[2px] w-[120px] text-center">
            <span className="text-white text-border text-[9px]">{name}</span>
          </div>
        </div>

        <div className="absolute top-0">
          <Image
            className="w-full"
            src={`/images/cards/${id}.png`}
            alt={name}
            width={250}
            height={250}
          />

          <div className="flex-grow w-full">
            <div className="w-full box-border flex h-full justify-evenly p-1 bg-card-texture">
              <div className="w-1/4 aspect-square flex flex-col justify-center items-center">
                <div className="bg-magic w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                  <span className="text-white text-border">{magic}</span>
                </div>
                <p className="text-[8px] text-black">Magia</p>
              </div>

              <div className="w-1/4 aspect-square flex flex-col justify-center items-center">
                <div className="bg-power w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                  <span className="text-white text-border">{power}</span>
                </div>
                <p className="text-[8px] text-black">Força</p>
              </div>

              <div className="w-1/4 aspect-square flex flex-col justify-center items-center">
                <div className="bg-fire w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                  <span className="text-white text-border">{fire}</span>
                </div>
                <p className="text-[8px] text-black">Fogo</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
