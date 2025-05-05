import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after component mounts to trigger animations
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className=" bg-blue-50 pt-28 pb-16 md:pt-32 md:pb-24 px-4 md:px-8 lg:px-16 xl:px-24   max-w-xs:bg-gradient-to-br from-white to-blue-80"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="space-y-6">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight transition-all duration-700 transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                Aprende mais, <br />
                <span className="text-primary">conectado a quem sabe.</span>
              </h1>
              <p
                className={`text-lg md:text-xl mb-8 text-blue-950 max-w-md transition-all duration-700 delay-300 transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Busca dominar as matérias? Conecte-se ao seu potencial máximo
                com os nossos explicadores qualificados em Maputo e Matola.
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {/*<Button className="btn-primary flex items-center gap-2">
                  Começa Agora
                  <ArrowRight className="h-4 w-4" />
                </Button>*/}
                <Button className="btn-secondary">
                  Encontre um Explicador
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`lg:w-1/2 transition-all duration-1000 delay-700 transform ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: "3ms" }}
          >
            <div className="relative">
              <div
                className={`absolute -top-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl transition-all duration-1000 delay-1000 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              ></div>
              <div
                className={`absolute -bottom-8 -left-8 w-64 h-90 bg-primary/20 rounded-full blur-3xl transition-all duration-1000 delay-1000 ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              ></div>
              <div className="relative bg-gray-50 p-4 rounded-md shadow-lg border border-gray-100 overflow-hidden">
                <img
                  src="/public/ft.jpg"
                  alt="Estudante aprendendo online"
                  className="w-full h-auto rounded-md object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/70 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Aprenda com os melhores explicadores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
