// Foods Categories
export const FOOD_CATEGORIES = ["Burgers", "Pizzas"];

// City
export const cityData = ["Paris", "Bordeaux", "Strasbourg", "Reims", "Marseille", "Lille", "Toulouse", "Nice", "Rennes"];

//Format price
export const formatPrice = (price) => {
  return Math.round(price.toFixed(2) * 100) / 100;
};
