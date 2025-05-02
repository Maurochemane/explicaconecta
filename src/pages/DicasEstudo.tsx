import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book, BookOpen, Clock, ListCheck, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DicasEstudo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const dicasCards = [
    {
      title: "Método Pomodoro",
      description:
        "Estude por 25 minutos seguidos e faça pausas de 5 minutos. A cada 4 ciclos, faça uma pausa maior de 15-30 minutos.",
      icon: <Clock className="h-8 w-8 text-primary" />,
    },
    {
      title: "Técnica Feynman",
      description:
        "Explique o que está estudando de forma simples, como se estivesse ensinando a um criança. Isso ajuda a identificar lacunas no seu conhecimento.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Revisão Espaçada",
      description:
        "Revise o conteúdo em intervalos crescentes: 1 dia depois, 3 dias depois, 1 semana depois e 2 semanas depois.",
      icon: <Book className="h-8 w-8 text-primary" />,
    },
    {
      title: "Mapas Mentais",
      description:
        "Crie mapas visuais conectando conceitos relacionados para melhorar a compreensão e memorização de temas complexos.",
      icon: <PenLine className="h-8 w-8 text-primary" />,
    },
    {
      title: "Método SQ3R",
      description:
        "Survey (visualize), Question (questione), Read (leia), Recite (recite) e Review (revise) para maior absorção do conteúdo.",
      icon: <ListCheck className="h-8 w-8 text-primary" />,
    },
    {
      title: "Ensine a Alguém",
      description:
        "Depois de estudar algo, tente explicar para outra pessoa. Isso consolida o conhecimento e revela o que você ainda precisa aprender.",
      icon: <Book className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1
                className={`text-3xl font-bold text-primary mb-4 transition-all duration-700 transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                Dicas de Estudo
              </h1>
              <p
                className={`text-gray-600 md:text-lg max-w-3xl mx-auto transition-all duration-700 delay-300 transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Descubra métodos eficazes para otimizar seus estudos, melhorar a
                concentração e maximizar a absorção de conhecimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dicasCards.map((card, index) => (
                <Card
                  key={index}
                  className={`shadow-md hover:shadow-lg  border-gray-100 hover:border-secondary/50 transition-all duration-700 transform ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-primary">
                        {card.title}
                      </CardTitle>
                      {card.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div
              className={`mt-16 text-center transition-all duration-700 delay-1000 transform ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-gray-600 mb-6">
                Quer melhorar ainda mais seus estudos?
              </p>
              <Link to="/solicitar-explicador">
                <Button className="btn-primary">Solicitar um Explicador</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DicasEstudo;
