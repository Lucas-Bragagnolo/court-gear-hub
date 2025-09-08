import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">SPORT</span>
              <span className="text-accent">BASKET</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Tu tienda especializada en equipamiento deportivo profesional. 
              Más de 10 años llevando el baloncesto al siguiente nivel.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Sobre Nosotros
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Productos
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Ofertas
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Blog
              </a>
            </nav>
          </div>

          {/* Customer service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Atención al Cliente</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Preguntas Frecuentes
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Política de Devoluciones
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Envíos
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Garantía
              </a>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">info@sportbasket.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Av. Corrientes 1234<br />
                  Buenos Aires, Argentina
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-medium">Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Tu email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="secondary" size="sm">
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 SportBasket. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}