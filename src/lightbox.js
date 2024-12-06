var modal = document.getElementById("modal-id");

var poumon = document.getElementById("poumon");
var coeur = document.getElementById("coeur");
var estomac = document.getElementById("estomac");

var span = document.querySelector(".close");
var text = document.querySelector(".modal-text");



poumon.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "Les poumons sont un parallèles à la respiration de la flore marine..."
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

