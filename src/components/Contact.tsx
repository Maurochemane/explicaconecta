import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show success message
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contacto em breve.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Entre em Contacto</h2>
        <p className="section-subtitle">
          Estamos prontos para responder a todas as suas perguntas e ajudá-lo a
          começar sua jornada educacional.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+258 84000000"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva suas necessidades ou perguntas..."
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-primary/5 p-2 rounded-2xl h-full md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Informações de Contacto
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Telefone</h4>
                    <p className="text-gray-600">+258 849646536</p>
                    <p className="text-gray-600">+258 865968106</p>
                  </div>
                </div>

                <div className="flex gap-4 overflow-x-hidden">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2 ">Email</h4>
                    <p className=" text-gray-600 text-xs  md:text-lg ">
                      info@explicaconecta.com
                    </p>
                    <p className="text-gray-600 text-xs md:text-lg">
                      infoexplicaconecta@hotlook.com
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-2">
                    Horário de Atendimento
                  </h4>
                  <p className="text-gray-600">Segunda a Sábado: 8h às 20h</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-2">
                    Área de Cobertura
                  </h4>
                  <p className="text-gray-600">
                    Oferecemos serviços em toda a região de Maputo e Matola.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-2">Siga-nos</h4>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="#"
                      className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
