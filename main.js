function add_user(){
    player1_name=document.getElementById("player1_name_input").value ;
    player2_name=document.getElementById("player2_name_input").value ;
    localStorage.setItem("Player 1's Username",player1_name);
    localStorage.setItem("Player 2's Username",player2_name);
    window.location="gamepage.html";
}