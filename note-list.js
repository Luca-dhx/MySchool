

function addAllNote() {

    for (let notelist = 0; notelist <= 20; notelist+=0.5) {
       
        var htmlOptionItemNote = '<option id="'+notelist+'"class="option-list-matery" value="'+notelist+'">'+notelist+'</option>';
        
        
        let actualnotelist = document.getElementById('note-score-value').innerHTML;
        document.getElementById('note-score-value').innerHTML = actualnotelist + htmlOptionItemNote;
        console.log(notelist);
    }
}

addAllNote();



function addAllCoeff() {

    for (let coefflist = 1; coefflist <= 5; coefflist++) {
       
        var htmlOptionItemCoeff = '<option id="coeff-'+coefflist+'"class="option-list-matery" value="'+coefflist+'">'+coefflist+'</option>';
        
        
        let actualcoefflist = document.getElementById('note-coeff-value').innerHTML;
        document.getElementById('note-coeff-value').innerHTML = actualcoefflist + htmlOptionItemCoeff;
        console.log(coefflist);
    }
}

addAllCoeff();
