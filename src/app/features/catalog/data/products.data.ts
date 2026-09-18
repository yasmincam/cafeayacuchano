import { Product } from '../models/product.model';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'c-01',
    name: 'Café de Especialidad VRAEM 250g',
    category: 'Café en Grano',
    price: 28.00,
    stock: 50,
    image: '/assets/coffee/bag.jpg',
    badge: 'ORIGEN VRAEM',
    altitude: '1,800 m.s.n.m.',
    notes: 'Chocolate amargo, Panela, Naranja',
    roastLevel: 'Tueste Medio',
    description: 'Granos 100% arábica de estricta altura cosechados en el valle del VRAEM.',
    variants: ['Grano Entero', 'Molido Espresso', 'Molido Filtro']
  },
  {
    id: 'c-02',
    name: 'Geisha Ayacuchano Gran Reserva 250g',
    category: 'Café en Grano',
    price: 38.00,
    stock: 20,
    image: '/assets/coffee/cherries.jpg',
    badge: 'MICRO-LOTE EXCLUSIVO',
    altitude: '1,950 m.s.n.m.',
    notes: 'Jazmín, Bergamota, Miel silvestre',
    roastLevel: 'Tueste Claro',
    description: 'La variedad reina del café mundial producida en micro-parcelas ayacuchanas.',
    variants: ['Grano Entero', 'Molido Fino']
  },
  {
    id: 'c-03',
    name: 'Espresso Wari Doble Shot',
    category: 'Bebidas de Barra',
    price: 8.50,
    stock: 100,
    image: '/assets/coffee/espresso.jpg',
    badge: '9 BARES EXTRACCIÓN',
    notes: 'Cuerpo denso, crema avellana persistente',
    description: 'Extracción presurizada directa de granos seleccionados con acidez viva.',
    variants: ['Clásico', 'Cortado', 'Americano']
  },
  {
    id: 'c-04',
    name: 'Latte Andino con Algarrobina',
    category: 'Bebidas de Barra',
    price: 11.50,
    stock: 45,
    image: '/assets/coffee/iced_latte.jpg',
    badge: 'ESPECIALIDAD DE LA CASA',
    notes: 'Leche texturizada, caramelo andino',
    description: 'Doble shot de espresso con leche vaporizada sedosa y reducción de algarrobina.'
  },
  {
    id: 'c-05',
    name: 'Cold Brew Macerado 18 Horas',
    category: 'Bebidas de Barra',
    price: 12.50,
    stock: 35,
    image: '/assets/coffee/iced_latte.jpg',
    badge: 'INFUSIÓN EN FRÍO',
    notes: 'Baja acidez, dulzor natural de cacao',
    description: 'Extracción por goteo lento en frío con café del VRAEM servido con hielo cristalino.'
  },
  {
    id: 'c-06',
    name: 'Chemex Pour-Over de Mesa (2 Tazas)',
    category: 'Métodos Filtrados',
    price: 16.00,
    stock: 25,
    image: '/assets/coffee/chemex.jpg',
    badge: 'MÉTODO ARTESANAL',
    notes: 'Taza limpia, notas florales acentuadas',
    description: 'Filtrado manual de mesa servido en jarra Chemex para compartir.'
  },
  {
    id: 'c-07',
    name: 'Torta Húmeda de Cacao Puro VRAEM',
    category: 'Repostería',
    price: 12.00,
    stock: 18,
    image: '/assets/coffee/cacao_cake.jpg',
    badge: 'CACAO 70% ORGÁNICO',
    notes: 'Fudge artesanal y granos de cacao crocante',
    description: 'Porción individual elaborada con pasta de cacao de las cooperativas del VRAEM.'
  }
];
