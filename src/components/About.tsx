import { Check } from "lucide-react";
import Header from "./Header";


const About = () => {
  return (
    <section id="about" className="section-padding bg-white ">
      <Header/>
      <div className="container mt-10">
        <h2 className="section-title text-primary">Sobre a Explica Conecta</h2>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-12">
          <div className="lg:w-1/2">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4  text-blue-950">
                Nossa História
              </h3>
              <p className="mb-6 text-blue-950">
                A Explica Conecta nasceu da paixão por educar e da percepção da
                necessidade de um serviço de explicações personalizado em Maputo
                e Matola. Nosso objetivo é conectar estudantes com os melhores
                explicadores, para suprir a necessidade específica do aluno,
                criando uma experiência de aprendizagem adaptada a cada aluno.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-950">
                Missão, Visão e Valores
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary">Missão</h4>
                  <p className="text-blue-950">
                    Facilitar o acesso à educação de qualidade através de
                    explicações personalizadas que atendam às necessidades
                    específicas de cada aluno e empresa.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary">Visão</h4>
                  <p className="text-blue-950">
                    Ser a principal referência em explicações e formação
                    personalizada em Moçambique, transformando o potencial
                    educativo de indivíduos e organizações.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary">
                    Valores
                  </h4>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start">
                      <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-blue-950">
                        Excelência na educação e no serviço ao cliente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-blue-950">
                        Personalização e adaptabilidade às necessidades do aluno
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-blue-950">
                        Inovação constante nas metodologias de ensino
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-blue-950">
                        Compromisso com resultados mensuráveis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-blue-950">
                        Integridade e responsabilidade em todas as interações
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-secondary/30 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-primary/20 rounded-full"></div>
              <img
                src="exp2.jpg"
                alt="Explica Conecta - Educação personalizada"
                className="w-full h-auto rounded-2xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default About;
