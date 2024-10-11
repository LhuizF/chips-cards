import Image from "next/image";
import { ICard } from "@/app/api/cardsData";

const fetchCard = async (id: string): Promise<ICard> => {

  const response = await fetch(`${process.env.URL_API}/card/${id}`);

  const data = await response.json();
  return data;
};

export default async function Card({ params }: any) {
  const card = await fetchCard(params.id);

  return (

    <div className="w-full h-full flex items-center justify-center">
      <div
        style={{ viewTransitionName: `demo-${params.id}` }}
        className="relative w-[464px] h-[667px] p-7 font-exocet-heavy select-none">

        {/* layout da card */}
        <img
          src="/images/layout.png"
          className="w-full h-full absolute top-0 left-0 z-10 rounded-2xl"
          alt="card-layout"
        />

        {/* conteúdo da card */}
        <div className="relative top-0 flex flex-col h-full w-full">

          {/* header da card */}

          <div className="bg-card-header bg-contain bg-top bg-no-repeat w-full z-10 h-[158px] relative -top-4 left-7">
            <div className="absolute top-6 right-14 flex justify-center w-4">
              <span className="text-white text-stroke-paint text-[40px]">{card.id}</span>
            </div>
            <div className="absolute top-6 w-full text-end right-32">
              <span className="text-white text-stroke-paint text-xl">{card.name}</span>
            </div>
          </div>

          <div className="absolute top-0 w-full">
            <Image
              className="w-full"
              src={`/images/cards/${card.id}.png`}
              alt={card.name}
              width={250}
              height={250}
            />

            <div className="flex-grow w-full bg-red-400">
              <div className="w-full box-border flex h-full justify-evenly py-4 px-6 bg-card-texture">
                <div className="w-1/3 aspect-square flex flex-col justify-center items-center">
                  <div className="bg-magic w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                    <span className="text-white text-4xl text-stroke-paint">{card.magic}</span>
                  </div>
                  <p className="text-xl text-black">Magia</p>
                </div>

                <div className="w-1/3 aspect-square flex flex-col justify-center items-center">
                  <div className="bg-power w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                    <span className="text-white text-4xl text-stroke-paint">{card.power}</span>
                  </div>
                  <p className="text-xl text-black">Força</p>
                </div>

                <div className="w-1/3 aspect-square flex flex-col justify-center items-center">
                  <div className="bg-fire w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                    <span className="text-white text-4xl text-stroke-paint">{card.fire}</span>
                  </div>
                  <p className="text-xl text-black">Fogo</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
