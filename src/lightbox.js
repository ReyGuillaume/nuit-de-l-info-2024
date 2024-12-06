var modal = document.getElementById("modal-id");

var poumon = document.getElementById("poumon");
var coeur = document.getElementById("coeur");
var estomac = document.getElementById("estomac");
var cerveau = document.getElementById("cerveau");

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
    text.innerHTML = "Le cœur humain est le moteur du corps, pompant le sang à travers un réseau de vaisseaux pour transporter l’oxygène et les nutriments jusqu’aux organes. De manière semblable, les courants océaniques agissent comme le système circulatoire de la planète, déplaçant l’eau, la chaleur et les nutriments à travers les mers pour maintenir l’équilibre climatique et nourrir les écosystèmes marins. Comme le sang qui relie chaque partie du corps, ces courants connectent les océans, influençant les cycles de vie et régulant la température globale. Les perturbations climatiques, à l’image des maladies cardiovasculaires pour le corps, mettent en danger ce système vital. Préserver les courants océaniques, c’est protéger le battement régulier du cœur de la Terre."
    img.src = ""
}

estomac.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "L’estomac humain est un organe clé qui transforme la nourriture en énergie pour le corps. De la même manière, l’océan agit comme un immense estomac pour la planète, absorbant des éléments nutritifs et des déchets pour les recycler et les redistribuer dans les écosystèmes marins. Dans l’estomac, des acides et des enzymes décomposent les aliments, tandis que dans l’océan, des organismes comme le phytoplancton, le zooplancton et les bactéries transforment la matière organique et le CO₂ en oxygène et en énergie pour d’autres formes de vie. Mais tout comme un excès de toxines peut perturber l’estomac humain, la pollution surcharge l’océan, compromettant sa capacité à nourrir la vie sur Terre."
    img.src = ""
}

cerveau.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = "Le cerveau est comme un chef d’orchestre : il dirige tout dans le corps, en contrôlant les mouvements, la respiration et les pensées. L’océan joue un rôle semblable pour la planète. Grâce à ses courants et à ses échanges, il régule le climat, influence la météo et nourrit la vie. Comme le cerveau enregistre des souvenirs, l’océan garde la chaleur et le carbone pour aider la Terre à rester stable. Mais quand il est pollué ou trop chauffé, cet équilibre est perturbé, un peu comme quand le stress affecte le cerveau. Protéger l’océan, c’est veiller sur le cœur et l’esprit de notre planète."
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

