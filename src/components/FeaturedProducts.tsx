import ProductCard from "./ProductCard";
import basketballHoop from "@/assets/basketball-hoop.jpg";
import basketballBall from "@/assets/basketball-ball.jpg";
import basketballFloor from "@/assets/basketball-floor.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Soporte de Básquet Profesional Pro-Max 3000",
    price: 450000,
    originalPrice: 520000,
    image: basketballHoop,
    category: "Soportes Profesionales",
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Pelota de Baloncesto Spalding NBA Oficial",
    price: 25000,
    image: basketballBall,
    category: "Pelotas",
    isNew: true,
  },
  {
    id: "3",
    name: "Piso Deportivo Premium Basketball Court",
    price: 180000,
    image: basketballFloor,
    category: "Pisos Deportivos",
    isBestSeller: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Productos <span className="text-accent">Destacados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de equipamiento de baloncesto más popular, 
            elegido por profesionales y aficionados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}