
import { Clock } from "lucide-react";
import { DiasDisponiveisType } from "@/hooks/useSolicitarExplicadorForm";

type DisponibilidadeSemanalProps = {
  diasDisponiveis: DiasDisponiveisType;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DisponibilidadeSemanal = ({ diasDisponiveis, onCheckboxChange }: DisponibilidadeSemanalProps) => {
  return (
    <div className="form-group">
      <label className="form-label flex items-center">
        <Clock className="w-4 h-4 mr-2 text-primary" />
        Dias da Semana Disponíveis*
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="segunda"
            checked={diasDisponiveis.segunda}
            onChange={onCheckboxChange}
            className="form-checkbox"
          />
          <span>Segunda</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="terca"
            checked={diasDisponiveis.terca}
            onChange={onCheckboxChange}
            className="form-checkbox"
          />
          <span>Terça</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="quarta"
            checked={diasDisponiveis.quarta}
            onChange={onCheckboxChange}
            className="form-checkbox"
          />
          <span>Quarta</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="quinta"
            checked={diasDisponiveis.quinta}
            onChange={onCheckboxChange}
            className="form-checkbox"
          />
          <span>Quinta</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="sexta"
            checked={diasDisponiveis.sexta}
            onChange={onCheckboxChange}
            className="form-checkbox"
          />
          <span>Sexta</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="sabado"
            checked={diasDisponiveis.sabado}
            onChange={onCheckboxChange}
            className="form-checkbox"
          />
          <span>Sábado</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="domingo"
            checked={diasDisponiveis.domingo}
            onChange={onCheckboxChange}
            className="form-checkbox"
          />
          <span>Domingo</span>
        </label>
      </div>
    </div>
  );
};

export default DisponibilidadeSemanal;
