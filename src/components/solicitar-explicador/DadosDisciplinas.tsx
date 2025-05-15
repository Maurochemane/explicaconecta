
import { Book } from "lucide-react";

type DadosDisciplinasProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const DadosDisciplinas = ({ value, onChange }: DadosDisciplinasProps) => {
  return (
    <div className="form-group">
      <label htmlFor="disciplinas" className="form-label flex items-center">
        <Book className="w-4 h-4 mr-2 text-primary" />
        Disciplina(s) e Contactos
      </label>
      <textarea
        id="disciplinas"
        name="disciplinas"
        value={value}
        onChange={onChange}
        placeholder="Liste as disciplinas que precisa de explicação e o número de contacto..."
        className="form-input"
        rows={3}
        required
      ></textarea>
    </div>
  );
};

export default DadosDisciplinas;
