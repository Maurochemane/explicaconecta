
import { MapPin } from "lucide-react";

type DadosEnderecoProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DadosEndereco = ({ value, onChange }: DadosEnderecoProps) => {
  return (
    <div className="form-group">
      <label htmlFor="endereco" className="form-label flex items-center">
        <MapPin className="w-4 h-4 mr-2 text-primary" />
        Endereço*
      </label>
      <input
        type="text"
        id="endereco"
        name="endereco"
        value={value}
        onChange={onChange}
        placeholder="Localização para as aulas"
        className="form-input"
        required
      />
    </div>
  );
};

export default DadosEndereco;
