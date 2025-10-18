import { Smartphone, TrendingUp, Clock, Shield, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Smartphone,
    title: "100% Digital",
    description: "Acesso fácil via QR Code. Seus clientes visualizam o menu em segundos, sem apps ou cadastros.",
  },
  {
    icon: TrendingUp,
    title: "Aumente suas Vendas",
    description: "Fotos atrativas e descrições completas dos pratos aumentam o ticket médio em até 30%.",
  },
  {
    icon: Clock,
    title: "Atualização Instantânea",
    description: "Mude preços, adicione pratos ou promoções em tempo real, sem custos de impressão.",
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Dados protegidos e sistema estável. Seu negócio sempre funcionando perfeitamente.",
  },
  {
    icon: Heart,
    title: "Experiência Premium",
    description: "Interface intuitiva e moderna que impressiona e fideliza seus clientes.",
  },
  {
    icon: Zap,
    title: "Implementação Rápida",
    description: "Configure em minutos. Nossa equipe te ajuda em cada passo do processo.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que escolher o{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              D'Minu?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubra como nosso menu digital pode revolucionar a experiência do seu restaurante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
