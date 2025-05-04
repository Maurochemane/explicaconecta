import { Book, Check, FileText, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-blue-50">
      <div className="container mx-auto">
        <h2 className="section-title  text-primary">Nossos Serviços</h2>
        <p className="section-subtitle text-blue-950">
          Oferecemos uma variedade de serviços educacionais personalizados para
          atender tanto a indivíduos quanto a empresas.
        </p>

        {/* Individual Services */}
        <div id="services-individual" className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary">
            Pacotes Singulares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-secondary transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-blue-950">
                  Explicações Personalizadas
                </CardTitle>
                <CardDescription className="text-blue-950">
                  Para todas as idades e níveis acadêmicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Aulas individuais ou em grupos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Foco nas necessidades específicas do aluno
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Explicadores qualificados e experientes
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full hover:scale-90 transition-all">
                  Solicitar Explicador
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-primary transition-shadow duration-300 border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-blue-950">
                  Apoio <br />
                  em Trabalhos
                </CardTitle>
                <CardDescription className="text-blue-950">
                  Assistência em projetos acadêmicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ">
                  <li className="flex  items-start ">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Orientação em trabalhos escolares e universitários
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Revisão e feedback detalhado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Auxílio na estruturação e pesquisa
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full  hover:scale-90 transition-all">
                  Solicitar Explicador
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-secondary transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <File className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-blue-950">
                  Preparação <br />
                  para Exames
                </CardTitle>
                <CardDescription className="text-blue-950">
                  Estratégias para sucesso nas avaliações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Revisão completa do conteúdo
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Técnicas de estudo e memorização
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Simulações de exames e controle de tempo
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full hover:scale-90 transition-all ">
                  Solicitar Explicador
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Business Services */}
        <div id="services-business">
          <h3 className="text-2xl font-bold mb-8 text-primary">
            Pacotes Empresariais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-primary transition-shadow duration-300 border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-950">Formação em TI</CardTitle>
                <CardDescription className="text-blue-950">
                  Capacitação em ferramentas digitais para equipes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Excel, Word, Power point e Primavera do básico ao avançado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Criação e gestão de dashboards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Análise de dados e reporting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Otimização de processos com ferramentas digitais
                    </span>
                  </li>
                </ul>
              </CardContent>
              <Link to="/Solicitar-Proposta-Empresas">
                <CardFooter>
                  <Button className="w-full hover:scale-90 transition-all">
                    Solicitar Proposta
                  </Button>
                </CardFooter>
              </Link>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-secondary transition-shadow duration-300 border-t-4 border-t-secondary">
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-950">
                  Programas de Desenvolvimento
                </CardTitle>
                <CardDescription className="text-blue-950 ">
                  Formação contínua para colaboradores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Programas personalizados para cada empresa
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Formação regular ou intensiva
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Acompanhamento de progresso com relatórios
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-blue-950 text-sm">
                      Flexibilidade de horários e locais de formação
                    </span>
                  </li>
                </ul>
              </CardContent>
              <Link to="/Solicitar-Proposta-Empresas">
                <CardFooter>
                  <Button className="w-full hover:scale-90 transition-all">
                    Solicitar Proposta
                  </Button>
                </CardFooter>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
