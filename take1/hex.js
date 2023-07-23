import get from './utils/getElement.js';
import hexColor from './utils/hexColor.js';

const btn = get('.btn');

btn.addEventListener('click', function () {
  hexColor();
});
