document.getElementById('getScore').addEventListener("click",getScore);
function getScore() {
    var score=0;
    var answers = [];
    var correctanswers = ["PHP" , "2" , "Rabindranath Tagore" , "Aryabhata" ,
     "Gandhi" , "Akbar" , "Economist" , "Reita Faria" , "Chotta Chetan" , "Bengaluru"];
    answers[0]=document.quiz.question1.value;
    answers[1]=document.quiz.question2.value;
    answers[2]=document.quiz.question3.value;
    answers[3]=document.quiz.question4.value;
    answers[4]=document.quiz.question5.value;
    answers[5]=document.quiz.question6.value;
    answers[6]=document.quiz.question7.value;
    answers[7]=document.quiz.question8.value;
    answers[8]=document.quiz.question9.value;
    answers[9]=document.quiz.question10.value;

    for(i=0;i<10;i++)
    {
        if(answers[i] == correctanswers[i])
        {
            score++;
        }
    }
    quiz.style.display="none";
    var result=document.getElementById('result');
    result.textContent = "You have given " + score + " correct answers";
}