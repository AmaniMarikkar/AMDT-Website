



function showIt() {
    document.getElementById("hid").style.visibility = "visible";
  }
  setTimeout("showIt()", 5000); 

  

  const Answers = {
    q1:"Athens, 1896",
    q2:"Blue Ribbon Sports",
    q3:"88",
    q4:"Michelangelo",
    q5:"13",
    q6:"Switzerland",
    q7:"Horse",
    q8:"10,000",
    q9:"June 21",
    q10:"Constantinople",
  };

  function myAnswerCheckMethod(){

    var result = 0;

    for (const [queNo, answer] of Object.entries(Answers)) {

      var x = document.getElementsByName(queNo); //Number of radio button for each question - 4
      var correctAnswer = false;                 //Check correct answer is selected.
      var answered = false;                      //Check not answered questions.

      for (i = 0; i < x.length; i++) {

        if (x[i].type == "radio" && x[i].checked == true) {
          answered = true;

          if(x[i].value == answer){
            result = result + 2;
            correctAnswer = true;
          }
        }
      }

      if(!answered){
        alert("Please Answer the all Questions.");
        return false;
      }

      if(!correctAnswer){
        result = result - 1;
      }
    }

    if(result >= 12){
      var resultID = document.getElementById("result");
      resultID.classList.remove("d-none");
      resultID.classList.add("alert-success"); 
      resultID.innerHTML = 'Congratulations! You have scored '+ result +' out of 20 points.';
      document.documentElement.scrollTop = 0; 
    }
    else{
      if(result < 0){
        result = 0;
      }
      var resultID = document.getElementById("result");
      resultID.classList.remove("d-none");
      resultID.classList.add("alert-danger"); 
      resultID.innerHTML = 'Try harder next time! You have received only '+ result +' out of 20 points.';
      document.documentElement.scrollTop = 0; 
    }
  }

  function clearAll(){
    var ele = document.getElementsByTagName("input");
    for(var i=0;i<ele.length;i++){
      ele[i].checked = false;
    }
    var resultID = document.getElementById("result");
    resultID.classList.add("d-none");
    resultID.innerHTML = '';
    document.documentElement.scrollTop = 0; 
  }

  