import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-menu.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/90 to-primary -z-10" />
      
      {/* Hero image overlay */}
      <div 
        className="absolute inset-0 opacity-20 -z-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Transforme Seu Restaurante com o{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              D'Minu
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Menu digital moderno, interativo e fácil de usar. Aumente suas vendas e melhore a experiência dos seus clientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={scrollToForm}
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Benefícios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Restaurantes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50K+</div>
              <div className="text-sm text-white/80">Pedidos/Mês</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
              <div className="text-sm text-white/80">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
