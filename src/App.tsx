import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CadastroExplicadores from "./pages/CadastroExplicadores";
import SolicitarExplicador from "./pages/SolicitarExplicador";
import SolicitarPropostaEmpresas from "./pages/SolicitarPropostaEmpresas";
import DicasEstudo from "./pages/DicasEstudo";
import Exercicios from "./pages/exercicios";
import Contact from "./components/Contact";
import About from "./components/About";
import Solution from "./pages/Solution"
import ScrollToTop from "./components/ScrollToTop"; // importa aqui

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      
      <ScrollToTop /> {/* adiciona aqui */}
    

        <Routes>
          <Route path="/" 
          element={<Index />} />

          <Route path ="/contact"
          element={<Contact/>} />

          <Route path="/about"
          element={<About/>}/>
          

          <Route path="/exercicios" 
          element={<Exercicios />} />

          <Route path="/solution" 
          element={<Solution/>} />

          <Route
            path="/cadastro-explicadores"
            element={<CadastroExplicadores />}
          />
          <Route
            path="/solicitar-explicador"
            element={<SolicitarExplicador />}
          />
          <Route
            path="/solicitar-proposta-empresas"
            element={<SolicitarPropostaEmpresas />}
          />
          <Route path="/dicas-estudo" element={<DicasEstudo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
