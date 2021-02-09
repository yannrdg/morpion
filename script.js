const grid = document.getElementById("grid");
const divCase = document.querySelectorAll("#grid>div");
const button = document.querySelector("#rejouer");
const rond = document.getElementsByClassName("rond");
const croix = document.getElementsByClassName("croix");
const gagnant = document.querySelector("#gagnant");
const divCroix = document.querySelectorAll(".croix>div");

button.style.display = "none";

button.addEventListener("click", () => {
    window.location.reload();
})

let compteurDeTour = 0;
let compteurDeManche = 0;

let play = false;

let tDiv = [
	false, false, false, 
	false, false, false, 
	false, false, false
];

let tResult = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]

function cocherCase(i) {
    if(compteurDeTour%2 == 0)
    {
        rond[i].style.display = "block";
        tResult[i] = 1;
    }
    else
    {
        croix[i].style.display = "block";
        tResult[i] = 2;
    }
}

function compteur(){
    if(compteurDeTour < 9)
    {
        compteurDeTour +=1;
    }
    else
    {
        compteurDeTour = 0;
    }
}

function end(){
    //Si un joueur gagne alors toutes les cases passent à true pour ne pas pouvoir cocher d'autres cases
    if(play == true)
    {
        for(let j = 0; j < 9; j += 1)
        {
            tDiv[j] = true
            //rejouer();
        }  
    }else if(compteurDeTour == 9){
        //gagnant.innerHTML = "Dommage... Personne n'a gagné !"
        //rejouer();
        play = false;
        compteurDeTour = 0;
        compteurDeManche ++;
        for(let j = 0; j < 9; j += 1)
        {
            tDiv[j] = false;
            tResult[j] = 0;
            croix[j].style.display = "none";
            rond[j].style.display = "none";
            //rejouer();
        }  
    }
}

function rejouer()
{
    button.style.display = "block";
    grid.style.transitionDuration = "800ms";
    grid.style.opacity = 0.1;
}


function gagner(){
    //Pour les ronds Joueur 2
    if(tResult[0] == 1 && tResult[1] == 1 && tResult[2] == 1){
        //Horizontal haut
        play = true;
        gagnant.innerText = j2 + " a gagné !";
    }else if(tResult[0] == 1 && tResult[3] == 1 && tResult[6] == 1)
    {
        //Verticale gauche
        play = true;
        gagnant.innerText = j2 + " a gagné !";
    }else if(tResult[0] == 1 && tResult[4] == 1 && tResult[8] == 1)
    {
        //Diagonale HG/BD
        play = true;
        gagnant.innerText = j2 + " a gagné !";
    }else if(tResult[2] == 1 && tResult[4] == 1 && tResult[6] == 1)
    {
        //Diagonale HD/BG
        play = true;
        gagnant.innerText = j2 + " a gagné !";
    }else if(tResult[2] == 1 && tResult[5] == 1 && tResult[8] == 1)
    {
        //Verticale droite
        play = true;
        gagnant.innerText = j2 + " a gagné !";
    }else if(tResult[1] == 1 && tResult[4] == 1 && tResult[7] == 1)
    {
        //Verticale milieu
        play = true;
        gagnant.innerText = j2 + " a gagné !";
    }else if(tResult[3] == 1 && tResult[4] == 1 && tResult[5] == 1)
    {
        //horizontale centre
        play = true;
        gagnant.innerText = j2 + " a gagné !";
    }else if(tResult[6] == 1 && tResult[7] == 1 && tResult[8] == 1)
    {
        //horizontale bas
        play = true;
        gagnant.innerText = j2 + " a gagné !";
    }
    //Pour les croix Joueur 1
    else if (tResult[0] == 2 && tResult[1] == 2 && tResult[2] == 2){
        //Horizontal haut
        play = true;
        gagnant.innerText = j1 + " a gagné !";
    }
    else if(tResult[0] == 2 && tResult[3] == 2 && tResult[6] == 2)
    {
        //Verticale gauche
        play = true;
        gagnant.innerText = j1 + " a gagné !";
    }else if(tResult[0] == 2 && tResult[4] == 2 && tResult[8] == 2)
    {
        //Diagonale HG/BD
        play = true;
        gagnant.innerText = j1 + " a gagné !";
    }else if(tResult[2] == 2 && tResult[4] == 2 && tResult[6] == 2)
    {
        //Diagonale HD/BG
        play = true;
        gagnant.innerText = j1 + " a gagné !";
    }else if(tResult[2] == 2 && tResult[5] == 2 && tResult[8] == 2)
    {
        //Verticale droite
        play = true;
        gagnant.innerText = j1 + " a gagné !";
    }else if(tResult[1] == 2 && tResult[4] == 2 && tResult[7] == 2)
    {
        //Verticale milieu
        play = true;
        gagnant.innerText = j1 + " a gagné !";
    }else if(tResult[3] == 2 && tResult[4] == 2 && tResult[5] == 2)
    {
        //horizontale centre
        play = true;
        gagnant.innerText = j1 + " a gagné !";
    }else if(tResult[6] == 2 && tResult[7] == 2 && tResult[8] == 2)
    {
        //horizontale bas
        play = true;
        gagnant.innerText = j1 + " a gagné !";
    }
}

//Demander aux joueurs de rentrer le nom

let j1 = prompt("Entrez votre prénom du joueur 1","");
let j2 = prompt("Entrez votre prénom du joueur 2","");

if((j1 || j2) == null){
    j1 = "Joueur 1";
    j2 = "Joueur 2";
}else if((j1 || j2) == ""){
    j1 = "Joueur 1";
    j2 = "Joueur 2";
}

for(let i = 0; i < 9; i += 1)
{
    divCase[i].addEventListener("click", () => {
        if(tDiv[i] === false)
        {
            compteur();
            cocherCase(i);
            tDiv[i] = true;
            gagner();
            end();
            //console.log(compteurDeTour);
            //console.log(tDiv);
            console.log(compteurDeManche);
        }
    });

}