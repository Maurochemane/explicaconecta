import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export type AlunoType = {
  nome: string;
  idade: string;
};

export type DiasDisponiveisType = {
  segunda: boolean;
  terca: boolean;
  quarta: boolean;
  quinta: boolean;
  sexta: boolean;
  sabado: boolean;
  domingo: boolean;
};

export type FormDataType = {
  nomeEncarregado: string;
  alunos: AlunoType[];
  endereco: string;
  disponibilidade: string;
  diasDisponiveis: DiasDisponiveisType;
  horarioDisponivel: string;
  tipoExplicacao: string;
  disciplinas: string;
};

export const useSolicitarExplicadorForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    nomeEncarregado: "",
    alunos: [{ nome: "", idade: "" }],
    endereco: "",
    disponibilidade: "",
    diasDisponiveis: {
      segunda: false,
      terca: false,
      quarta: false,
      quinta: false,
      sexta: false,
      sabado: false,
      domingo: false
    },
    horarioDisponivel: "",
    tipoExplicacao: "",
    disciplinas: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // <- Estado novo

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      diasDisponiveis: {
        ...prev.diasDisponiveis,
        [name]: checked
      }
    }));
  };

  const handleAlunoChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const alunos = [...formData.alunos];
    alunos[index] = { ...alunos[index], [name]: value };
    
    setFormData(prev => ({
      ...prev,
      alunos
    }));
  };

  const addAluno = () => {
    setFormData(prev => ({
      ...prev,
      alunos: [...prev.alunos, { nome: "", idade: "" }]
    }));
  };

  const removeAluno = (index: number) => {
    if (formData.alunos.length === 1) return;
    
    const alunos = [...formData.alunos];
    alunos.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      alunos
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (!formData.alunos.some(aluno => aluno.nome.trim() !== "")) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, adicione pelo menos um aluno.",
        variant: "destructive"
      });
      isValid = false;
    }

    if (!formData.endereco || !formData.tipoExplicacao) {
      toast({
        title: "Formulário incompleto",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      isValid = false;
    }

    const hasDaySelected = Object.values(formData.diasDisponiveis).some(Boolean);
    if (!hasDaySelected) {
      toast({
        title: "Disponibilidade não selecionada",
        description: "Por favor, selecione pelo menos um dia da semana disponível.",
        variant: "destructive"
      });
      isValid = false;
    }

    if (!isValid) return;

    try {
      setIsSubmitting(true); // <- Início do envio
      toast({ title: "Enviando seus dados..." });

      const response = await fetch("https://explicaconectaback-end.onrender.com/explicador", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao enviar solicitação.");
      }

      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar sua primeira aula.",
      });

      setFormData({
        nomeEncarregado: "",
        alunos: [{ nome: "", idade: "" }],
        endereco: "",
        disponibilidade: "",
        diasDisponiveis: {
          segunda: false,
          terca: false,
          quarta: false,
          quinta: false,
          sexta: false,
          sabado: false,
          domingo: false
        },
        horarioDisponivel: "",
        tipoExplicacao: "",
        disciplinas: "",
      });
    } catch (error: any) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar solicitação",
        description: error.message || "Ocorreu um erro inesperado.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false); // <- Finaliza envio
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleCheckboxChange,
    handleAlunoChange,
    addAluno,
    removeAluno,
    handleSubmit
  };
};
