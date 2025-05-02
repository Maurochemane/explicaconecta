
import { User } from "lucide-react";

type DadosEncarregadoProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DadosEncarregado = ({ value, onChange }: DadosEncarregadoProps) => {
  return (
    <div className="form-group">
      <label htmlFor="nomeEncarregado" className="form-label flex items-center">
        <User className="w-4 h-4 mr-2 text-primary" />
        Nome do Encarregado (opcional)
      </label>
      <input
        type="text"
        id="nomeEncarregado"
        name="nomeEncarregado"
        value={value}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
};

export default DadosEncarregado;
