import { PhoneCall } from "lucide-react";


type DadosContactoProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DadosContacto = ({ value, onChange }: DadosContactoProps) => {
  return (
    <div className="form-group">
      <label htmlFor="endereco" className="form-label flex items-center">
        <PhoneCall  className="w-4 h-4 mr-2 text-primary" />
        Número de telefone
      </label>
      <input
        type="text"
        id="contacto"
        name="contacto"
        value={value}
        onChange={onChange}
        placeholder="84 000 0000 / 86 000 0000"
        className="form-input"
        required
      />
    </div>

  
  );
};

export default DadosContacto;