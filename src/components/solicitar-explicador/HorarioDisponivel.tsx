
import { Clock } from "lucide-react";

type HorarioDisponivelProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const HorarioDisponivel = ({ value, onChange }: HorarioDisponivelProps) => {
  return (
    <div className="form-group">
      <label htmlFor="horarioDisponivel" className="form-label flex items-center">
        <Clock className="w-4 h-4 mr-2 text-primary" />
        Horário Disponível*
      </label>
      <input
        type="text"
        id="horarioDisponivel"
        name="horarioDisponivel"
        value={value}
        onChange={onChange}
        placeholder="Ex: 15h às 17h"
        className="form-input"
        required
      />
    </div>
  );
};

export default HorarioDisponivel;
