import { NextResponse } from "next/server";
import { dracomaniaCards } from '@/app/api/cardsData';

export async function GET(request: Request, { params }: { params: { id: string; }; }) {
  const card = dracomaniaCards.find(card => card.id === Number(params.id));

  return NextResponse.json(card);
}
