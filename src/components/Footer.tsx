import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              D'Minu
            </h3>
            <p className="text-accent-foreground/80">
              Transformando a experiência gastronômica através da tecnologia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent-foreground">Contato</h4>
            <div className="space-y-2 text-accent-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@dminu.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>
                <a href="#beneficios" className="hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#cadastro" className="hover:text-primary transition-colors">
                  Cadastre-se
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center text-accent-foreground/60">
          <p>&copy; 2025 D'Minu. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
