
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSolicitarExplicadorForm } from "@/hooks/useSolicitarExplicadorForm";
import FormularioSolicitacao from "@/components/solicitar-explicador/FormularioSolicitacao";

const SolicitarExplicador = () => {
  const {
    formData,
    handleChange,
    handleCheckboxChange,
    handleAlunoChange,
    addAluno,
    removeAluno,
    handleSubmit
  } = useSolicitarExplicadorForm();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-primary mb-6">Solicita um Explicador</h1>
              <p className="text-gray-600 mb-4">
                Preencha o formulário abaixo para solicitar um explicador personalizado <br />que atenda às suas necessidades específicas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <FormularioSolicitacao
                formData={formData}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handleAlunoChange={handleAlunoChange}
                addAluno={addAluno}
                removeAluno={removeAluno}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolicitarExplicador;
