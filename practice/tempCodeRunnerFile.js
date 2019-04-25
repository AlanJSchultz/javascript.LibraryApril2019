const first = (second, third) => {
  let newVar = second(third);
  console.log(newVar);
}

const second = (third) => {
  return 4 * third;
}

const third = () => {
  return 5;
}

first(second, third);
