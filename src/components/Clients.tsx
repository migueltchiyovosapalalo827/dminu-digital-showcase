import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const clients = [
  {
    name: "Restaurante Bella Vista",
    testimonial: "O D'Minu transformou completamente a experiência dos nossos clientes. As vendas aumentaram 35% no primeiro mês!",
    rating: 5,
    role: "Proprietário",
  },
  {
    name: "Pizzaria Napolitana",
    testimonial: "Implementação super rápida e suporte excelente. Nossos clientes adoram a praticidade do menu digital.",
    rating: 5,
    role: "Gerente",
  },
  {
    name: "Café Aromático",
    testimonial: "Finalmente podemos atualizar nosso menu instantaneamente. Economizamos muito com impressão!",
    rating: 5,
    role: "Dona",
  },
  {
    name: "Churrascaria Gaúcha",
    testimonial: "A qualidade das fotos no menu digital faz toda diferença. Nossos pratos vendem sozinhos agora!",
    rating: 5,
    role: "Chef",
  },
];

const Clients = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nossos Clientes{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Satisfeitos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que restaurantes de sucesso estão falando sobre o D'Minu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{client.testimonial}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-card-foreground">{client.name}</p>
                  <p className="text-sm text-muted-foreground">{client.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logos section */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Mais de 500 restaurantes confiam no D'Minu</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-2xl font-bold text-foreground">
                Cliente {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
