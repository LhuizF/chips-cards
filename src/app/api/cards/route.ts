import { NextResponse } from "next/server";
import { dracomaniaCards, fakeAllCArds } from "../cardsData";

export async function GET(request: Request) {

  return NextResponse.json(dracomaniaCards);
}
