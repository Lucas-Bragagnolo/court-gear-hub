import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isBestSeller,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 shadow-md">
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-accent text-accent-foreground px-2 py-1 text-xs font-semibold rounded">
                NUEVO
              </span>
            )}
            {isBestSeller && (
              <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
                MÁS VENDIDO
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Añadir al Carrito
            </Button>
          </div>
        </div>

        {/* Product info */}
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
            {category}
          </p>
          <h3 className="font-semibold text-lg mb-3 line-clamp-2">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-accent">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          <Button variant="outline" className="w-full">
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}