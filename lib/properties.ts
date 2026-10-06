export type Property = {
  slug: string;
  title: string;
  location: string;
  price: string;
  image: string;
  gallery?: string[];
  type: string;
  area: string;
  features: string;
  summary: string;
  description: string;
  details?: string[];
  reference: string;
  status?: string;
  notice?: string;
  featured?: boolean;
};

export const properties: Property[] = [
  {
    slug: "chalet-san-garcia-algeciras",
    title: "Chalet independiente en San García",
    location: "San García · Algeciras",
    price: "450.000 €",
    image: "/properties/chalet-san-garcia.jpg",
    gallery: [
      "/properties/chalet-san-garcia.jpg",
      "/properties/chalet-san-garcia-7.jpg",
      "/properties/chalet-san-garcia-10.jpg",
      "/properties/chalet-san-garcia-16.jpg",
      "/properties/chalet-san-garcia-20.jpg",
    ],
    type: "Chalet independiente",
    area: "307 m²",
    features: "3 dorm. · 2 baños · 307 m²",
    summary: "Una vivienda independiente con piscina y jardín en una de las zonas residenciales más consolidadas de Algeciras.",
    description: "Construida sobre una amplia parcela, la vivienda distribuye sus estancias con una relación fluida entre interior y exterior. Dispone de salón luminoso con chimenea, tres dormitorios, dos baños, garaje para dos vehículos, aire acondicionado y zonas exteriores pensadas para disfrutarse durante todo el año.",
    details: [
      "307 m² construidos",
      "251 m² útiles",
      "3 dormitorios",
      "2 baños",
      "Garaje para 2 vehículos",
      "Piscina privada",
      "Jardín",
      "Aire acondicionado",
    ],
    reference: "11805_30366919",
    featured: true,
  },
  {
    slug: "adosado-puente-mayorga-san-roque",
    title: "Adosado con piscina en Puente Mayorga",
    location: "Puente Mayorga · San Roque",
    price: "300.000 €",
    image: "/properties/adosado-puente-mayorga.jpg",
    type: "Chalet adosado",
    area: "125 m²",
    features: "3 dorm. · 2 baños · 125 m²",
    summary: "Una vivienda familiar con terraza, garaje y piscina comunitaria cerca de la bahía.",
    description: "El inmueble ofrece tres dormitorios, baño y aseo, salón, cocina, zona de lavandería y almacenaje. Cuenta además con garaje, aire acondicionado, jardín y acceso a zonas comunes con piscina.",
    reference: "11805_30026932",
    featured: true,
  },
  {
    slug: "adosado-los-cortijillos-los-barrios",
    title: "Adosado con parcela en Los Cortijillos",
    location: "Los Cortijillos · Los Barrios",
    price: "399.000 €",
    image: "/properties/adosado-los-barrios.jpg",
    type: "Chalet adosado",
    area: "251 m²",
    features: "3 dorm. · 3 baños · 251 m²",
    summary: "Amplitud, parcela y piscina para una forma de vivir volcada al exterior.",
    description: "Vivienda adosada en buen estado, construida sobre una parcela de 500 m². Sus 251 m² construidos incluyen tres dormitorios, tres baños y espacios auxiliares, además de jardín, piscina y trastero.",
    reference: "11805_30429882",
    featured: true,
  },
  {
    slug: "piso-virgen-europa-algeciras",
    title: "Piso reformado en Virgen de Europa",
    location: "Virgen de Europa · Algeciras",
    price: "150.000 €",
    image: "/properties/piso-virgen-europa.jpg",
    type: "Piso",
    area: "83 m²",
    features: "3 dorm. · 1 baño · 83 m²",
    summary: "Una vivienda reformada y luminosa, bien conectada con el centro de Algeciras.",
    description: "Situado en una tercera planta exterior con ascensor, el piso dispone de tres dormitorios, un baño y 79 m² útiles. La reforma actualiza la vivienda con una distribución práctica y armarios empotrados.",
    reference: "11805_30051483",
  },
  {
    slug: "piso-atunara-la-linea",
    title: "Piso en La Atunara-Periáñez",
    location: "La Atunara · La Línea",
    price: "95.000 €",
    image: "/properties/piso-atunara.jpg",
    type: "Piso",
    area: "61 m²",
    features: "2 dorm. · 1 baño · 61 m²",
    summary: "Una vivienda exterior y funcional, lista para entrar a vivir en La Atunara.",
    description: "Primera planta exterior con dos dormitorios, baño y cocina americana. La vivienda, construida en 1972, se encuentra en buen estado de conservación y ofrece una distribución compacta de 61 m².",
    reference: "120526_IGC",
  },
  {
    slug: "local-bajadilla-algeciras",
    title: "Local comercial en La Bajadilla",
    location: "La Bajadilla · Algeciras",
    price: "100.000 €",
    image: "/properties/local-bajadilla.jpg",
    type: "Local comercial",
    area: "145 m²",
    features: "Local · 145 m² · A reformar",
    summary: "Un espacio comercial de gran superficie con margen para adaptar el uso y la distribución.",
    description: "Local comercial de 145 m² construidos en La Bajadilla. El activo necesita reforma, lo que permite plantear una intervención ajustada a la futura actividad.",
    reference: "230926_IGC",
  },
  {
    slug: "oficina-virgen-carmen-algeciras",
    title: "Local comercial en Virgen del Carmen",
    location: "Av. Virgen del Carmen · Algeciras",
    price: "248.000 €",
    image: "/properties/oficina-virgen-carmen.jpg",
    type: "Local comercial",
    area: "550 m²",
    features: "Local · 550 m² · A reformar",
    summary: "Un activo de 550 m² en una de las principales avenidas de Algeciras.",
    description: "Local exterior construido en 1975, con aseo y una superficie de 550 m². Su estado actual requiere reforma y abre distintas posibilidades de implantación comercial o profesional.",
    reference: "240426_IGC",
  },
  {
    slug: "oficina-centro-algeciras-remate",
    title: "Oficina en cesión de remate",
    location: "Centro · Algeciras",
    price: "73.000 €*",
    image: "/properties/oficina-centro-remate.jpg",
    type: "Cesión de remate",
    area: "68 m²",
    features: "Oficina · 68 m² · A reformar",
    summary: "Una oficina céntrica comercializada mediante un proceso especial de cesión de remate.",
    description: "Oficina en primera planta, construida en 2008, con 53 m² útiles y una terraza de 4,38 m². El inmueble requiere reforma y su adquisición no responde a una compraventa inmobiliaria convencional.",
    reference: "R_2117559",
    status: "Cesión de remate",
    notice: "No admite visitas. El precio mostrado es orientativo y la adquisición se realiza exclusivamente mediante cesión de remate, sujeta a aprobación. Los gastos e impuestos de la operación no están incluidos.",
  },
  {
    slug: "piso-bajadilla-algeciras-remate",
    title: "Piso en cesión de remate en La Bajadilla",
    location: "La Bajadilla · Algeciras",
    price: "27.000 €*",
    image: "/properties/piso-bajadilla-remate.jpg",
    type: "Cesión de remate",
    area: "49 m²",
    features: "2 dorm. · 1 baño · 49 m²",
    summary: "Una operación dirigida a compradores que conocen los procesos de adquisición judicial.",
    description: "Vivienda de 49 m² construidos, con dos dormitorios y un baño. El activo necesita reforma y no dispone de posesión, por lo que exige una evaluación jurídica y económica específica.",
    reference: "YEL_2617",
    status: "Cesión de remate",
    notice: "Inmueble sin posesión y sin posibilidad de visita. El importe mostrado es una referencia orientativa; la adquisición se articula mediante cesión de remate y queda sujeta a aprobación. Los gastos e impuestos no están incluidos.",
  },
];

export const featuredProperties = properties.filter((property) => property.featured);
