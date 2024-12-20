var modal = document.getElementById("modal-id");

var poumon = document.getElementById("poumon");
var coeur = document.getElementById("coeur");
var estomac = document.getElementById("estomac");
var cerveau = document.getElementById("cerveau");
var articulations = document.getElementById("articulations");


var span = document.querySelector(".close");
var text = document.querySelector(".modal-text");
var img = document.querySelector(".modal-img");

let canvas = document.getElementById('jeu');

poumon.onclick = function () {
    if (canvas.gameCounter > 9) {
        modal.style.display = "block";
        text.innerHTML = 'Les poumons humains absorbent <a href="https://fr.vikidia.org/wiki/Oxyg%C3%A8ne" class="helper" target="_blank">l’oxygène</a> pour alimenter le corps en énergie et rejettent du <a href="https://fr.vikidia.org/wiki/Dioxyde_de_carbone" class="helper" target="_blank">CO₂</a>. De manière similaire, l’océan joue un rôle clé dans la respiration de la planète grâce au <a href="https://fr.vikidia.org/wiki/Plancton" class="helper" target="_blank">phytoplancton</a>, de minuscules organismes capables de transformer le CO₂ en oxygène grâce à la lumière du soleil. Ces "poumons bleus" produisent plus de la moitié de l’oxygène terrestre, tout en absorbant une partie du CO₂. Cet équilibre est fragile : la pollution et le <a href="https://fr.vikidia.org/wiki/R%C3%A9chauffement_climatique" class="helper" target="_blank">réchauffement climatique</a> perturbent cette respiration vitale. Protéger l’océan revient à préserver le souffle de la planète entière.'
        img.src = "images/plancton.jpg"
    }
}

coeur.onclick = function () {
    if (canvas.gameCounter > 19) {
        modal.style.display = "block";
        text.innerHTML = "Le cœur humain est le moteur du corps, pompant le sang à travers un réseau de <a href='https://fr.vikidia.org/wiki/Vaisseau_sanguin' class='helper' target='_blank'>vaisseaux</a> pour transporter <a href='https://fr.vikidia.org/wiki/Oxyg%C3%A8ne' class='helper' target='_blank'>l’oxygène</a> et les <a href='https://fr.vikidia.org/wiki/Nutriment' class='helper' target='_blank'>nutriments</a> jusqu’aux organes. De manière semblable, les courants océaniques agissent comme le <a href='https://fr.vikidia.org/wiki/Syst%C3%A8me_circulatoire' class='helper' target='_blank'>système circulatoire</a> de la planète, déplaçant l’eau, la chaleur et les nutriments à travers les mers pour maintenir l’équilibre <a href='https://fr.vikidia.org/wiki/Climat' class='helper' target='_blank'>climatique</a> et nourrir les <a href='https://fr.vikidia.org/wiki/%C3%89cosyst%C3%A8me' class='helper' target='_blank'>écosystèmes</a> marins. Comme le sang qui relie chaque partie du corps, ces courants connectent les océans, influençant les <a href='https://fr.vikidia.org/wiki/Cycle_de_vie' class='helper' target='_blank'>cycles de vie</a> et régulant la température globale. Les perturbations climatiques, à l’image des <a href='https://fr.vikidia.org/wiki/Maladie_cardio-vasculaire' class='helper' target='_blank'>maladies cardiovasculaires</a> pour le corps, mettent en danger ce système vital. Préserver les courants océaniques, c’est protéger le battement régulier du cœur de la Terre."
        img.src = "images/vagues.jpg"
    }
}

estomac.onclick = function () {
    if (canvas.gameCounter > 29) {
        modal.style.display = "block";
        text.innerHTML = "L’estomac transforme la nourriture en énergie pour le corps. L’océan, lui, agit comme un immense estomac pour la planète : il recycle les <a href='https://fr.vikidia.org/wiki/Nutriment' class='helper' target='_blank'>nutriments</a> et les déchets pour nourrir la vie marine. Tout comme les <a href='https://fr.vikidia.org/wiki/Acide' class='helper' target='_blank'>acides</a> de l’estomac décomposent les aliments, des organismes dans l’océan, comme le <a href='https://fr.vikidia.org/wiki/Plancton' class='helper' target='_blank'>phytoplancton</a>, transforment la matière en oxygène et en énergie. Mais si l’estomac peut être perturbé par des <a href='https://fr.vikidia.org/wiki/Toxine' class='helper' target='_blank'>toxines</a>, la pollution empêche l’océan de bien remplir son rôle, menaçant la vie sur Terre."
        img.src = "images/dauphin.webp"
    }
}

cerveau.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "Le cerveau est comme un <a href='https://fr.vikidia.org/wiki/Chef_d%27orchestre' class='helper' target='_blank'>chef d’orchestre</a> : il dirige tout dans le corps, en contrôlant les mouvements, la respiration et les pensées. L’océan joue un rôle semblable pour la planète. Grâce à ses courants et à ses échanges, il régule le <a href='https://fr.vikidia.org/wiki/Climat' class='helper' target='_blank'>climat</a>, influence la météo et nourrit la vie. Comme le cerveau enregistre des souvenirs, l’océan garde la chaleur et le <a href='https://fr.vikidia.org/wiki/Carbone' class='helper' target='_blank'>carbone</a> pour aider la Terre à rester stable. Mais quand il est pollué ou trop chauffé, cet équilibre est perturbé, un peu comme quand le stress affecte le cerveau. Protéger l’océan, c’est veiller sur le cœur et l’esprit de notre planète."
    img.src = "images/temperature.jpg"
}

articulations.onclick = function () {
    if (canvas.gameCounter > 39) {
        modal.style.display = "block";
        text.innerHTML = "Les <a href='https://fr.vikidia.org/wiki/Articulation' class='helper' target='_blank'>articulations</a> relient les os et permettent au corps de bouger avec fluidité. Elles sont comme des charnières qui supportent et coordonnent tous les gestes. L’océan joue un rôle similaire pour la planète : ses courants et ses marées connectent les continents, transportent la chaleur et les <a href='https://fr.vikidia.org/wiki/Nutriment' class='helper' target='_blank'>nutriments</a>, et maintiennent le mouvement des <a href='https://fr.vikidia.org/wiki/%C3%89cosyst%C3%A8me' class='helper' target='_blank'>écosystèmes</a>. Quand les articulations sont enflammées ou abîmées, le corps devient raide et perd sa mobilité. De la même manière, si l’océan est pollué ou perturbé par le réchauffement, ses courants ralentissent ou changent de direction, affectant le <a href='https://fr.vikidia.org/wiki/Climat' class='helper' target='_blank'>climat</a> et la vie marine. Prendre soin de l’océan, c’est préserver la souplesse et <a href='https://fr.vikidia.org/wiki/Harmonie' class='helper' target='_blank'>l’harmonie</a> des mouvements de la planète."
        img.src = "images/pollution.jpeg"
    }
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
    }
};
document.addEventListener('keydown', handleEscapeKey);

const checkOrganes = () => {
    if (canvas.gameCounter > 39) {
        articulations.classList.remove('locked')
    }
    if (canvas.gameCounter > 29) {
        estomac.classList.remove('locked')
    }
    if (canvas.gameCounter > 19) {
        coeur.classList.remove('locked')
    }
    if (canvas.gameCounter > 9) {
        poumon.classList.remove('locked')
    }
}

document.addEventListener('click', () => {
    checkOrganes();
})