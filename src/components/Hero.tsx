import AutoHeroCarousel from './AutoHeroCarousel';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Hero = () => {
  // Imagens locais (colocar na pasta public/images/hero/)
  const heroImages = [
    '/hero/Ajudar teu filho sem pressão.jpg',
    '/hero/fixar.jpg',
    '/hero/Instagram - saber se precisa de explica.jpg',
    
  ];

  return (
    <section className="relative h-screen min-h-[600px]">
      {/* Carousel de fundo */}
      <AutoHeroCarousel 
        images={heroImages}
        interval={6000}
        transitionDuration={1000}
        className="h-full"
      />
      
      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 flex items-center z-10"> 
        <div className="container mx-auto px-2  sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl bg-primary bg-opacity-50 backdrop-blur-sm p-8  rounded-xl text-white">
            <span className="inline-block px-3 py-1 bg-primary text-sm font-semibold mb-4 rounded-full">
              Promoção julho
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight  text-white mb-4">
              Aprende mais <span className="text-secondary">conectado </span>a quem sabe
            </h1>
            
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Busca dominar as matérias? Conecte-se ao seu potencial máximo
                com os nossos explicadores qualificados em Maputo e Matola.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/solicitar-explicador"> 
              <button className="bg-primary   text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 hover:bg-white hover:text-primary hover:border-primary">
              Começar Agora
              <ArrowRight className="w-5 h-5" />
              </button>
              </Link>
              
              <Link to= "/about">
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition">
                Saiba Mais
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll (opcional) */}
      <div className = "hidden md:block">
      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce ">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;