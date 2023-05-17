/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

/* Exo 1 */
const question1 = "Quelle mer borde la ville de Sébastopol ?";
let solution1 = "la mer Noire";
let good_answers_counter = 0;

/* Exo 2 */
// Ton code ici...
reponse1 = prompt(question1);
if (reponse1 === solution1 ){
    alert("Gagné !");
    good_answers_counter += 1;
} else {
    alert("Perdu ...");
}

/* Exo 3 */
// Ton code ici...
const question2 = "Quel est l'âge du capitaine ?";
let solution2 = 63;

reponse2 = prompt(question2);
if (parseInt(reponse2) === solution2 ){
    alert("Gagné !");
    good_answers_counter += 1;
} else {
    alert("Perdu ...");
}

alert(`Vous avez donné ${good_answers_counter} bonnes réponses.`);
