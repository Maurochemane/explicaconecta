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
        Contacto*
      </label>
      <input
        type="text"
        id="contacto"
        name="contacto"
        value={value}
        onChange={onChange}
        placeholder="Digita um contacto válido"
        className="form-input"
        required
      />
    </div>

  
  );
};

export default DadosContacto;