const afficherDe = document.querySelector("#afficherDe");
const afficherResultat = document.querySelector("#afficherResultat");
const btnLancer = document.querySelector("#btnLancer");

//Initialisation du dé a 1
let resultat = 1;

btnLancer.addEventListener("click", () => {
  // Résultat aléatoire entre 1 et 6
  resultat = Math.floor((Math.random() * 6) + 1);
  afficherResultat.innerHTML = resultat;
  switch (resultat) {
    case 1:
      afficherDe.src = "images/de1.png";
      break;
    case 2:
      afficherDe.src = "images/de2.png";
      break;
    case 3:
      afficherDe.src = "images/de3.png";
      break;
    case 4:
      afficherDe.src = "images/de4.png";
      break;
    case 5:
      afficherDe.src = "images/de5.png";
      break;
    case 6:
      afficherDe.src = "images/de6.png";
      break;
    default:
      break;
  }
});
