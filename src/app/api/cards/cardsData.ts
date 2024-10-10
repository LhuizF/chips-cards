type Collection = 'dracomania' | 'mythomania';

export interface Card {
  id: number;
  name: string;
  magic: number;
  power: number;
  fire: number;
  collection: Collection;
}

export const dracomaniaCards: Card[] = [
  {
    id: 1,
    name: 'Dragão Mestre',
    magic: 22,
    power: 26,
    fire: 39,
    collection: 'dracomania'
  },
  {
    id: 2,
    name: 'Dragão Dourado',
    magic: 16,
    power: 24,
    fire: 28,
    collection: 'dracomania'
  },
  {
    id: 3,
    name: 'Dragão Prateado',
    magic: 15,
    power: 21,
    fire: 27,
    collection: 'dracomania'
  },
  {
    id: 4,
    name: 'Dragão Bronze',
    magic: 14,
    power: 20,
    fire: 26,
    collection: 'dracomania'
  },
  {
    id: 5,
    name: 'Dragão Cobre',
    magic: 13,
    power: 19,
    fire: 25,
    collection: 'dracomania'
  },
  {
    id: 6,
    name: 'Dragão Branco',
    magic: 21,
    power: 15,
    fire: 22,
    collection: 'dracomania'
  },
  {
    id: 7,
    name: 'Dragão Negro',
    magic: 19,
    power: 17,
    fire: 24,
    collection: 'dracomania'
  },
  {
    id: 8,
    name: 'Dragão Vermelho',
    magic: 20,
    power: 16,
    fire: 23,
    collection: 'dracomania'
  },
  {
    id: 9,
    name: 'Dragão Azul',
    magic: 18,
    power: 13,
    fire: 21,
    collection: 'dracomania'
  },
  {
    id: 10,
    name: 'Dragão Verde',
    magic: 17,
    power: 14,
    fire: 20,
    collection: 'dracomania'
  },
];
