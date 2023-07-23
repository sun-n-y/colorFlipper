const get = (selction) => {
  const element = document.querySelector(selction);
  if (element) {
    return element;
  } else {
    throw new Error(`Error in target element selection`);
  }
};

export default get;
