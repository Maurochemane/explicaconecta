
import { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Aluna do 12º ano",
    content: "As explicações da Explica Conecta ajudaram-me a melhorar minhas notas em Matemática de 12 para 18 valores em apenas dois meses. Meu explicador adaptou o método de ensino ao meu estilo de aprendizagem.",
    image: null,
  },
  {
    id: 2,
    name: "Miguel Santos",
    role: "Pai de aluno",
    content: "Meu filho sempre teve dificuldades em Física. Depois de começar com um explicador da Explica Conecta, ele não só melhorou as notas, mas também desenvolveu um interesse genuíno pela matéria.",
    image: null,
  },
  {
    id: 3,
    name: "Empresa Solutions, Lda",
    role: "Cliente Empresarial",
    content: "Contratamos a Explica Conecta para melhorar as habilidades de Excel da nossa equipe. O treinamento foi prático e personalizado. Notamos uma melhoria imediata na produtividade.",
    image: null,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto">
        <h2 className="section-title">O Que Dizem Nossos Clientes</h2>
        
        <div className="relative max-w-4xl mx-auto mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                {testimonials[currentIndex].image ? (
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <User className="w-10 h-10 text-gray-400" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="font-medium">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-gray-500">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === index ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
