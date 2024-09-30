"use client"
import { useEffect, useState } from 'react';

interface NasaImage {
  title: string;
  url: string;
  explanation: string;
  media_type: string;
}

const NasaImages = () => {
  const [images, setImages] = useState<NasaImage[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error('Erro ao buscar imagens');
        }
        const data: NasaImage[] = await response.json();
        setImages(data);
      } catch (error) {
        // Verificando se o erro é do tipo Error
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Erro desconhecido');
        }
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Imagens da NASA</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {images.map((image) => (
          <div key={image.title}>
            <h2>{image.title}</h2>
            {image.media_type === 'image' ? (
              <img src={image.url} alt={image.title} style={{ width: '300px' }} />
            ) : (
              <iframe src={image.url} title={image.title} width="300" height="200" />
            )}
            <p>{image.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NasaImages;
