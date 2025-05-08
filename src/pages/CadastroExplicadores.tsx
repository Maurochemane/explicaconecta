
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Book, Clock, GraduationCap, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CadastroExplicadores = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
    niveis: [] as string[],
    disponibilidade: "",
    experiencia: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          niveis: [...prev.niveis, value]
        };
      } else {
        return {
          ...prev,
          niveis: prev.niveis.filter(nivel => nivel !== value)
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    
    // Form validation
    if (!formData.nome || !formData.email || !formData.telefone || !formData.area || formData.niveis.length === 0) {
      toast({
        title: "Formulário incompleto",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form (would connect to backend in production)
    /*console.log("Form submitted:", formData);
    
    toast({
      title: "Cadastro enviado com sucesso!",
      description: "Entraremos em contato em breve para continuar o processo.",
    });*/
    try {
      const res = await fetch("https://explicaconectaback-end.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
    
      if (!res.ok) {
        throw new Error("Erro ao enviar dados");
      }
    
      toast({
        title: "Cadastro enviado com sucesso!",
        description: "Entraremos em contato em breve para continuar o processo.",
      });
    
      // Limpar o formulário após o envio
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        area: "",
        niveis: [],
        disponibilidade: "",
        experiencia: ""
      });
    
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro ao enviar o cadastro",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
    }
    
    
    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      area: "",
      niveis: [],
      disponibilidade: "",
      experiencia: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-primary mb-6">Cadastro de Explicadores</h1>
              <p className="text-gray-600 mb-4">
                Junte-se à nossa equipa de explicadores qualificados <br />e ajude estudantes a alcançarem o seu potencial máximo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="form-group">
                    <label htmlFor="nome" className="form-label flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      Nome Completo*
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefone" className="form-label">Telefone*</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="area" className="form-label flex items-center">
                      <Book className="w-4 h-4 mr-2 text-primary" />
                      Área de Especialização*
                    </label>
                    <select
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Selecione sua especialidade</option>
                      <option value="matematica">Matemática</option>
                      <option value="portugues">Português</option>
                      <option value="fisica">Física</option>
                      <option value="quimica">Química</option>
                      <option value="biologia">Biologia</option>
                      <option value="historia">História</option>
                      <option value="geografia">Geografia</option>
                      <option value="ingles">Inglês</option>
                      <option value="tecnologias">Tecnologias</option>
                      <option value="outro">Outra</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                      Nível(s) de Ensino*
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="primario"
                          name="niveis"
                          value="primario"
                          checked={formData.niveis.includes("primario")}
                          onChange={handleCheckboxChange}
                          className="form-checkbox"
                        />
                        <label htmlFor="primario" className="ml-2 text-sm text-gray-700">Primário</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="secundario"
                          name="niveis"
                          value="secundario"
                          checked={formData.niveis.includes("secundario")}
                          onChange={handleCheckboxChange}
                          className="form-checkbox"
                        />
                        <label htmlFor="secundario" className="ml-2 text-sm text-gray-700">Secundário</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="preuniversitario"
                          name="niveis"
                          value="preuniversitario"
                          checked={formData.niveis.includes("preuniversitario")}
                          onChange={handleCheckboxChange}
                          className="form-checkbox"
                        />
                        <label htmlFor="preuniversitario" className="ml-2 text-sm text-gray-700">Pré-universitário</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="universitario"
                          name="niveis"
                          value="universitario"
                          checked={formData.niveis.includes("universitario")}
                          onChange={handleCheckboxChange}
                          className="form-checkbox"
                        />
                        <label htmlFor="universitario" className="ml-2 text-sm text-gray-700">Universitário</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="profissional"
                          name="niveis"
                          value="profissional"
                          checked={formData.niveis.includes("profissional")}
                          onChange={handleCheckboxChange}
                          className="form-checkbox"
                        />
                        <label htmlFor="profissional" className="ml-2 text-sm text-gray-700">Profissional</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="disponibilidade" className="form-label flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      Disponibilidade Horária
                    </label>
                    <input
                      type="text"
                      id="disponibilidade"
                      name="disponibilidade"
                      value={formData.disponibilidade}
                      onChange={handleChange}
                      placeholder="Ex: Segundas e Quartas, 15h às 19h"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="experiencia" className="form-label flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-primary" />
                      Experiência e Certificações
                    </label>
                    <textarea
                      id="experiencia"
                      name="experiencia"
                      value={formData.experiencia}
                      onChange={handleChange}
                      rows={5}
                      className="form-input"
                      placeholder="Descreva sua experiência de ensino e certificações relevantes..."
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <Button type="submit" className="btn-primary w-full">
                      Submeter
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Campos obrigatórios
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CadastroExplicadores;
