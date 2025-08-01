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
  ArrowBigRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
{/*const NavLink = ({titulo}) => (
  <LinkScroll>
  {titulo}

  </LinkScroll>
)*/}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 rounded-md  left-0 right-0 md:left-64 md:right-64 bg-secondary/30 backdrop-blur-xl z-50  ">
      <div className=" container mx-auto py-4 px-4 md:px-6">
        <div className="relative">
          {/* Logo */}
         

            
          {/* Desktop Menu */}
          <nav className="hidden lg:flex transition-colors items-center space-x-8 justify-center ">
            <Link
              to="/#home"
              className=" relative group font-medium text-blue-900 duration-500 hover:text-white "
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              Início
            </Link>
            <Link
              to="/about"
              className=" relative group font-semibold text-blue-900 duration-500 hover:text-white "
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              cursos
            </Link>
            <Link
              to="/dicas-estudo"
              className="relative group font-medium text-blue-900 duration-500 hover:text-white"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 bg-white group-hover:w-full"></span>
              Ferramentas
            </Link>

            <Link
              to="/"
              className=""
            >
              <span className=" w-6 h-6 ">
              <img src="Frame.png" 
              alt="logo" 
              className=" w-[30px] h-auto"/>
              </span>
            </Link>

            <Link
              to="/cadastro-explicadores"
              className="relative group font-medium text-blue-900 duration-500 hover:text-white"
            >
             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span> 
              Sobre
            </Link>
            <Link
              to="/cadastro-explicadores"
              className="relative group font-medium text-blue-900 duration-500 hover:text-white"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              Serviços
            </Link>

            <Link
              to="/Contact"
              className="relative group font-medium text-blue-900 duration-500 hover:text-white"
            >
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              Contacto
            </Link>


            <div className=" hidden md:flex cursor-pointer">
            <div className=" flex items-center justify-center h-10 w-10 rounded-full bg-primary  border-2  ">
              <p className=" text-white font-medium text-sm duration-500 hover:text-white ">EN</p>
            </div>
            </div>
         
          </nav>
            

          {/* Register Button (Desktop) */}

          

         
          

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between">
            <Link to="/">

            <div className="h-8 w-8">
            <img src="Frame.png" alt="logo" />
            </div>

            </Link>
          <button
            className="lg:hidden flex  text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden h-screen flex justify-center   text-center  ">
            <div className="flex flex-col  justify-center gap-8 text-3xl text-white">
              
              <Link
                to="/#home"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  const el = document.getElementById("home");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
             
                <div className="flex items-center  font-semibold ">
                  
                  INÍCIO
                </div>
              </Link>
              <Link
                to="/about"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center font-semibold  ">
                 
                 CURSOS
                </div>
              </Link>
              <Link
                to="/dicas-estudo"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center font-semibold ">
                 
                  FERRAMENTAS
                </div>
              </Link>

              <Link
                to="/dicas-estudo"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center font-semibold ">
                 
                  SERVIÇOS
                </div>
              </Link>

              <Link
                to="/dicas-estudo"
                className="font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center font-semibold ">
                
                  SOBRE
                </div>
              </Link>


              <Link
                to="/contact"
                className=" relative group font-semibold  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:min-w-full"></span>
                  
                <div className="flex items-center ">
                  Contacto
                </div>
              </Link>
              
           

              
            </div>
            
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
