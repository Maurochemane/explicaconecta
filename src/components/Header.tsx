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
  NotebookPen,
  Search,
  EllipsisVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-50 shadow-xl z-50">
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
              to="/about"
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
              to="/Contact"
              className="relative group font-medium text-blue-900"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              Contacto
            </Link>


            <Link
              to="/cadastro-explicadores"
              className="relative group font-medium text-blue-900"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              Explicador
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
              <EllipsisVertical className="h-6 w-6" />
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
                to="/about"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Info className="mr-2 h-4 w-4" />
                  Sobre
                </div>
              </Link>
              <Link
                to="/dicas-estudo"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Book className="mr-2 h-4 w-4" />
                  Dicas
                </div>
              </Link>
              <Link
                to="/contact"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contacto
                </div>
              </Link>

              <Link
                to="/exercicios"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <NotebookPen className="mr-2 h-4 w-4" />
                  Trabalhos de casa
                </div>
              </Link>

              <Link
                to="/cadastro-explicadores"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Cadastrar-se como explicador
                </div>
              </Link>

              <Link
                to="/solicitar-explicador"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="md: text-secondary w-full flex items-center justify-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Inscreva-se
                </Button>
              </Link>

              
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
