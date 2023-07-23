import get from './getElement.js';

const hexValue = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

const main = get('main');
const colorValue = get('#color-value');

const hexColor = () => {
  let intialValue = '#';

  for (let i = 1; i < 7; i++) {
    const randomValue = Math.floor(Math.random() * hexValue.length);
    intialValue += hexValue[randomValue];
  }
  main.style.backgroundColor = intialValue;
  colorValue.textContent = intialValue;
};

export default hexColor;
