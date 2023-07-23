import get from './utils/getElement.js';
import simple from './utils/simple.js';

const btn = get('.btn');

btn.addEventListener('click', () => {
  simple();
});
