
import { Book } from "lucide-react";

type TipoExplicacaoProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const TipoExplicacao = ({ value, onChange }: TipoExplicacaoProps) => {
  return (
    <div className="form-group">
      <label htmlFor="tipoExplicacao" className="form-label flex items-center">
        <Book className="w-4 h-4 mr-2 text-primary" />
        Tipo de Explicação*
      </label>
      <select
        id="tipoExplicacao"
        name="tipoExplicacao"
        value={value}
        onChange={onChange}
        className="form-select"
        required
      >
        <option value="">Selecione o tipo</option>
        <option value="intensiva">Intensiva</option>
        <option value="media">Média</option>
        <option value="leve">Leve (desenvolvimento geral)</option>
      </select>
    </div>
  );
};

export default TipoExplicacao;
