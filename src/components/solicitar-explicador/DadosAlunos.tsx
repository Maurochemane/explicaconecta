
import { User, Plus, Minus } from "lucide-react";
import { AlunoType } from "@/hooks/useSolicitarExplicadorForm";

type DadosAlunosProps = {
  alunos: AlunoType[];
  onAlunoChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddAluno: () => void;
  onRemoveAluno: (index: number) => void;
};

const DadosAlunos = ({ alunos, onAlunoChange, onAddAluno, onRemoveAluno }: DadosAlunosProps) => {
  return (
    <div className="form-group">
      <label className="form-label flex items-center">
        <User className="w-4 h-4 mr-2 text-primary" />
        Dados do(s) Aluno(s)*
      </label>
      {alunos.map((aluno, index) => (
        <div key={index} className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              name="nome"
              value={aluno.nome}
              onChange={(e) => onAlunoChange(index, e)}
              placeholder="Nome do aluno"
              className="form-input"
              required={index === 0}
            />
          </div>
          <div className="w-20">
            <input
              type="text"
              name="idade"
              value={aluno.idade}
              onChange={(e) => onAlunoChange(index, e)}
              placeholder="Idade"
              className="form-input"
            />
          </div>
          <button 
            type="button" 
            onClick={() => onRemoveAluno(index)}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
            disabled={alunos.length === 1}
          >
            <Minus className="h-5 w-5" />
          </button>
        </div>
      ))}
      <button 
        type="button" 
        onClick={onAddAluno}
        className="mt-2 flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
      >
        <Plus className="h-4 w-4 mr-1" /> Adicionar outro aluno
      </button>
    </div>
  );
};

export default DadosAlunos;
