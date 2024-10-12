import { NextResponse } from "next/server";
import { dracomaniaCards } from "../cardsData";

export async function GET(request: Request) {

  return NextResponse.json(dracomaniaCards);
}
