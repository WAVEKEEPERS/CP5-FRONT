import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const retorno = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=SNGJ5ksL523nY4Fcrp1ohQss7khXfLcQhdD7WgFa&count=5`
  );

  const images = await retorno.json();

  return NextResponse.json(images);
}
