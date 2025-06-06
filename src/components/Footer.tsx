import { Book, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mx-auto">
      <div
        className="container mx-auto px-4 md:px-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12  ">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl text-primary font-bold">
                explica.<span className="text-secondary">Conecta</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Centro de explicações ao domicílio em Maputo e Matola, dedicado a
              conectar alunos e empresas com os melhores explicadores.
            </p>
          </div>

          {/* Quick Links 
          /*
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 br-2 decoration-solid max-sm:flex justify-center items-center gap-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-secondary flex items-center "
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
          </div>*/}

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
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
            <h3 className="text-white font-semibold mb-4">Contacte-nos</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="font-medium w-24">WhatsApp:</span>
                <span>+258 834220281</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24 overflow-x-auto">Email:</span>
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
          <div className="mt-4 flex flex-col sm:flex-row justify-center sm:space-x-6">
          
            <a href="#" className="hover:text-secondary">
              Termos de Uso e Política de Privacidade
            </a>
          <p>
            &copy; {currentYear} Explica Conecta. Todos os direitos reservados.
          </p>
            <p className="mt-2 sm:mt-0 hover:text-secondary">
            
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
