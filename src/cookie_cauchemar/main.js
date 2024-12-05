function Counter(element, compte) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    compte.innerHTML = `Points:  ${counter}`; 
  };

  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

const poisson = document.getElementById('poisson');
const cpt = document.getElementById('cpt');

if (poisson) {
  Counter(poisson, cpt);
}

