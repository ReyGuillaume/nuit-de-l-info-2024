var modal = document.getElementById("modal-id");

var poumon = document.getElementById("poumon");
var coeur = document.getElementById("coeur");
var estomac = document.getElementById("estomac");

var span = document.querySelector(".close");
var text = document.querySelector(".modal-text");
var img = document.querySelector(".modal-img");



poumon.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = 'Les poumons humains absorbent l’oxygène pour alimenter le corps en énergie et rejettent du CO₂. De manière similaire, l’océan joue un rôle clé dans la respiration de la planète grâce au phytoplancton, de minuscules organismes capables de transformer le CO₂ en oxygène grâce à la lumière du soleil. Ces "poumons bleus" produisent plus de la moitié de l’oxygène terrestre, tout en absorbant une partie du CO₂. Cet équilibre est fragile : la pollution et le réchauffement climatique perturbent cette respiration vitale. Protéger l’océan revient à préserver le souffle de la planète entière.'
    img.src = "https://img.freepik.com/photos-gratuite/gros-plan-cocktail-bulles_181624-3124.jpg?t=st=1733444364~exp=1733447964~hmac=7edeeeccf99b2f8067a5ad8dfd246b1472415bd7d7863db5673c0affa4e289d6&w=996"
}

coeur.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "Le coeur gère le flux sanguin et le flux sanguin est lié aux courants marins de l'océan."
}

estomac.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "L'estomac est représenté par le plancton qui est à l'origine de la chaîne alimentaire de la faune marine."
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

