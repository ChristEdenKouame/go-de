const afficherDe = document.querySelector("#afficherDe");
const afficherResultat = document.querySelector("#afficherResultat");
const btnLancer = document.querySelector("#btnLancer");

//Initialisation du dé a 1
let resultat = 1;
const arrayDe = ["images/de1.png", "images/de2.png", "images/de3.png", "images/de4.png", "images/de5.png", "images/de6.png"];

btnLancer.addEventListener("click", () => {
  let cpt = 0;
  const interval = setInterval(() => {

    const random = Math.floor((Math.random() * 6) + 1);

    afficherDe.src = arrayDe[random - 1];
    afficherResultat.innerHTML = random;

    setTimeout(() => {
    }, 50);

    cpt++;

    if (cpt >= 10) {
      clearInterval(interval);
    }
  }, 100)
});
