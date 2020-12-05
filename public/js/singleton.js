const uniqueNumber = (() => {
  let instance;
  const init = () => {
    return Math.random();
  };
  return {
    generate: () => {
      if (!instance) instance = init();
      return instance;
    },
  };
})();

const number1 = uniqueNumber.generate();
const number2 = uniqueNumber.generate();

console.log(number1 === number2);
