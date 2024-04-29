let passport = {
  name: "Petr",
  surname: "Petrov",
};

console.log(passport.name);

const newPassport = {
  ...passport,
  name: 'Ivan',
};

console.log(newPassport.name);
