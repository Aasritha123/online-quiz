var numQues = 15;
var numChoi = 3;
var answers = new Array(15);
answers[0] = "Dennis MacAlistair Ritchie";
answers[1] = "James Gosling";
answers[2] = "__C++__";
answers[3] = "Portable Document Format";
answers[4] = "Cascading Style Sheet";
answers[5] = "division,multiplication,Addition,substraction";
answers[6] = "Strstr()";
answers[7] = "*a";
answers[8] = "Arithmetic Relational Logical Assignment";
answers[9] = "The maximum number of arguments a function can take is 128";
answers[10] = "Identifier";
answers[11] = "for loop";
answers[12] = "Hyper text mark up language";
answers[13] = "Auto";
answers[14] = "int";
function getScore(form) {
        var score = 0;
        var currElt;
        var currSelection;
        for (i=0; i<numQues; i++) {
                currElt = i*numChoi;
                answered=false;
                for (j=0; j<numChoi; j++) {
                       currSelection = form.elements[currElt + j];
                       if (currSelection.checked) {
                                 answered=true;
                          if (currSelection.value == answers[i]) {
                                  score++;
                                  break;
                         }
                       }
                }
                if (answered ===false){alert("Do answer all the questions, Please") ;return false;}

        }
        var scoreper = Math.round(score/numQues*100);
        form.percentage.value = scoreper + "%";
        form.mark.value=score;

}
