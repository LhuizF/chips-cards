import { ICard } from "@/app/api/cardsData";
import Tilt from "react-parallax-tilt";
import Image from "next/image";



export const Card: React.FC<ICard> = ({ id, name, magic, power, fire }) => {

  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="#fff" glarePosition="bottom" glareBorderRadius="20px" >
      <div className="relative w-[464px] h-[667px] p-7 font-exocet-heavy select-none">

        {/* layout da card */}
        <img
          src="/images/layout.png"
          className="w-full h-full absolute top-0 left-0 z-10 rounded-2xl"
          alt="card-layout"
        />

        {/* conteúdo da card */}
        <div className="relative top-0 flex flex-col h-full w-full">

          <div className="bg-card-header bg-contain bg-top bg-no-repeat w-full z-10 h-[158px] relative -top-4 left-7 inner-element">
            <div className="absolute top-6 right-14 flex justify-center w-4">
              <span className="text-white text-stroke-paint text-[40px]">{id}</span>
            </div>
            <div className="absolute top-6 w-full text-end right-32">
              <span className="text-white text-stroke-paint text-xl">{name}</span>
            </div>
          </div>

          <div className="absolute top-0 w-full">
            <Image
              className="w-full"
              src={`/images/cards/${id}.png`}
              alt={name}
              width={250}
              height={250}
            />

            <div className="flex-grow w-full">
              <div className="w-full box-border flex h-full justify-evenly py-4 px-6 bg-card-texture">
                <div className="w-1/3 aspect-square flex flex-col justify-center items-center">
                  <div className="bg-magic w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                    <span className="text-white text-4xl text-stroke-paint">{magic}</span>
                  </div>
                  <p className="text-xl text-black">Magia</p>
                </div>

                <div className="w-1/3 aspect-square flex flex-col justify-center items-center">
                  <div className="bg-power w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                    <span className="text-white text-4xl text-stroke-paint">{power}</span>
                  </div>
                  <p className="text-xl text-black">Força</p>
                </div>

                <div className="w-1/3 aspect-square flex flex-col justify-center items-center">
                  <div className="bg-fire w-full h-full bg-center bg-contain bg-no-repeat flex flex-col items-center justify-center">
                    <span className="text-white text-4xl text-stroke-paint">{fire}</span>
                  </div>
                  <p className="text-xl text-black">Fogo</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
