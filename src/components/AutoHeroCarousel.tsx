import { useState, useEffect, useRef } from 'react';

interface AutoHeroCarouselProps {
  images: string[]; // Caminhos das imagens locais
  interval?: number;
  transitionDuration?: number;
  className?: string;
}

const AutoHeroCarousel = ({
  images,
  interval = 5000,
  transitionDuration = 800,
  className = ''
}: AutoHeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Avança para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Pré-carrega as imagens
  useEffect(() => {
    let loadedCount = 0;
    
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setIsLoaded(true);
      }
    };

    images.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Considera carregado mesmo com erro
    });
  }, [images]);

  // Configura o intervalo automático
  useEffect(() => {
    if (!isLoaded) return;

    timerRef.current = setInterval(nextSlide, interval);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images.length, interval, isLoaded]);

  // Pausa no hover
  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isLoaded) {
      timerRef.current = setInterval(nextSlide, interval);
    }
  };

  if (!isLoaded) {
    return (
      <div className={`w-full h-screen bg-gray-200 animate-pulse ${className}`}>
        {/* Placeholder enquanto carrega */}
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full h-screen overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={image} // Usando o caminho da imagem como key
            className={`absolute inset-0 w-full h-full transition-opacity duration-${transitionDuration}`}
            style={{ 
              opacity: currentIndex === index ? 1 : 0,
              transitionDuration: `${transitionDuration}ms`
            }}
          >
            <img
              src={image}
              alt={`Hero image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay escuro para melhor legibilidade do texto */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoHeroCarousel;