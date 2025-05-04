import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Book,
  ChevronDown,
  Home,
  Info,
  Mail,
  Menu,
  X,
  UserPlus,
  Briefcase,
  GraduationCap,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/#index" className="text-xl font-bold text-primary">
              explica.
              <span className="text-secondary font-medium">Conecta</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/#home"
              className=" relative group font-medium text-blue-900"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              Início
            </Link>
            <Link
              to="/#about"
              className=" relative group font-medium text-blue-900"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              Sobre
            </Link>
            <Link
              to="/dicas-estudo"
              className="relative group font-medium text-blue-900"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              Dicas
            </Link>
            <Link
              to="/#Contact"
              className="relative group font-medium text-blue-900"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              Contacto
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className=" relative group font-medium text-blue-900 flex items-center"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                Serviços <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-20">
                  <Link
                    to="/#services-individual"
                    className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                    <span>Pacotes Singulares</span>
                  </Link>
                  <Link
                    to="/#services-business"
                    className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <Briefcase className="h-4 w-4 mr-2 text-primary" />
                    <span>Pacotes Empresas</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/cadastro-explicadores"
              className="relative group font-medium text-blue-900"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              Área de Explicador
            </Link>
          </nav>

          {/* Register Button (Desktop) */}
          <Link to="/solicitar-explicador" className="hidden lg:flex">
            <Button className="btn-primary flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Inscreva-se
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/#home"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  const el = document.getElementById("home");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Início
                </div>
              </Link>
              <Link
                to="/#about"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Info className="mr-2 h-4 w-4" />
                  Sobre
                </div>
              </Link>
              <Link
                to="/#tips"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Book className="mr-2 h-4 w-4" />
                  Dicas
                </div>
              </Link>
              <Link
                to="/#contact"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contacto
                </div>
              </Link>

              {/* Services Dropdown (Mobile) */}
              <div>
                <button
                  className="flex items-center w-full text-left font-medium hover:text-primary transition-colors"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Serviços <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {servicesDropdownOpen && (
                  <div className="mt-2 ml-6 flex flex-col space-y-2">
                    <Link
                      to="/#services-individual"
                      className="flex items-center font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                      <span>Pacotes Singulares</span>
                    </Link>
                    <Link
                      to="/#services-business"
                      className="flex items-center font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                      <span>Pacotes Empresas</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/cadastro-explicadores"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Área de Explicador
                </div>
              </Link>

              <Link
                to="/solicitar-explicador"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="text-secondary w-full flex items-center justify-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Inscreva-se
                </Button>
              </Link>

              <div className="pt-2 border-t border-gray-100">
                <Link
                  to="/solicitar-explicador"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full mb-2 flex items-center justify-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Solicitar Explicador
                  </Button>
                </Link>
                <Link
                  to="/solicitar-proposta-empresas"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Briefcase className="h-4 w-4" />
                    Proposta para Empresas
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
