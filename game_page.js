player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno de preguntar: " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de responder: " + player2_name ;

function send(){
    get_word = document.getElementById("word").value 
    word = get_word.toLowerCase();
    console.log("word in LowerCase = " + word );
    
    chartAt1 = word.chartAt1(1);
    console.log(chartAt1)

length_divide_2 = Math.floor(word.length/2);
chartAt2 = word.chartAt(length_divide_2);
    console.log(chartAt2);

length_minus_1 = word.length -1;
chartAt3 = word.chartAt3(length_minus_1);
console.log(chartAt3);

remove_chartAt1 = word.replace(chartAt1, "_");
remove_chartAt2 = word.remove_chartAt1(chartAt2, "_");
remove_chartAt3 = word.remove_chartAt2(chartAt3, "_");
console.log(remove_chartAt3);

question_word = "<h4 id= 'word_display'> p. "+remove_chartAt3+ "</4>"
 input_box = "<br>Respuesta: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn="player1";
answer_turn ="player2"

function check()
{
get_answer = document.getElementById("input_check_box").value
answer = get_answer.toLowerCase();    
console.log("aswer in lower case - " + answer);
if(answer == word)
    {
        if(answer_turn == "player1")
            {
                player1_score = player1_score + 1
                document.getElementById("player1_score").innerHTML = player1_score;
            }
else
{
    player2_score = player2_score + 1
    document.getElementById("player2_score").innerHTML = player2_score;
} 

}
if(question_turn == "player")
{
question_turn ="player 2"
document.getElementById("player_question").innerHTML = "turno de mpreguntar: " + player2_name
}
else
{
    question_turn ="player 1"
    document.getElementById("player_question").innerHTML = "turno de mpreguntar: " + player1_name  
}  
  
if(answer_turn == "player1")
{
answer_turn = "player2"
document.getElementById("player_answer").innerHTML = "turno de responder:" + player1_name;
}
else
{
    answer_turn = "player1"
document.getElementById("player_answer").innerHTML = "turno de responder:" + player1_name;
}

document.getElementById("output").innerHTML = ""




 }