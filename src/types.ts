export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  prices?: {
    [key: string]: number;
  };
  category: "Draft" | "Promo" | "Espetinho" | "Caipirinha" | "LongNeck";
  options?: string[];
}

export interface BasketItem {
  item: MenuItem;
  selectedSize?: string;
  selectedOption?: string;
  quantity: number;
}
