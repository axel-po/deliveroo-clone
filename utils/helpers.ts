// Foods Categories
export const FOOD_CATEGORIES = ["Burgers"];

// converting first letter to uppercase
export function capitalizeFirstLetter(str: string ) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}
