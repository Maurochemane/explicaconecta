
import { FormDataType } from "@/hooks/useSolicitarExplicadorForm";
import DadosEncarregado from "./DadosEncarregado";
import DadosAlunos from "./DadosAlunos";
import DadosEndereco from "./DadosEndereco";
import DadosContacto from "./DadosContacto";
import DisponibilidadeSemanal from "./DisponibilidadeSemanal";
import HorarioDisponivel from "./HorarioDisponivel";
import TipoExplicacao from "./TipoExplicacao";
import DadosDisciplinas from "./DadosDisciplinas";
import SubmitButton from "./SubmitButton";

type FormularioSolicitacaoProps = {
  formData: FormDataType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAlunoChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  addAluno: () => void;
  removeAluno: (index: number) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const FormularioSolicitacao = ({
  formData,
  handleChange,
  handleCheckboxChange,
  handleAlunoChange,
  addAluno,
  removeAluno,
  handleSubmit
}: FormularioSolicitacaoProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <DadosEncarregado 
          value={formData.nomeEncarregado} 
          onChange={handleChange} 
        />

        <DadosAlunos 
          alunos={formData.alunos}
          onAlunoChange={handleAlunoChange}
          onAddAluno={addAluno}
          onRemoveAluno={removeAluno}
        />

        <DadosEndereco 
          value={formData.endereco} 
          onChange={handleChange} 
        />

        <DadosContacto 
          value={formData.contacto} 
          onChange={handleChange} 
        />

        <DisponibilidadeSemanal 
          diasDisponiveis={formData.diasDisponiveis}
          onCheckboxChange={handleCheckboxChange}
        />

        <HorarioDisponivel 
          value={formData.horarioDisponivel} 
          onChange={handleChange} 
        />

        <TipoExplicacao 
          value={formData.tipoExplicacao} 
          onChange={handleChange} 
        />

        <DadosDisciplinas 
          value={formData.disciplinas} 
          onChange={handleChange} 
        />

        <SubmitButton />
        
        <p className="text-sm text-gray-500 text-center">
          Campos obrigatórios
        </p>
      </div>
    </form>
  );
};

export default FormularioSolicitacao;
