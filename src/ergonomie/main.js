const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
  input.chiffre = 0;
  input.textContent = input.chiffre;

  setInterval(() => {
    input.chiffre = (input.chiffre + 1) % 10;
    input.textContent = input.chiffre;
  }, 10);
});