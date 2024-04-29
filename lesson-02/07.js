let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk"
  }
};

console.log(passportMarried);

const newPassportMarried = {
  ...structuredClone(passportMarried),
  married: true,
};

console.log(newPassportMarried);
