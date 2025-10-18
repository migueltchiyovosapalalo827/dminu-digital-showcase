import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Building2, Mail, Phone, User } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    restaurant: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send to your backend
    console.log("Form submitted:", formData);
    
    toast.success("Cadastro enviado com sucesso!", {
      description: "Em breve entraremos em contato para configurar seu menu digital.",
    });

    // Reset form
    setFormData({
      name: "",
      restaurant: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="cadastro" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Comece Agora com o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                D'Minu
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário e nossa equipe entrará em contato para configurar seu menu digital
            </p>
          </div>

          <Card className="border-border shadow-xl animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Cadastro de Novo Cliente</CardTitle>
              <CardDescription>
                Todas as informações são confidenciais e seguras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Nome Completo
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Nome do Restaurante
                    </label>
                    <Input
                      name="restaurant"
                      value={formData.restaurant}
                      onChange={handleChange}
                      placeholder="Nome do seu estabelecimento"
                      required
                      className="border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      E-mail
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Telefone/WhatsApp
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      required
                      className="border-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos um pouco sobre seu restaurante e suas necessidades..."
                    className="min-h-[120px] border-input"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                  size="lg"
                >
                  Solicitar Demonstração Gratuita
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
