import get from './getElement.js';

const colors1 = ['#f15025', 'red', 'green', 'Rgba(133,122,200)'];

const main = get('main');
const colorValue = get('#color-value');

const simple = () => {
  const randomValue = Math.floor(Math.random() * colors1.length);
  main.style.backgroundColor = colors1[randomValue];
  colorValue.textContent = colors1[randomValue].toUpperCase();
};

export default simple;
