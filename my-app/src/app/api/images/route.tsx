import type { NextApiRequest, NextApiResponse } from 'next';

interface NasaImage {
  title: string;
  url: string;
  explanation: string;
  media_type: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<NasaImage[] | { message: string }>) => {
  // Verifica se o método é GET
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Método ${req.method} não permitido`);
  }

  try {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=2T033JR8Pz0ggh6Qz0mq116aawZ3bPEavsK4NIgq&count=5');
    if (!response.ok) {
      throw new Error('Erro ao buscar imagens da NASA');
    }
    const data: NasaImage[] = await response.json();

    // Retorna a lista de imagens
    return res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao buscar imagens da NASA:', error);
    return res.status(500).json({ message: 'Erro ao buscar imagens' });
  }
};

