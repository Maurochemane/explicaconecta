
import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Entre em Contacto",
    description: "Preencha o formulário ou ligue para nós para discutir suas necessidades de aprendizagem.",
  },
  {
    id: 2,
    title: "Análise de Necessidades",
    description: "Avaliamos o nível atual e os objetivos para personalizar a experiência de aprendizagem.",
  },
  {
    id: 3,
    title: "Seleção do Explicador",
    description: "Combinamos você com o explicador mais adequado para suas necessidades específicas.",
  },
  {
    id: 4,
    title: "Início das Sessões",
    description: "Começamos as explicações no conforto de sua casa ou em nosso centro, conforme preferir.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Como Funciona</h2>
        <p className="section-subtitle">
          Nosso processo é simples e eficiente para garantir que você comece a aprender rapidamente.
        </p>

        <div className="relative mt-16">
          {/* Connection Line */}
          <div className="absolute top-12 left-4 right-4 h-0.5 bg-gray-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl z-10">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-center">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                  
                  {step.id === 4 && (
                    <div className="mt-6 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-500 mr-2" />
                      <span className="font-medium text-green-600">Comece a Aprender!</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
