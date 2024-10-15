import { ICard } from "@/app/cardsData";

export const CardBattle: React.FC<ICard> = ({ id, name, magic, power, fire, collection }) => {
  return (
    <div
      id={`card-battle-${id}`}
      key={id}
      className="relative w-[130px] h-[186px] font-exocet-heavy select-none drop-shadow-card">

      <div className=" absolute bg-card-layout bg-full bg-no-repeat w-full h-full rounded" />

      <div className="absolute w-full p-1 flex justify-end">
        <div className="bg-card-header bg-contain bg-no-repeat w-[98px] h-10 flex justify-end pr-3" >
          <div className="absolute right-2 top-[10px] w-4 h-4 flex items-center justify-center">
            <div className="text-[12px] text-border ">{id}</div>
          </div>
          <div className="absolute top-[10px] right-6 w-20 text-center">
            <div className="text-[6px] text-border">{name}</div>
          </div>
        </div>

      </div>


      {/* conteúdo */}
      <div className="px-2 py-[5px]">
        <div>
          <img
            src={`/images/cards/${id}.png`}
            className="w-full h-full object-cover"
            alt={name}
          />

        </div>

        <div
          className="w-full box-border flex justify-evenly items-center bg-card-texture bg-cover p-2"
          style={{
            boxShadow: 'inset 0px 4px 10px 1px rgb(77, 64, 14)',
            borderTop: '2px solid rgb(143, 121, 61)',
          }}
        >

          <div className="w-1/4">
            <div className="bg-magic aspect-square bg-center bg-contain bg-no-repeat flex items-center justify-center">
              <div className="text-[10px] text-border">{magic}</div>
            </div>
            <div className="text-[6px] text-center text-icon">magia</div>
          </div>

          <div className="w-1/4">
            <div className="bg-power w-full aspect-square bg-center bg-contain bg-no-repeat flex items-center justify-center">
              <div className="text-[12px] text-border">{power}</div>
            </div>
            <div className="text-[6px] text-center text-icon">força</div>
          </div>

          <div className="w-1/4">
            <div className="bg-fire w-full aspect-square bg-center bg-contain bg-no-repeat flex items-center justify-center">
              <div className="text-[12px] text-border">{fire}</div>
            </div>
            <div className="text-[6px] text-center text-icon">fogo</div>
          </div>
        </div>
      </div>
    </div>
  );
};
