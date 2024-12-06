const inputs = document.querySelectorAll('.input');
const buttons = document.querySelectorAll('.button');
const resetButton = document.getElementById('reset-button');

// Liste des associations entre boutons et inputs
const mapping = [3, 9, 6, 0, 2, 8, 5, 7, 1, 4];

// Stockage des intervalles pour pouvoir les arrêter
const intervals = [];

// Initialisation des inputs avec un défilement
inputs.forEach((input, index) => {
  input.chiffre = 0;
  input.textContent = input.chiffre;

  // Vitesse calculée en fonction de l'index
  const interval = 2000 / (index + 1);

  // Lancement du défilement pour chaque input
  // Stocker l'ID de l'intervalle
  intervals[index] = setInterval(() => {
    input.chiffre = (input.chiffre + 1) % 10;
    input.textContent = input.chiffre;
  }, interval);
});

// Associer les boutons selon la liste de mapping
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const inputIndex = mapping[index]; // Trouver l'input correspondant
    clearInterval(intervals[inputIndex]); // Arrêter l'intervalle de cet input

    // Changer les classes du bouton
    button.classList.remove('button');
    button.classList.add('button-checked');

    // Ajouter la classe input-checked à l'input associé
    const associatedInput = inputs[inputIndex];
    associatedInput.classList.remove('input');
    associatedInput.classList.add('input-checked');
  });
});

resetButton.addEventListener('click', () => {
  window.location.reload();
})
