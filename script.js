function notValidNumber() {
    console.log("not valid number");
    document.getElementById("note-score-value").style.color = "red";
    document.getElementById("note-score-value").style.border = "2px solid red";
}
//--------
//--------
//--------
//--------
//--------

//----------------------------------Fonction de disparition de la validation msg

function deleteValidationMsg() {
    document.getElementById('note-added-validation-message').style.transition = "ease-in-out 0.15s";
    document.getElementById('note-added-validation-message').style.opacity = "0";
}
//------------------------------------------------------------------------------

//--------
//--------
//--------

//-----------------------------------Fonction d'apparition/disparition du formulair d'ajout

document.getElementById("add-form-btn-note").addEventListener("click", () => {

    let addBtn = document.getElementById("add-note-form-div-container");


    if (window.getComputedStyle(addBtn).display === "none") {
        document.getElementById("add-note-form-div-container").style.display = "block";
        document.getElementById('add-form-btn-note').innerHTML = 'Annuler <i class="glyphicon glyphicon-remove">';
    } else {
        document.getElementById("add-note-form-div-container").style.display = "none";
        document.getElementById('add-form-btn-note').innerHTML = 'Ajouter une note <i  id="add-note-icon" class="bi bi-journal-plus">';
    }

});

//---------------------------------------------------------------------------------------------

//--------
//--------
//--------

//--------------------------------Initilialisation des compteurs 
var noteCounter = 0;
var totalScore = 0;
var actualNotes = document.getElementById("note-score-container").innerHTML;

if (noteCounter < 1) {
    document.getElementById("note-score-container").innerHTML = actualNotes + '<div id="no-note-indicate-div" class="note-div-element-bloc"><span class="no-note-here">Aucune note <i id="no-note-icon" class="bi bi-calendar-x"></i></span></div>';
    document.getElementById('user-moyenne-score-span').innerHTML = "L'élève ne possède aucune moyenne";
} 

//----------------------------------------------------------------

//--------
//--------
//--------
//--------
//--------
//--------
//--------
//--------
//--------

//-------------------------------------Validation du formulaire d'ajout de note (note et matière)


    document.getElementById('add-form-note').addEventListener("submit", (e) => {
        e.preventDefault();
        let score = document.getElementById('note-score-value').value.replace(',', '.');
        console.log(typeof score);
        console.log(score);
        let matery = document.getElementById('note-matery').value;
        console.log(matery);

        let testreference = document.getElementById('nameoftest').value;
        
        localStorage.setItem(matery, score);
        console.log("Le stockage local de "+matery+" est : "+localStorage.getItem(matery));

    if (matery === "none") {
            document.getElementById("note-matery").style.border = "2px solid red";
        } else {
            if (score != "") {
    if (Number(score)) {
        if (Number(score) <= 20 && Number(score) >= 0) {
            document.getElementById('no-note-indicate-div').style.display = "none";
                actualNotes = document.getElementById("note-score-container").innerHTML;
                let elementAdded = '<div class="note-div-element-bloc"><span class="matery-of-note-bloc">'+matery+'</span><span class="score-of-note-bloc">'+score.replace('.', ',')+'/20</span></div>';
                   noteCounter++;
                   document.getElementById("note-score-container").innerHTML = actualNotes + elementAdded;
                   console.log(noteCounter);
                   totalScore = Number(totalScore) + Number(score);
                   let moyenne = totalScore / noteCounter;
                   console.log("La moyenne actuelle est de "+moyenne);
                   console.log("Le Compteur de note actuel est de "+noteCounter);
                   console.log("Le Score total est de "+totalScore);
                   document.getElementById('note-matery').value = "none";
                   document.getElementById('note-score-value').value = "";
                   let moyenneRounded = Math.round(moyenne * 100) / 100;
                   document.getElementById('user-moyenne-score-span').innerHTML = 'Moyenne générale de l'+"'élève: <span style="+'"color: #00ff37; font-weight: bold;">'+moyenneRounded+'/20</span>';
                   document.getElementById("add-note-form-div-container").style.display = "none";
                   document.getElementById('add-form-btn-note').innerHTML = 'Ajouter une note <i  id="add-note-icon" class="bi bi-journal-plus">';
                   document.getElementById('note-added-validation-message').style.opacity = "1";
                   setTimeout(deleteValidationMsg, 500);
        } else {
            notValidNumber();
        }
    } else {
        notValidNumber();
    }
} else {
    notValidNumber();
}
                
}})
//-----------------------------------------------------------------------------------------------



//document.getElementById('storage-script').innerHTML = "var "+testreference+
//Debut du code storage