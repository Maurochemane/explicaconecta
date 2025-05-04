import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/20 rounded-full text-primary font-medium text-sm mb-6">
                <span className="animate-pulse mr-2 ">●</span> Promoção Especial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950 ">
                Primeira Aula com{" "}
                <span className="text-primary">Desconto de 50%</span>
              </h2>
              <p className="text-blue-950 mb-8">
                Inicie hoje sua jornada de aprendizado com a Explica Conecta e
                ganhe 50% de desconto na sua primeira aula. Aproveite esta
                oportunidade para conhecer nossos explicadores qualificados.
              </p>
              <div className="flex gap-4">
                <Link to="/solicitar-explicador">
                  <Button className="btn-primary flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Agendar Aula com Desconto
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-blue-950">
                Promoção válida para novos alunos. Sujeita a disponibilidade.
              </p>
            </div>
            <div className="md:w-1/2 bg-primary/10 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/50 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative z-10 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-primary">50%</div>
                  <div className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-primary">
                    DESCONTO
                  </div>
                </div>
                <div className="h-0.5 bg-gray-100 mb-4"></div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Explicador personalizado
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Material de estudo exclusivo
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Avaliação de nível gratuita
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
