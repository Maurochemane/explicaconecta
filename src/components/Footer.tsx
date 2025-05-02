import { Book, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div
        className="container mx-auto px-4 md:px-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-secondary mr-2" />
              <span className="text-xl font-bold">Explica Conecta</span>
            </div>
            <p className="text-gray-400 mb-6">
              Centro de explicações a domicílio em Maputo e Matola, dedicado a
              conectar alunos e empresas com os melhores explicadores.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-secondary flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-secondary flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Sobre
                </a>
              </li>
              <li>
                <Link
                  to="/dicas-estudo"
                  className="text-gray-400 hover:text-secondary flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Dicas
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-secondary flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services-individual"
                  className="text-gray-400 hover:text-secondary flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Explicações Personalizadas
                </a>
              </li>
              <li>
                <a
                  href="#services-individual"
                  className="text-gray-400 hover:text-secondary flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Apoio em Trabalhos
                </a>
              </li>
              <li>
                <a
                  href="#services-individual"
                  className="text-gray-400 hover:text-secondary flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Preparação para Exames
                </a>
              </li>
              <li>
                <a
                  href="#services-business"
                  className="text-gray-400 hover:text-secondary flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Formação Empresarial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacte-nos</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="font-medium w-24">WhatsApp:</span>
                <span>+258 865968106</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Email:</span>
                <a
                  href="mailto:info@explicaconecta.com"
                  className="hover:text-secondary"
                >
                  info@explicaconecta.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Telefone:</span>
                <span>+258 849646536</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Cidade:</span>
                <span>Maputo, Moçambique</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Explica Conecta. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center sm:space-x-6">
            <a href="#" className="hover:text-secondary">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-secondary">
              Política de Privacidade
            </a>
            <p className="mt-2 sm:mt-0 hover:text-secondary">
              Criado por: Mauro Chemane
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
