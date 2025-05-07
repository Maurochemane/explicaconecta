
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Building, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SolicitarPropostaEmpresas = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    area: "",
    tipoServico: "",
    qtdMembros: "",
    qtdExplicadores: "",
    observacoes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.nomeEmpresa || !formData.area || !formData.tipoServico || !formData.qtdMembros || !formData.qtdExplicadores) {
      toast({
        title: "Formulário incompleto",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form (would connect to backend in production)
    console.log("Form submitted:", formData);
    
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Nossa equipe comercial entrará em contato em breve para discutir sua proposta personalizada.",
    });
    
    // Reset form
    setFormData({
      nomeEmpresa: "",
      area: "",
      tipoServico: "",
      qtdMembros: "",
      qtdExplicadores: "",
      observacoes: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-primary mb-6">Solicite uma Proposta para a sua Empresa</h1>
              <p className="text-gray-600 mb-4">
                Capacite sua equipe com os melhores profissionais da Explica Conecta.<br></br> Preencha o formulário abaixo para receber uma proposta personalizada.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="form-group">
                    <label htmlFor="nomeEmpresa" className="form-label flex items-center">
                      <Building className="w-4 h-4 mr-2 text-primary" />
                      Nome da Empresa*
                    </label>
                    <input
                      type="text"
                      id="nomeEmpresa"
                      name="nomeEmpresa"
                      value={formData.nomeEmpresa}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="area" className="form-label flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-primary" />
                      Área de Actuação*
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="Ex: Finanças, Tecnologia, Educação, etc."
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tipoServico" className="form-label flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-primary" />
                      Tipo de Serviço Pretendido*
                    </label>
                    <select
                      id="tipoServico"
                      name="tipoServico"
                      value={formData.tipoServico}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Selecione o tipo de serviço</option>
                      <option value="excel">Formação em Excel (básico ao avançado)</option>
                      <option value="dashboards">Criação e gestão de dashboards</option>
                      <option value="analiseDados">Análise de dados e reporting</option>
                      <option value="linguas">Formação em línguas</option>
                      <option value="personalizado">Programa personalizado</option>
                      <option value="outro">Outro (especificar nas observações)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="qtdMembros" className="form-label flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        Membros a capacitar*
                      </label>
                      <select
                        id="qtdMembros"
                        name="qtdMembros"
                        value={formData.qtdMembros}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="1-5">1-5</option>
                        <option value="6-10">6-10</option>
                        <option value="11-20">11-20</option>
                        <option value="21-50">21-50</option>
                        <option value="50+">Mais de 50</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="qtdExplicadores" className="form-label flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        Explicadores pretendidos*
                      </label>
                      <select
                        id="qtdExplicadores"
                        name="qtdExplicadores"
                        value={formData.qtdExplicadores}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="1">1</option>
                        <option value="2-3">2-3</option>
                        <option value="4-5">4-5</option>
                        <option value="6+">Mais de 6</option>
                        <option value="naoSei">Não sei, preciso de aconselhamento</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="observacoes" className="form-label flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-primary" />
                      Observações adicionais
                    </label>
                    <textarea
                      id="observacoes"
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleChange}
                      rows={5}
                      className="form-input"
                      placeholder="Forneça detalhes adicionais sobre suas necessidades específicas..."
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <Button type="submit" className="btn-primary w-full">
                      Solicitar Proposta
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    *Campos obrigatórios
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

export default SolicitarPropostaEmpresas;
