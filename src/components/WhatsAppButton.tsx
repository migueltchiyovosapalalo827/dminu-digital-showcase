import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "351961019683";
  const message = "Olá! Gostaria de saber mais sobre o D'Minu Menu Digital.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-float"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-secondary-foreground" />
    </Button>
  );
};

export default WhatsAppButton;
