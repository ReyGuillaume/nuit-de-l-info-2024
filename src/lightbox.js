var modal = document.getElementById("modal-id");

var poumon = document.getElementById("poumon");
var coeur = document.getElementById("coeur");
var estomac = document.getElementById("estomac");
var cerveau = document.getElementById("cerveau");
var articulations = document.getElementById("articulations");


var span = document.querySelector(".close");
var text = document.querySelector(".modal-text");
var img = document.querySelector(".modal-img");



poumon.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = 'Les poumons humains absorbent <a href="https://fr.vikidia.org/wiki/Oxyg%C3%A8ne" class="helper" target="_blank">l’oxygène</a> pour alimenter le corps en énergie et rejettent du <a href="https://fr.vikidia.org/wiki/Dioxyde_de_carbone" class="helper" target="_blank">CO₂</a>. De manière similaire, l’océan joue un rôle clé dans la respiration de la planète grâce au <a href="https://fr.vikidia.org/wiki/Plancton" class="helper" target="_blank">phytoplancton</a>, de minuscules organismes capables de transformer le CO₂ en oxygène grâce à la lumière du soleil. Ces "poumons bleus" produisent plus de la moitié de l’oxygène terrestre, tout en absorbant une partie du CO₂. Cet équilibre est fragile : la pollution et le <a href="https://fr.vikidia.org/wiki/R%C3%A9chauffement_climatique" class="helper" target="_blank">réchauffement climatique</a> perturbent cette respiration vitale. Protéger l’océan revient à préserver le souffle de la planète entière.'
    img.src = "https://img.freepik.com/photos-gratuite/gros-plan-cocktail-bulles_181624-3124.jpg?t=st=1733444364~exp=1733447964~hmac=7edeeeccf99b2f8067a5ad8dfd246b1472415bd7d7863db5673c0affa4e289d6&w=996"
}

coeur.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "Le cœur humain est le moteur du corps, pompant le sang à travers un réseau de <a href='https://fr.vikidia.org/wiki/Vaisseau_sanguin' class='helper' target='_blank'>vaisseaux</a> pour transporter <a href='https://fr.vikidia.org/wiki/Oxyg%C3%A8ne' class='helper' target='_blank'>l’oxygène</a> et les <a href='https://fr.vikidia.org/wiki/Nutriment' class='helper' target='_blank'>nutriments</a> jusqu’aux organes. De manière semblable, les courants océaniques agissent comme le <a href='https://fr.vikidia.org/wiki/Syst%C3%A8me_circulatoire' class='helper' target='_blank'>système circulatoire</a> de la planète, déplaçant l’eau, la chaleur et les nutriments à travers les mers pour maintenir l’équilibre <a href='https://fr.vikidia.org/wiki/Climat' class='helper' target='_blank'>climatique</a> et nourrir les <a href='https://fr.vikidia.org/wiki/%C3%89cosyst%C3%A8me' class='helper' target='_blank'>écosystèmes</a> marins. Comme le sang qui relie chaque partie du corps, ces courants connectent les océans, influençant les <a href='https://fr.vikidia.org/wiki/Cycle_de_vie' class='helper' target='_blank'>cycles de vie</a> et régulant la température globale. Les perturbations climatiques, à l’image des <a href='https://fr.vikidia.org/wiki/Maladie_cardio-vasculaire' class='helper' target='_blank'>maladies cardiovasculaires</a> pour le corps, mettent en danger ce système vital. Préserver les courants océaniques, c’est protéger le battement régulier du cœur de la Terre."
    img.src = ""
}

estomac.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "L’estomac transforme la nourriture en énergie pour le corps. L’océan, lui, agit comme un immense estomac pour la planète : il recycle les nutriments et les déchets pour nourrir la vie marine. Tout comme les acides de l’estomac décomposent les aliments, des organismes dans l’océan, comme le phytoplancton, transforment la matière en oxygène et en énergie. Mais si l’estomac peut être perturbé par des toxines, la pollution empêche l’océan de bien remplir son rôle, menaçant la vie sur Terre."
    img.src = ""
}

cerveau.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "Le cerveau est comme un chef d’orchestre : il dirige tout dans le corps, en contrôlant les mouvements, la respiration et les pensées. L’océan joue un rôle semblable pour la planète. Grâce à ses courants et à ses échanges, il régule le climat, influence la météo et nourrit la vie. Comme le cerveau enregistre des souvenirs, l’océan garde la chaleur et le carbone pour aider la Terre à rester stable. Mais quand il est pollué ou trop chauffé, cet équilibre est perturbé, un peu comme quand le stress affecte le cerveau. Protéger l’océan, c’est veiller sur le cœur et l’esprit de notre planète."
    img.src = ""
}

articulations.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "Les articulations relient les os et permettent au corps de bouger avec fluidité. Elles sont comme des charnières qui supportent et coordonnent tous les gestes. L’océan joue un rôle similaire pour la planète : ses courants et ses marées connectent les continents, transportent la chaleur et les nutriments, et maintiennent le mouvement des écosystèmes. Quand les articulations sont enflammées ou abîmées, le corps devient raide et perd sa mobilité. De la même manière, si l’océan est pollué ou perturbé par le réchauffement, ses courants ralentissent ou changent de direction, affectant le climat et la vie marine. Prendre soin de l’océan, c’est préserver la souplesse et l’harmonie des mouvements de la planète."
    img.src = ""
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

