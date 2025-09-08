import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Soportes de Básquet",
    description: "Profesionales y domésticos",
    icon: "🏀",
    color: "bg-gradient-to-br from-accent/10 to-accent/5"
  },
  {
    name: "Pisos Deportivos",
    description: "Superficies profesionales",
    icon: "🏟️",
    color: "bg-gradient-to-br from-primary/10 to-primary/5"
  },
  {
    name: "Pelotas",
    description: "Baloncesto y otros deportes",
    icon: "⚽",
    color: "bg-gradient-to-br from-accent/10 to-accent/5"
  },
  {
    name: "Tableros Electrónicos",
    description: "Marcadores digitales",
    icon: "📱",
    color: "bg-gradient-to-br from-primary/10 to-primary/5"
  },
  {
    name: "Tableros y Aros",
    description: "Componentes individuales",
    icon: "🎯",
    color: "bg-gradient-to-br from-accent/10 to-accent/5"
  },
  {
    name: "Accesorios",
    description: "Complementos deportivos",
    icon: "🎒",
    color: "bg-gradient-to-br from-primary/10 to-primary/5"
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Explorar <span className="text-accent">Categorías</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra exactamente lo que necesitas para tu deporte favorito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.name} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md overflow-hidden"
            >
              <CardContent className={`p-6 ${category.color} relative`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                >
                  Ver Productos
                </Button>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}