import AutoHeroCarousel from "./AutoHeroCarousel";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <section className=" relative h-screen min-h-[600px] bg-gradient-to-b from-[#06FDE9] to-[#0079E7] ">
      <div className="flex justify-center items-center h-[100%]  flex-col gap-3 px-4 text-center">
        <h1 className=" text-5xl ">
          Aprende mais
          <br />
          <span className="text-white">conectado </span>a quem sabe
        </h1>
        <p className="text-white ">
          Conectamos voce aos melhores cenros de ensino presencial do pais,
          agora
          <br />
          tambem com cursos online seguros e inovadores. Tudo na explicaconecta.{" "}
        </p>
          {/* Button ...Mc.... */}
        <Link to="/cadastro-explicadores">
        <div className=" 
        mt-10 flex shadow-lg shadow-sec animate-shadow-glow justify-center items-center border-2 border-solid border-white rounded-[30px] w-[207px] h-[62px]  hover:outline hover:outline-2 hover:outline-white hover:outline-offset-4 transition-all duration-700">
          
          <button className="text-blue-600 bg-white rounded-[30px] w-[199px] h-[54px] z-10">
            inscreva-se
          </button>
        </div>
        </Link>
      </div>


      {/* Indicador de scroll*/}
      <div className="hidden md:block">
        <div className=" absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 animate-bounce ">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
      </div>

        {/*imagem vectorizada*/}
      <img src="./hero/vector.png" alt="vetor bg" 
      className="absolute bottom-0 left-1/2 transform -translate-x-1/4 mix-blend-overlay opacity-30 "
      />
      
      <img src="./hero/vector.png" alt="vetor bg" 
      className="absolute bottom-0 left-1/4 transform -translate-x-1/2 mix-blend-overlay opacity-30 "
      />

      

    </section>
  );
};

export default Hero;
