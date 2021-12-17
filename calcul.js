    // Calcul de la moyenne
    
    totalScore = Number(totalScore) + Number(Number(score) * Number(coeff));
     totalCoeff = Number(totalCoeff) + Number(coeff);
      noteCounter++;
      let moyenne = totalScore / totalCoeff;
      console.log("La moyenne actuelle est de "+moyenne);
      console.log("Le Compteur de note actuel est de "+noteCounter);