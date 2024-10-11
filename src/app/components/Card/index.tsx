import Image from "next/image";
import { ICard } from "@/app/api/cardsData";
import './styles.css';
import { Link } from 'next-view-transitions';

export const Card: React.FC<ICard> = ({ id, name, magic, power, fire, collection }) => {

  return (
    <Link href={`/card/${collection}/${id}`} style={{
      viewTransitionName: `demo-${id}`,
    }}>
      <div className="relative w-[160px] h-[230px] p-2 font-exocet-heavy select-none" key={id} id={`card-${id}`}>
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
    </Link>
  );
};

function myTransition(id: number) {
  const element = document.getElementById(`card-${id}`); // Selecione o elemento que deseja animar

  if (!element) return;

  // Pegamos a posição atual do elemento
  const rect = element.getBoundingClientRect();

  // Calculamos a translação necessária para mover o elemento para o centro da tela
  const translateX = window.innerWidth / 2 - rect.left - rect.width / 2;
  const translateY = window.innerHeight / 2 - rect.top - rect.height / 2;

  // Aplicamos a animação para movê-lo ao centro
  const animation = element.animate(
    [
      {
        transform: `translate(0, 0) scale(1)`, // Posição e tamanho iniciais
        opacity: 1,
      },
      {
        transform: `translate(${translateX}px, ${translateY}px) scale(1.5)`, // Movendo para o centro com zoom
        opacity: 1,
      }
    ],
    {
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // Esperar a animação terminar antes de concluir a transição
  animation.onfinish = () => {
    // Aqui você pode resolver a transição ou continuar o fluxo
    console.log("Transição concluída");
  };
}
