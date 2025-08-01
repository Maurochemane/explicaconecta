import AutoHeroCarousel from './AutoHeroCarousel';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Hero = () => {
  
  return (
    <section className=" relative h-screen min-h-[600px] bg-gradient-to-b from-secondary to-primary">
      
      {/* Conteúdo sobreposto */}
     
      
      {/* Indicador de scroll (opcional) */}
      <div className = "hidden md:block">
      <div className=" absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 animate-bounce ">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;