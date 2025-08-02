import { useState, useEffect } from "react";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect'

const Hero = () => {

   const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      setIsLoaded(true);
    }, []);
  
  return (

    <section className= {`relative h-screen min-h-[600px] bg-gradient-to-b from-[#06FDE9] to-[#0079E7] 
    {transition-all duration-700 transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}>
      
      <div className="flex justify-center items-center h-[100%]  flex-col gap-4 px-6 text-left md:text-center ">
        <h1 className="text-left text-5xl md:text-6xl text-primary  font-bold pt-32">
          Nos <span className="text-white">Conectamos</span>{''}
          <span className="font-normal">
            <Typewriter
            options={{
              strings:['soluções','experiências','resultados',],
              autoStart:true,
              loop:true,
            }}/>
          </span>
        </h1>
        <p className=" text-2xl font-semibold md:text-2xl  text-primary  animate-fade-in transition-all duration-700 delay-1000 pt-10">
          Aprende mais
      
          <span className="text-white"> conectado </span>a quem sabe
        </p>
        <p className="text-white animate-fade-in pb-10">
          Conectamos você aos melhores centros de ensino presencial do pais,
          agora
          <br />
          tambem com cursos online seguros e inovadores. Tudo na explicaconecta.{" "}
        </p>



          {/* Button ...Mc.... */}
          <div className="flex  md:gap-36 items-center"> 
        <Link to="/cadastro-explicadores">
        <div className=" 
         flex shadow-lg shadow-sec animate-shadow-glow justify-center items-center border-2 border-solid border-white rounded-[30px] w-[207px] h-[62px]  outline-[#0effdf] hover:outline-none  hover:outline-[#41ffd6] hover:outline-offset-4 transition-all duration-700 ">
          
          <button className="text-blue-600 bg-white rounded-[30px] w-[199px] h-[54px] z-10">
            inscreva-se
          </button>
        </div>
        </Link>

         {/* Button ...Mc.... */}
        <Link to="/about">
        <div className=" 
         flex shadow-lg shadow-sec animate-shadow-glow justify-center items-center border-2 border-solid border-white rounded-[30px] w-[107px] h-[62px]  outline-[#0effdf] hover:outline-none  hover:outline-[#41ffd6] hover:outline-offset-4 transition-all duration-700 ">
          
          <button className="text-white bg-primary rounded-[30px] w-[100px] h-[54px] z-10">
            saiba mais
          </button>
        </div>
        </Link>
      </div>
      </div>


      {/* Indicador de scroll*/}
      <div className="hidden md:block">
        <div className=" absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 animate-bounce ">
          <div className="w-5 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-1 h-2 bg-secondary mt-2 rounded-full"></div>
          </div>
        </div>
      </div>

        {/*imagem vectorizada*/}
      <img src="./hero/vector.png" alt="vetor bg" 
      className="absolute bottom-0 left-1/2 transform -translate-x-1/4 mix-blend-overlay opacity-30 animate-slide-in ease-in-out delay-1000"
      />
      
      <img src="./hero/vector.png" alt="vetor bg" 
      className="absolute bottom-0 left-1/4 transform -translate-x-1/2 mix-blend-overlay opacity-30 "
      />

      
    </section>
  );
};


export default Hero;
