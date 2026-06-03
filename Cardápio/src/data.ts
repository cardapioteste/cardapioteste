import { MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  // PROMOTIONS (Toda Sexta)
  {
    id: "promo-chopp-espeto",
    name: "CHOPP + Espeto",
    description: "Chopp Ecobier/Petra 300ml + espeto de R$ 10,00 do cardápio",
    price: 14.99,
    category: "Promo"
  },
  {
    id: "promo-baldinho",
    name: "Combo Baldinho Bud",
    description: "Leve 5 Long Necks Budweiser trincando de geladas",
    price: 39.90,
    category: "Promo"
  },

  // CHOPPS / DRAFT BEERS
  {
    id: "chop-ecobier",
    name: "Chopp Ecobier",
    description: "Chopp puro malte clássico, leve e ideal para acompanhar espetinhos",
    prices: {
      "300ml": 9.99,
      "500ml": 14.99
    },
    category: "Draft"
  },
  {
    id: "chop-petra",
    name: "Chopp Petra",
    description: "Receita tradicional de altíssima qualidade, sabor incomparável",
    prices: {
      "300ml": 9.99,
      "500ml": 14.99
    },
    category: "Draft"
  },

  // ESPETINHOS R$ 12,00
  {
    id: "espeto-contra-file",
    name: "Contra Filé",
    description: "Carne nobre com gordura na medida certa, assada com maestria",
    price: 12.00,
    category: "Espetinho"
  },
  {
    id: "espeto-medalhao",
    name: "Medalhão de Frango",
    description: "Cubos suculentos de peito de frango envoltos em generosa tira de bacon",
    price: 12.00,
    category: "Espetinho"
  },

  // ESPETINHOS R$ 10,00
  {
    id: "espeto-alcatra",
    name: "Alcatra",
    description: "Carne magra, extremamente macia e suculenta",
    price: 10.00,
    category: "Espetinho"
  },
  {
    id: "espeto-frango",
    name: "Frango",
    description: "Espetinho de frango temperado com ervas especiais",
    price: 10.00,
    category: "Espetinho"
  },
  {
    id: "espeto-linguica",
    name: "Linguiça Toscana",
    description: "Linguiça artesanal suculenta e bem dourada na brasa",
    price: 10.00,
    category: "Espetinho"
  },
  {
    id: "espeto-coracao",
    name: "Coração de Frango",
    description: "Coraçãozinho bem temperado e macio ao ponto",
    price: 10.00,
    category: "Espetinho"
  },
  {
    id: "espeto-queijo",
    name: "Queijo Coalho",
    description: "Queijo coalho tostadinho com aquela casquinha crocante irresistível",
    price: 10.00,
    category: "Espetinho"
  },
  {
    id: "espeto-pao-alho",
    name: "Pão de Alho",
    description: "Quente, cremoso e super recheado na brasa",
    price: 10.00,
    category: "Espetinho"
  },

  // CAIPIRINHAS (500ml — R$ 25,00)
  {
    id: "caipirinha-geral",
    name: "Caipirinha Clássica (500ml)",
    description: "Saborosa e refrescante, feita na hora. Escolha o seu sabor favorito!",
    price: 25.00,
    category: "Caipirinha",
    options: ["Limão", "Morango", "Maracujá", "Kiwi", "Abacaxi"]
  },

  // LONG NECKS
  {
    id: "ln-heineken",
    name: "Heineken Long Neck",
    description: "Sabor marcante de lúpulo, puro malte premium mundial",
    price: 12.00,
    category: "LongNeck"
  },
  {
    id: "ln-corona",
    name: "Corona Long Neck",
    description: "Cerveja mexicana leve, ideal com uma rodela de limão",
    price: 12.00,
    category: "LongNeck"
  },
  {
    id: "ln-bud",
    name: "Budweiser Long Neck",
    description: "Sabor suave e equilibrado, filtrada em madeira de faia Beechwood",
    price: 10.00,
    category: "LongNeck"
  }
];
