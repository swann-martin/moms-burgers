const products = [
  {
    id: '1',
    title: 'Mama française',
    image:
      'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    ingredients: [
      'buns',
      'cantal',
      'roquefort',
      'boeuf ou galette végé',
      'salade',
      'tomate',
      'sauce aïoli',
    ],
    price: 6,
  },
  {
    id: '2',
    title: 'Mama orientale',
    image:
      'https://images.unsplash.com/photo-1516774266634-15661f692c19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
    ingredients: [
      'buns',
      'mergez',
      'salade',
      'tomate',
      'oignons',
      'sauce piquante',
    ],
    price: 6,
  },
  {
    id: '3',
    title: 'Mama anglaise',
    image:
      'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80',
    ingredients: [
      'buns',
      'stilton',
      'cheddar',
      'oeufs',
      'bacon',
      'oignons',
      'sauce pickkles',
    ],
    price: 6,
  },
  {
    id: '4',
    title: 'Mama italienne ',
    image:
      'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    ingredients: [
      'buns',
      'mozzarella',
      'salade',
      'tomate',
      'oignons',
      'sauce parmesan',
    ],
    price: 6,
  },
  {
    id: '5',
    title: 'Mama tradi ',
    image:
      'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    ingredients: ['pain', 'boeuf', 'salade', 'tomate', 'oignons', 'sauce mayo'],
    price: 6,
  },
  {
    id: '6',
    title: 'Mama japonnaise',
    image:
      'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ingredients: [
      'Riz',
      'boeuf',
      'salade',
      'tomate',
      'avocat',
      'oignons',
      'sauce teryaki',
    ],
    price: 6,
  },
  {
    id: '7',
    title: 'Mama mexicaine',
    image:
      'https://images.unsplash.com/photo-1584947897558-4ee278fbbddf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    ingredients: [
      'Wrap',
      'poulet',
      'salade',
      'tomate',
      'avocat',
      'oignons',
      'sauce salsa',
    ],
    price: 6,
  },
  {
    id: '8',
    title: 'Mama vegé',
    image:
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80',
    ingredients: [
      'buns',
      'quinoa',
      'haloumi',
      'salade',
      'tomate',
      'avocat',
      'sauce pesto',
    ],
    price: 6,
  },
  {
    id: '9',
    title: 'Frites',
    image:
      'https://images.unsplash.com/photo-1598679253544-2c97992403ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    ingredients: ['pommes de terre', 'sel', 'paprika', 'mayo'],
    price: 2.5,
  },
  {
    id: '10',
    title: 'Potatoes',
    image:
      'https://images.unsplash.com/photo-1576100246753-1c1b4fa73481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    ingredients: ['pommes de terre', 'sel', 'paprika', 'sauce potatoes'],
    price: 2.5,
  },
  {
    id: '11',
    title: 'Nuggets végé',
    image:
      'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    ingredients: ['soja', 'chapelure'],
    price: 2.5,
  },
  {
    id: '12',
    title: 'Limonade',
    image:
      'https://images.unsplash.com/photo-1580902777696-56e74256f83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    ingredients: ['citrons', 'soda'],
    price: 1.5,
  },
  {
    id: '14',
    title: 'Donuts',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    ingredients: ['Chocolat', 'pate', 'oeufs', 'gras'],
    price: 1.5,
  },
];

export default products;
