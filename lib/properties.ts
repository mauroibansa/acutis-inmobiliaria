export type Property = {
  slug: string;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  area: string;
  beds: number;
  summary: string;
};

export const properties: Property[] = [
  {
    slug: "villa-luz-sotogrande",
    title: "Villa Luz",
    location: "Sotogrande Alto",
    price: "1.450.000 €",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    type: "Villa",
    area: "420 m²",
    beds: 5,
    summary: "Arquitectura serena, privacidad y una relación excepcional entre interior y jardín.",
  },
  {
    slug: "casa-patio-san-roque",
    title: "Casa Patio",
    location: "San Roque Club",
    price: "890.000 €",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
    type: "Casa",
    area: "286 m²",
    beds: 4,
    summary: "Una casa contemporánea pensada para vivir el exterior durante todo el año.",
  },
  {
    slug: "atico-bahia-algeciras",
    title: "Ático Bahía",
    location: "Algeciras",
    price: "485.000 €",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    type: "Ático",
    area: "168 m²",
    beds: 3,
    summary: "Luz, horizonte y una terraza concebida como una estancia más de la vivienda.",
  },
];
