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
        }
    }
} else {
    document.getElementById("note-score-value").style.color = "red";
                  document.getElementById("note-score-value").style.border = "2px solid red";
}