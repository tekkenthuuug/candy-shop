const isDevelopment = process.env.NODE_ENV === "development";

export const API_BASE_URL = isDevelopment ? "http://localhost:8000" : "https://whispering-escarpment-12950.herokuapp.com"

export const ROUTES = {
  home: '/',
  shop: '/shop',
  about: '/about',
  cart: '/cart',
  item: '/shop/item',
};

export const FILTERS = [['Chocolate', 'Caramel'], ['Lactose free']];
