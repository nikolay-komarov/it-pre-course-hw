const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

const findOrange = (words) => {
  return words.indexOf("апельсин") !== -1
    ? "Ура! нашел"
    : "Придется поискать в другом магазине…"
};

console.log(findOrange(words));
