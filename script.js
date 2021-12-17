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
var totalCoeff = 0;
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
        score.replace(',', '.');
        console.log(typeof score);
        console.log(score);
        let matery = document.getElementById('note-matery').value;
        console.log(matery);

        let coeff = document.getElementById('note-coeff-value').value;

        function addingNote() {
            document.getElementById('no-note-indicate-div').style.display = "none";
                actualNotes = document.getElementById("note-score-container").innerHTML;
                let elementAdded = '<div class="note-div-element-bloc"><span class="matery-of-note-bloc">'+matery+'</span><span class="score-of-note-bloc">'+score.replace('.', ',')+'/20</span></div>';
                   
                   document.getElementById("note-score-container").innerHTML = actualNotes + elementAdded;
                  
                   console.log("Le Score total est de "+totalScore);
                   document.getElementById('note-matery').value = "none";
                   document.getElementById('note-score-value').value = "none";

                   totalScore = Number(totalScore) + Number(Number(score) * Number(coeff));
                   totalCoeff = Number(totalCoeff) + Number(coeff);
                   noteCounter++;
                   console.log(noteCounter);
                   let moyenne = totalScore / totalCoeff;
                   console.log("La moyenne actuelle est de "+moyenne);
                   console.log("Le Compteur de note actuel est de "+noteCounter);
                   
                   let moyenneRounded = Math.round(moyenne * 100) / 100;
                   //let goodMoyenne = Number(moyenneRounded).replace('.', ',');
                   document.getElementById('user-moyenne-score-span').innerHTML = 'Moyenne générale de l'+"'élève: <span style="+'"color: #00ff37; font-weight: bold;">'+moyenneRounded+'/20</span>';
                   document.getElementById("add-note-form-div-container").style.display = "none";
                   document.getElementById('add-form-btn-note').innerHTML = 'Ajouter une note <i  id="add-note-icon" class="bi bi-journal-plus">';
                   document.getElementById('note-added-validation-message').style.opacity = "1";
                   setTimeout(deleteValidationMsg, 1000);
        }








        function statusVerification() {
            if (score === "absent") {
                document.getElementById('no-note-indicate-div').style.display = "none";
                actualNotes = document.getElementById("note-score-container").innerHTML;
                let elementAdded = '<div class="note-div-element-bloc"><span class="matery-of-note-bloc">'+matery+'</span><span style="color: red; font-weight: bold;"class="score-of-note-bloc">A <i class="bi bi-calendar-x-fill"></i></span></div>';
                  
                   document.getElementById("note-score-container").innerHTML = actualNotes + elementAdded;
                   noteCounter++;
                   totalScore = Number(totalScore) + 0;
                   totalCoeff = Number(totalCoeff) + Number(coeff);
                   console.log(noteCounter);
                   let moyenne = totalScore / totalCoeff;
                   console.log("La moyenne actuelle est de "+moyenne);
                   console.log("Le Compteur de note actuel est de "+noteCounter);

                   document.getElementById('note-matery').value = "none";
                   document.getElementById('note-score-value').value = "none";
                   let moyenneRounded = Math.round(moyenne * 100) / 100;
                   document.getElementById('user-moyenne-score-span').innerHTML = 'Moyenne générale de l'+"'élève: <span style="+'"color: #00ff37; font-weight: bold;">'+moyenneRounded+'/20</span>';
                   document.getElementById("add-note-form-div-container").style.display = "none";
                   document.getElementById('add-form-btn-note').innerHTML = 'Ajouter une note <i  id="add-note-icon" class="bi bi-journal-plus">';
                   document.getElementById('note-added-validation-message').style.opacity = "1";
                   setTimeout(deleteValidationMsg, 1000);
            } else {
                if (score === "dispense") {
                    document.getElementById('no-note-indicate-div').style.display = "none";
                    actualNotes = document.getElementById("note-score-container").innerHTML;
                    let elementAdded = '<div class="note-div-element-bloc"><span class="matery-of-note-bloc">'+matery+'</span><span style="color: #03adfc; font-weight: bold;"class="score-of-note-bloc">D <i class="bi bi-file-earmark-medical-fill"></i></span></div>';
                       document.getElementById("note-score-container").innerHTML = actualNotes + elementAdded;
                       console.log(noteCounter);
                       console.log("Le Compteur de note actuel est de "+noteCounter);
                       console.log("Le Score total est de "+totalScore);
                       document.getElementById('note-matery').value = "none";
                       document.getElementById('note-score-value').value = "none";
                       document.getElementById("add-note-form-div-container").style.display = "none";
                       document.getElementById('add-form-btn-note').innerHTML = 'Ajouter une note <i  id="add-note-icon" class="bi bi-journal-plus">';
                       document.getElementById('note-added-validation-message').style.opacity = "1";
                       setTimeout(deleteValidationMsg, 1000);
                                          } 

                
                    }
            }
        

    if (matery === "none") {
            document.getElementById("note-matery").style.border = "2px solid red";
        } else {

               if (score != "") {
         
         
                if (Number(score)) {

                    if (Number(score) <= 20 && Number(score) >= 0) {
                         
                       if (coeff != "none") {
                        addingNote();
                       } else {
                           document.getElementById('note-coeff-value').style.border = "2px solid red";
                       }


                      

                    } else {


                      notValidNumber();//  Si il est superieur à 20 ou inférieur à 0
                           }
                    } else {
                        statusVerification(); // Si ce n'est pas des chiffres
                           }
} else {
    notValidNumber();
}
                
}})
//-----------------------------------------------------------------------------------------------



//document.getElementById('storage-script').innerHTML = "var "+testreference+
//Debut du code storage