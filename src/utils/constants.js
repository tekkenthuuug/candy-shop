const isDevelopment = process.env.NODE_ENV === "development";

export const API_BASE_URL = isDevelopment
  ? "http://localhost:8000"
  : "https://whispering-escarpment-12950.herokuapp.com";

export const ROUTES = {
  home: "/",
  shop: "/shop",
  cart: "/cart",
  order: "/order",
  item: "/shop/item",
  login: "/login",
  register: "/register",
  profile: "/profile",
};

export const NAV_LINKS = [
  {
    route: ROUTES.home,
    name: "Home",
  },
  {
    route: ROUTES.shop,
    name: "Shop",
  },
];

export const FILTERS = [
  [
    "Chocolate",
    "Caramel",
    "Nougat",
    "Coconut",
    "Peanut",
    "Sour",
    "Present Box",
    "Waffles",
    "Marmalade",
  ],
  ["Lactose free"],
];
