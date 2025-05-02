
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SubmitButton = () => {
  return (
    <div className="form-group">
      <Button 
        type="submit" 
        className="btn-primary w-full flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary"
      >
        <Search className="h-5 w-5" />
        Submeter Solicitação
      </Button>
    </div>
  );
};

export default SubmitButton;
